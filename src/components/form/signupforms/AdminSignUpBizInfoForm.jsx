import { useEffect } from "react";

// $ Chakra Components
import { Box, Button, Flex, Fieldset } from "@chakra-ui/react";

// $ Custom form input, header and drop down
import FormInputField from "@/components/customComponents/FormInputField";
import FormHeader from "../FormHeader";
// import StateDropDown from "../inputs/StateDropDown";

// $ Global Context
import { useGlobalContext } from "@/context/useGlobalContext";

// $ Form Schema and State Management
import { bizInfoSchema } from "../schemas";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// $ Functions
// $ Test Function: Remove when complete
import {
  getState,
  filterLGAsByState,
  filterAxesByLGA,
} from "@/utils/getStateLocations";
import FormSelectField from "@/components/customComponents/FormSelectField";

// $ get the state information from the data
// const state = getState();

// $ Form Input Field Data
const formFields = [
  {
    name: "businessName",
    label: "Business Name",
    placeholder: "Enter Business Name",
    error: "Please enter a business name",
  },
  {
    name: "address",
    label: "Address",
    placeholder: "Enter your business location",
    error: "Please enter your business name",
  },
];

// $ util function to manage form logic /src/utils/useMultiFormHook.js
import useMultiFormHook from "@/utils/useMultiFormHook";
import { registerUser } from "@/backend-functions/useractions-api";

const AdminSignUpBizInfoForm = () => {
  const {
    setFormData,
    formData,
    setCurrentStepIndex,
    currentStepIndex,
    setProgressStatus,
    setFormStepsSubmitted,
    formStepsSubmitted,
    setFormStepsValidity,
  } = useGlobalContext();

  const { totalSteps } = useMultiFormHook();

  // $ Initialize react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    control,
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      businessName: "",
      address: "",
      state: "",
      lga: "",
      axis: "",
    },
    resolver: zodResolver(bizInfoSchema),
  });

  // $ Helper Functions to render the select options: Delete when complete
  const stateData = getState();

  const selectedState = useWatch({ control, name: "state" });
  // console.log("Selected State:", selectedState); //debug:
  const selectedLGA = useWatch({ control, name: "lga" });

  const lgaOptions = selectedState ? filterLGAsByState(selectedState) : [];
  // console.log("lga options from helper function:", lgaOptions); //debug:

  const axisOptions = selectedLGA
    ? filterAxesByLGA(selectedState, selectedLGA)
    : [];

  // $ Form Select Input Data
  const SelectFields = [
    {
      name: "state",
      label: "State",
      type: "text",
      placeholder: "Select State",
      data: stateData,
    },
    {
      name: "lga",
      label: "LGA",
      type: "text",
      placeholder: "Select LGA",
      data: lgaOptions,
    },
    {
      name: "axis",
      label: "Axis",
      type: "text",
      placeholder: "Select Axis",
      data: axisOptions,
    },
  ];

  // $ Handle form submission
  const onSubmit = (data) => {
    console.log("raw form data:", data);
    // $ Update global form data
    setFormData((prevData) => ({
      ...prevData,
      ...data,
    }));

    // $ Mark this step as submitted
    setFormStepsSubmitted((prev) => ({
      ...prev,
      [currentStepIndex]: true,
    }));

    // $ Update progress and move to next step
    const stepProgress = 100 / totalSteps;
    setProgressStatus((prev) => Math.min(prev + stepProgress, 100));
    setCurrentStepIndex(currentStepIndex + 1);

    console.log("formData:", formData); // debug:
    //TODO - Remind backend guys to either remove nin, we want to know owner
    const serverData = {
      email: formData.email,
      first_name: formData.firstName,
      last_name: formData.lastName,
      phone: formData.phone,
      nin: "12345678901",
      role: "agent",
      password: formData.password,
    };
    registerUser(serverData);
    console.log("form submitted:", formStepsSubmitted); // debug:
  };

  // $ Update global form validity state when validation state changes
  useEffect(() => {
    setFormStepsValidity((prev) => ({
      ...prev,
      [currentStepIndex]: isValid,
    }));
  }, [isValid, currentStepIndex, setFormStepsValidity]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Fieldset.Root
        width="100%"
        height="100%"
        rounded={{ base: "0", md: "md" }}
        _light={{
          bg: "white"
        }}
        py={{ base: 2, md: "2.5rem" }}
        px={{ base: 8, md: 12 }}
        display="flex"
        alignItems="center"
        // border="1px dashed blue" //debug:
      >
        <Box
          width="100%"
          mx="auto"
          //   border="1px solid green" //debug:
        >
          <FormHeader
            title="Business Information"
            subHeading=" Input your business details"
          />
          <Fieldset.Content spacing={4} align="stretch">
            <Flex
              direction="column"
              gap={
                Object.keys(errors).length > 0
                  ? { base: 1, md: 2 }
                  : { base: 2, md: 4 }
              }
            >
              {formFields.map((input) => (
                <FormInputField
                  key={input.name}
                  name={input.name}
                  type={input.type}
                  label={input.label}
                  placeholder={input.placeholder}
                  error={errors[input.name]}
                  value={input.name || ""}
                  registerField={register}
                />
              ))}
              {/* <StateDropDown width="100%" /> */}
              {SelectFields.map((select) => {
                if (select.name === "state") {
                  return (
                    <FormSelectField
                      key={select.name}
                      name={select.name}
                      label={select.label}
                      placeholder={select.placeholder}
                      data={select.data}
                      error={errors[select.name]}
                      control={control}
                      value={select.name || ""}
                      registerField={register}
                    />
                  );
                }
                if (select.name === "lga" && selectedState) {
                  return (
                    <FormSelectField
                      key={select.name}
                      name={select.name}
                      placeholder={select.placeholder}
                      label={select.label}
                      error={errors[select.name]}
                      control={control}
                      data={select.data}
                      value={select.name || ""}
                      registerField={register}
                    />
                  );
                }
                if (select.name === "axis" && selectedLGA) {
                  return (
                    <FormSelectField
                      key={select.name}
                      name={select.name}
                      placeholder={select.placeholder}
                      label={select.label}
                      error={errors[select.name]}
                      control={control}
                      data={select.data}
                      value={select.name || ""}
                      registerField={register}
                    />
                  );
                }
                return null;
              })}
            </Flex>
          </Fieldset.Content>
          <Button
            type="submit"
            mt={6}
            w="full"
            bgColor={isValid ? "rgba(2, 177, 79, 1)" : "rgba(2, 177, 79, 0.5)"}
            size="lg"
          >
            Continue
          </Button>
        </Box>
      </Fieldset.Root>
    </form>
  );
};

export default AdminSignUpBizInfoForm;
