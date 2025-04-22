import Location from "@/components/form/inputs/Location";
import data from "../../../assets/datasets/streets-and-cities/locations.json";
import { createListCollection, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function StateDropDown({ size, width }) {
  const [state, setState] = useState(data.locations[0].value);
  const [lga, setLga] = useState(
    data.locations.find((item) => item.value == state).lgas[0].value
  );
  const [axis, setAxis] = useState(
    data.locations
      .find((item) => item.value == state)
      .lgas.find((item) => item.value == lga)?.locations[0]?.value
  );

  const stateLocations = data.locations;
  const lgaLocations =
    stateLocations.find((item) => item.value == state).lgas || [];
  const axisLocations =
    lgaLocations.find((item) => item.value == lga)?.locations || [];

  useEffect(() => {

    {/* Reset LGA and Axis if State variable changes */}

    setLga(
      (prev) => stateLocations.find((item) => item.value == state).lgas[0].value
    );

    setAxis(
      (prev) =>
        lgaLocations.find((item) => item.value == lga)?.locations[0].value
    );
  }, [state]);

  useEffect(() => {

    {/* Reset Axis if LGA variable changes */}

    setAxis(
      (prev) =>
        lgaLocations.find((item) => item.value == lga).locations[0]?.value
    );
  }, [lga]);

  const [lgaVisible, setLgaVisible] = useState(false);
  const [axisVisible, setAxisVisible] = useState(false);

  const states = createListCollection({
    items: [...stateLocations],
  });

  const lgas = createListCollection({
    items: [...lgaLocations],
  });

  const axes = createListCollection({
    items: [...axisLocations],
  });

  function handleStateChange(value) {
    setState(value);
    setLgaVisible(true);
  }

  function handleLgaChange(value) {
    setLga(value);
    setAxisVisible(true);
  }

  return (
    <VStack gap={5} bg={{base: 'white', _dark: 'inherit'}} p={5} width={width} border={'1px solid red'} mt={'300px'}>
      {/* <Text>{state}</Text>
      <Text>{lga}</Text>
      <Text>{axis}</Text> */}
      <Location
        frameworks={states}
        label="State"
        setValue={handleStateChange} size={size} 
      />

      {lgaVisible && (
        <Location frameworks={lgas} label="LGA" setValue={handleLgaChange}  size={size} />
      )}
      {axisVisible && (
        <Location frameworks={axes} label="Axis" setValue={setAxis}  size={size} />
      )}
    </VStack>
  );
}

export default StateDropDown;
