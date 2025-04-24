// $ Chakra Components
import { Box, Button, Flex, Link, Text, Fieldset } from "@chakra-ui/react";

// $ Icons
import { LuUser, LuMail } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";
import { MdLockOutline } from "react-icons/md";
import FormInputField from "@/components/customComponents/FormInputField";
import { useGlobalContext } from "@/context/useGlobalContext";

// $ Form Input Field Data
const formFields = [
  {
    name: "firstName",
    label: "First Name",
    placeholder: "first name",
    icon: LuUser,
    error: "please enter a name",
  },
  {
    name: "lastName",
    label: "Last Name",
    placeholder: "last name",
    icon: LuUser,
    error: "please enter last name",
  },
  {
    name: "phone",
    label: "Phone No",
    placeholder: "phone number",
    icon: IoCallOutline,
    error: "please enter a phone number",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "enter email",
    icon: LuMail,
    error: "please enter a valid email",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "enter password",
    icon: MdLockOutline,
    error: "please enter password",
  },
  {
    name: "confirmPassword",
    label: "confirm password",
    type: "password",
    placeholder: "enter password",
    icon: MdLockOutline,
    error: "ensure passwords are the same",
  },
];

// $ util function for form validation, the location for custom hook /src/utils/useFormValidation.js
import useFormValidation from "@/utils/useFormValidation";

const AdminSignUpForm = () => {
  const { setFormData, formData } = useGlobalContext();
  const { validate, errors } = useFormValidation(formFields);

  const handleSubmit = (e) => {
    e.preventDefault();
    Object.entries(formData).forEach(([key, value]) => {
      console.log(`${key}: ${value}`);
    });

    const payload = Object.fromEntries(
      Object.entries(formData).map(([key, value]) => [key, value.trim()])
    );

    setFormData(payload);

    const isValid = validate(formData);
    if (!isValid) {
      console.log("Form validation failed");
      return;
    }
    // $ Move to the next form or handle api call
  };

  // $ Capture the form field data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <Fieldset.Root
      w={{ base: "100%", md: "50%" }}
      bg="inherit"
      py={{ base: 12, md: 24 }}
      px={{ base: 8, md: 12 }}
      display="flex"
      alignItems="center"
    >
      <Box w="full" maxW="md" mx="auto">
        {/* <Stack spacing={8}> */}
        <Flex mb={6} direction="column" gap="2">
          <Fieldset.Legend fontSize="1.5rem">
            Create A New Account
          </Fieldset.Legend>
          <Fieldset.HelperText color="gray.600">
            Input your personal details
          </Fieldset.HelperText>
        </Flex>

        <Fieldset.Content spacing={4} align="stretch">
          <Flex direction="column" gap="4">
            {formFields.map((input) => (
              <FormInputField
                key={input.name}
                name={input.name}
                onChange={handleChange}
                label={input.label}
                placeholder={input.placeholder}
                error={errors[input.name]}
                icon={input.icon}
              />
            ))}
          </Flex>
        </Fieldset.Content>

        <Button
          type="submit"
          mt={6}
          w="full"
          colorPalette="green"
          size="lg"
          onClick={handleSubmit}
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
        {/* </Stack> */}
      </Box>
    </Fieldset.Root>
  );
};

export default AdminSignUpForm;
