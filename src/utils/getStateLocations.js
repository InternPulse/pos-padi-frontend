import data from "@/assets/datasets/streets-and-cities/locations.json";

const locationData = data;
// $ 1. Function return the state value from the data
export const getState = () => {
  const rawData = locationData.locations.map((state) => state.value);

  // % The data required by the selectInput must be ['label':'value']
  return rawData.map((item) => ({
    label: item,
    value: item,
  }));
};

// $ 2. Function return the lga based on the state selected
export const filterLGAsByState = (state) => {
  const rawData =
    locationData.locations.find((item) => item.value === state)?.lgas || [];

  return rawData.map((lga) => ({
    label: lga.value,
    value: lga.value,
  }));
};

// $ 3. Function return the axis based on the lga selected
export const filterAxesByLGA = (state, lga) => {
  const stateObj = locationData.locations.find((item) => item.value === state);
  const lgaObj = stateObj?.lgas.find((item) => item.value === lga);

  return lgaObj?.locations.map((axis) => ({
    label: axis.value,
    value: axis.value,
  }));
};
