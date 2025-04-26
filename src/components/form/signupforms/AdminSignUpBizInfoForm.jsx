// $ Chakra Components
import { Box, Button, Flex, Fieldset } from "@chakra-ui/react";

// $ Custom form input, header and drop down
import FormInputField from "@/components/customComponents/FormInputField";
import FormHeader from "./FormHeader";
import StateDropDown from "../inputs/StateDropDown";

// $ Global Context
import { useGlobalContext } from "@/context/useGlobalContext";

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

// $ util function for form validation, the location for custom hook /src/utils/useFormValidation.js
import useFormValidation from "@/utils/useFormValidation";
import useMultiFormHook from "@/utils/useMultiFormHook";

const AdminSignUpBizInfoForm = () => {
  const { setFormData, formData, setProgressStatus } = useGlobalContext();
  const { totalSteps } = useMultiFormHook();
  const { validate, errors, validateField, isValid } =
    useFormValidation(formFields);

  const handleSubmit = (e) => {
    e.preventDefault();
    Object.entries(formData).forEach(([key, value]) => {
      console.log(`${key}: ${value}`);
    });

    const payload = Object.fromEntries(
      Object.entries(formData).map(([key, value]) => [key, value.trim()])
    );

    setFormData(payload);
    console.log(payload);

    const isValid = validate(formData);

    if (isValid) {
      const stepProgress = 100 / totalSteps;
      setProgressStatus((prev) => Math.min(prev + stepProgress, 100));
      alert("Signup Complete");
    }

    if (!isValid) {
      console.log("Form validation failed");
      return;
    }
    // $ Move to the next form or handle api call

    // setProgressStatus(0);
    // $ Route to the Login Page or redirect to the dashbaord
  };

  // $ Capture the form field data
  const handleChange = (e) => {
    const { name, value } = e.target;

    // $ Update form data
    const updatedFormData = {
      ...formData,
      [name]: value,
    };

    setFormData(updatedFormData);

    // $ Validate just the changed field
    validateField(updatedFormData, name);
  };

  return (
    <Fieldset.Root
      w={{ base: "100%", md: "100%" }}
      rounded="md"
      bg="white"
      py={{ base: "12 12 0 12", md: "40px" }}
      px={{ base: 8, md: 12 }}
      display="flex"
      alignItems="center"
      // border="1px dashed blue"
      height="100%"
    >
      <Box
        width="100%"
        mx="auto"
        //   border="1px solid green"
      >
        <FormHeader
          title="Business Information"
          subHeading=" Input your business details"
        />
        <Fieldset.Content spacing={4} align="stretch">
          <Flex direction="column" gap={Object.keys(errors).length > 0 ? 2 : 4}>
            {formFields.map((input) => (
              <FormInputField
                key={input.name}
                name={input.name}
                onChange={handleChange}
                label={input.label}
                placeholder={input.placeholder}
                error={errors[input.name]}
                icon={input.icon}
                value={formData[input.name]}
                type={input.type}
              />
            ))}
            <StateDropDown width="100%" onChange={handleChange} />
          </Flex>
        </Fieldset.Content>
        <Button
          type="submit"
          mt={6}
          w="full"
          bgColor={isValid ? "rgba(2, 177, 79, 1)" : "rgba(2, 177, 79, 0.5)"}
          size="lg"
          onClick={handleSubmit}
        >
          Continue
        </Button>
      </Box>
    </Fieldset.Root>
  );
};

export default AdminSignUpBizInfoForm;
