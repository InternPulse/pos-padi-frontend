import { useEffect } from "react";

// $ Chakra Components
import { Box, Button, Flex, Fieldset } from "@chakra-ui/react";

// $ Custom form input, header and drop down
import FormInputField from "@/components/customComponents/FormInputField";
import FormHeader from "../FormHeader";
import StateDropDown from "../inputs/StateDropDown";

// $ Global Context
import { useGlobalContext } from "@/context/useGlobalContext";

// $ Form Schema and State Management
import { bizInfoSchema } from "../schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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
    watch,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      businessName: formData?.businessName || "",
      address: formData?.address || "",
      state: formData?.state || "",
      lga: formData?.lga || "",
      axis: formData?.axis || "",
    },
    resolver: zodResolver(bizInfoSchema),
  });

  // $ Handle form submission
  const onSubmit = (data) => {
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
        w="100%"
        height="100%"
        rounded={{ base: "0", md: "md" }}
        bg="white"
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
                  value={watch(input.name) || ""}
                  registerField={register}
                />
              ))}
              <StateDropDown width="100%" />
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
