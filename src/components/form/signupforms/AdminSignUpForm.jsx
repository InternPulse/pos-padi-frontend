// $ This is the first form in the series of Admin Signup logic.
import { Box, Button, Flex, Link, Text, Fieldset } from "@chakra-ui/react";

import { useEffect } from "react";

// $ Icons
import { LuUser, LuMail } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";
import { MdLockOutline } from "react-icons/md";

// $ Custom form input and header
import FormInputField from "@/components/customComponents/FormInputField";
import FormHeader from "./FormHeader";

// $ Global Context
import { useGlobalContext } from "@/context/useGlobalContext";

// $ Form Schema and State Management
import { adminSchema } from "../schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// $ Custom hooks
import useMultiFormHook from "@/utils/useMultiFormHook";

const AdminSignUpForm = () => {
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
      firstName: formData?.firstName || "",
      lastName: formData?.lastName || "",
      email: formData?.email || "",
      phone: formData?.phone || "",
      password: formData?.password || "",
      confirmPassword: formData?.confirmPassword || "",
    },
    resolver: zodResolver(adminSchema),
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

  // Watch password value for requirement checks
  // const watchedPassword = watch("password");

  // $ Password requirement check function
  const getPasswordRequirements = (value) => {
    if (!value)
      return {
        minLength: false,
        hasNumber: false,
        hasSpecial: false,
      };

    return {
      minLength: value.length >= 8,
      hasNumber: /\d/.test(value),
      hasSpecial: /[!@#$%^&*()_\-+=[\]{};':"\\|,.<>/?]/.test(value),
      hasUppercase: /[A-Z]/.test(value),
    };
  };

  // Form field definitions
  const formFields = [
    {
      name: "firstName",
      label: "First Name",
      placeholder: "Enter first name",
      icon: LuUser,
    },
    {
      name: "lastName",
      label: "Last Name",
      placeholder: "Enter last name",
      icon: LuUser,
    },
    {
      name: "phone",
      label: "Phone No",
      placeholder: "Enter phone number",
      icon: IoCallOutline,
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter email",
      icon: LuMail,
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter password",
      icon: MdLockOutline,
    },
    {
      name: "confirmPassword",
      label: "Confirm Password",
      type: "password",
      placeholder: "Confirm password",
      icon: MdLockOutline,
    },
  ];

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
        rounded={{ base: "0", md: "md" }}
        bg="white"
        py={{ base: 2, md: "2.5rem" }}
        px={{ base: "1rem", md: 12 }}
        display="flex"
        alignItems="center"
        height="auto"
      >
        <Box width="100%" mx="auto">
          <FormHeader
            title="Create A New Account"
            subHeading="Input your personal details"
          />

          <Fieldset.Content>
            <Flex direction="column" gap={4}>
              {formFields.map((input) => (
                <FormInputField
                  key={input.name}
                  name={input.name}
                  type={input.type}
                  label={input.label}
                  placeholder={input.placeholder}
                  error={errors[input.name]}
                  value={watch(input.name) || ""}
                  icon={input.icon}
                  checkPasswordRequirements={
                    input.type === "password" ? getPasswordRequirements : null
                  }
                  registerField={register}
                />
              ))}
            </Flex>
          </Fieldset.Content>

          <Button
            type="submit"
            disabled={!isValid || formStepsSubmitted[currentStepIndex]}
            mt={6}
            w="full"
            bgColor={
              isValid && !formStepsSubmitted[currentStepIndex]
                ? "rgba(2, 177, 79, 1)"
                : "rgba(2, 177, 79, 0.5)"
            }
            size="lg"
            _hover={{
              bgColor: isValid
                ? "rgba(2, 177, 79, 0.9)"
                : "rgba(2, 177, 79, 0.5)",
              cursor: formStepsSubmitted[currentStepIndex]
                ? "not-allowed"
                : "pointer",
            }}
          >
            Continue
          </Button>
          <Flex justify="center" mt={4}>
            <Text color="gray.600" mr={1} fontSize={{ base: "0.875rem" }}>
              Do you have an account?
            </Text>
            <Link
              color="rgba(2, 177, 79, 1)"
              fontWeight="bold"
              href="/login"
              fontSize={{ base: "0.875rem" }}
            >
              Login
            </Link>
          </Flex>
        </Box>
      </Fieldset.Root>
    </form>
  );
};

export default AdminSignUpForm;
