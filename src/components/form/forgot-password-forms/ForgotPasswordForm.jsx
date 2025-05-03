// $ This is the first form in the series of Admin Signup logic.
import { Box, Button, Flex, Fieldset } from "@chakra-ui/react";
import { toaster } from "@/components/ui/toaster";

import { useEffect } from "react";

// $ Icons
import { LuMail } from "react-icons/lu";

// $ Custom form input and header
import FormInputField from "@/components/customComponents/FormInputField";
import FormHeader from "../FormHeader";

// $ Global Context
import { useGlobalContext } from "@/context/useGlobalContext";

// $ Form Schema and State Management
import { forgotPasswordSchema } from "../schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// $ Custom hooks & Functions
import useMultiFormHook from "@/utils/useMultiFormHook";
import { forgotPassword } from "@/backend-functions/useractions-api";

const ForgotPasswordForm = () => {
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

  const { totalSteps } = useMultiFormHook("forgotPassword");

  // $ Initialize react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      email: formData?.email || "",
    },
    resolver: zodResolver(forgotPasswordSchema),
  });

  // $ Handle form submission
  const onSubmit = (data) => {
    // todo: api call POST request use data directly, will contain only email in this step

    // $ Update global form data.
    setFormData((prevData) => ({
      ...prevData,
      ...data,
    }));

    // $ Mark this step as submitted
    setFormStepsSubmitted((prev) => ({
      ...prev,
      [currentStepIndex]: true,
    }));

    toaster.create({
      title: "Verification code has been sent to your email ",
      type: "success",
    });

    // $ Update progress and move to next step
    const stepProgress = 100 / totalSteps;
    setProgressStatus((prev) => Math.min(prev + stepProgress, 100));
    setCurrentStepIndex(currentStepIndex + 1);

    forgotPassword(data);

    // console.log("formData:", data); // debug:
    // console.log("form submitted:", formStepsSubmitted); // debug:
  };

  // Form field definitions
  const formFields = [
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter email",
      icon: LuMail,
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
    <form onSubmit={handleSubmit(onSubmit)} style={{ height: "100%" }}>
      <Fieldset.Root
        width="100%"
        height="100%"
        rounded={{ base: "0", md: "md" }}
        _light={{
          bg: "white"
        }}
        py={{ base: 2, md: "2.5rem" }}
        px={{ base: "1rem", md: 12 }}
        display="flex"
        alignItems="center"
        // border="1px solid red" //debug:
      >
        <Box width="100%" mx="auto">
          <FormHeader
            title="Forgot Password"
            subHeading="Input your registered email"
          />

          <Fieldset.Content>
            <Flex direction="column" gap={4} mt={{ lg: "2.5rem" }}>
              {formFields.map((input) => (
                <FormInputField
                  key={input.name}
                  name={input.name}
                  type={input.type}
                  label={input.label}
                  placeholder={input.placeholder}
                  error={errors[input.name]}
                  value={input.name || ""}
                  icon={input.icon}
                  registerField={register}
                />
              ))}
            </Flex>
          </Fieldset.Content>

          <Button
            type="submit"
            disabled={formStepsSubmitted[currentStepIndex]}
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
        </Box>
      </Fieldset.Root>
    </form>
  );
};

export default ForgotPasswordForm;
