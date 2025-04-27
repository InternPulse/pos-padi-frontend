// $ This is the first form in the series of Admin Signup logic.

import { useEffect } from "react";

// $ Chakra Components
import { Box, Button, Flex, Link, Text, Fieldset } from "@chakra-ui/react";

// $ Icons
import { LuUser, LuMail } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";
import { MdLockOutline } from "react-icons/md";

// $ Custom form input and header
import FormInputField from "@/components/customComponents/FormInputField";
import FormHeader from "./FormHeader";

// $ Global Context
import { useGlobalContext } from "@/context/useGlobalContext";

// $ Form Input Field Data
const formFields = [
  {
    name: "firstName",
    label: "First Name",
    placeholder: "Enter first name",
    icon: LuUser,
    error: "Please enter a name",
  },
  {
    name: "lastName",
    label: "Last Name",
    placeholder: "Enter last name",
    icon: LuUser,
    error: "Please enter last name",
  },
  {
    name: "phone",
    label: "Phone No",
    placeholder: "enter phone number",
    icon: IoCallOutline,
    error: "Please enter a phone number",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "enter email",
    icon: LuMail,
    error: "Please enter a valid email",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "enter password",
    icon: MdLockOutline,
    error: "Please enter password",
  },
  {
    name: "confirmPassword",
    label: "confirm password",
    type: "password",
    placeholder: "enter password",
    icon: MdLockOutline,
    error: "The passwords must be the same",
  },
];

// $ util function for form validation, the location for custom hook /src/utils/useFormValidation.js
import useFormValidation from "@/utils/useFormValidation";
import useMultiFormHook from "@/utils/useMultiFormHook";

const AdminSignUpForm = () => {
  const {
    setFormData,
    formData,
    setCurrentStepIndex,
    currentStepIndex,
    setProgressStatus,
    // stepProgress,
    setFormStepsValidity,
    setFormStepsSubmitted,
  } = useGlobalContext();
  const { validate, validateField, errors, isValid, getPasswordRequirements } =
    useFormValidation(formFields);
  const { totalSteps } = useMultiFormHook();

  // $ Calculate if the form is complete enough to enable the button
  const requiredFields = [
    "firstName",
    "lastName",
    "email",
    "phone",
    "password",
    "confirmPassword",
  ];
  const isFormComplete = requiredFields.every((field) =>
    formData[field]?.trim?.()
  );

  // $ Update global form validity state when validation state changes
  useEffect(() => {
    setFormStepsValidity((prev) => ({
      ...prev,
      [currentStepIndex]: isValid,
    }));

    // $ Validate form on initial load and when form data changes
    if (Object.keys(formData).length > 0) {
      validate(formData);
    }
  }, [isValid, currentStepIndex, setFormStepsValidity, formData, validate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    Object.entries(formData).forEach(([key, value]) => {
      console.log(`${key}: ${value}`);
    });

    const payload = Object.fromEntries(
      Object.entries(formData).map(([key, value]) => [key, value.trim()])
    );

    setFormData(payload);

    // $ Final validation before submission
    const isValid = validate(formData);

    if (isValid) {
      // $ Mark this form step as successfully submitted (Right button will only be active once this state changes)
      setFormStepsSubmitted((prev) => ({
        ...prev,
        [currentStepIndex]: true,
      }));

      const stepProgress = 100 / totalSteps;
      setProgressStatus((prev) => Math.min(prev + stepProgress, 100));
      setCurrentStepIndex(currentStepIndex + 1);

      // console.log("totalSteps:", totalSteps);      // debug:
      // console.log("stepProgress:", stepProgress); // debug:
    }

    if (!isValid) {
      console.log("Form validation failed");
      // $ Set submitted state to false for invalid submissions, Right button will not work
      setFormStepsSubmitted((prev) => ({
        ...prev,
        [currentStepIndex]: false,
      }));
      return;
    }

    // $ Move to the next form or handle api call
    // console.log(stepProgress); // debug:
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
    // console.log(formData); // debug:

    // $ Validate just the changed field
    validateField(updatedFormData, name);
  };

  return (
    <Fieldset.Root
      width="100%"
      rounded="md"
      bg="white"
      py={{ base: "12 12 0 12", md: "40px" }}
      px={{ base: 8, md: 12 }}
      display="flex"
      alignItems="center"
      // border="1px dashed green"
    >
      <Box
        width="100%"
        mx="auto"
        //   border="1px solid green"
      >
        <FormHeader
          title="Create A New Account"
          subHeading="Input your personal details"
        />

        <Fieldset.Content spacing={4} align="stretch">
          <Flex direction="column" gap={Object.keys(errors).length > 0 ? 2 : 4}>
            {formFields.map((input) => (
              <FormInputField
                key={input.name}
                name={input.name}
                onChange={handleChange}
                type={input.type}
                label={input.label}
                placeholder={input.placeholder}
                error={errors[input.name]}
                value={formData[input.name]}
                icon={input.icon}
                checkPasswordRequirements={
                  input.type === "password" ? getPasswordRequirements : null
                }
              />
            ))}
          </Flex>
        </Fieldset.Content>

        <Button
          type="submit"
          mt={6}
          w="full"
          bgColor={
            isFormComplete ? "rgba(2, 177, 79, 1)" : "rgba(2, 177, 79, 0.5)"
          }
          size="lg"
          onClick={handleSubmit}
          _hover={{
            bgColor: isFormComplete
              ? "rgba(2, 177, 79, 1)"
              : `rgba(2, 177, 79, 0.5)`,
            cursor: isValid ? "pointer" : "not-allowed",
          }}
        >
          Continue
        </Button>
        <Flex justify="center" mt={4}>
          <Text color="gray.600" mr={1}>
            Do you have an account?
          </Text>
          <Link color="green.500" fontWeight="bold" href="/login">
            Login
          </Link>
        </Flex>
      </Box>
    </Fieldset.Root>
  );
};

export default AdminSignUpForm;
