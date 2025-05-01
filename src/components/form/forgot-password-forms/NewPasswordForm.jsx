// $ This is the first form in the series of Admin Signup logic.
import { Box, Button, Flex, Fieldset } from "@chakra-ui/react";
import { toaster } from "@/components/ui/toaster";

//$ React Hooks
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// $ Icons
import { MdLockOutline } from "react-icons/md";

// $ Custom form input and header
import FormInputField from "@/components/customComponents/FormInputField";
import FormHeader from "../FormHeader";

// $ Global Context
import { useGlobalContext } from "@/context/useGlobalContext";

// $ Form Schema and State Management
import { newPasswordSchema } from "../schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// $ Custom hooks & Functions
import useMultiFormHook from "@/utils/useMultiFormHook";
import { resetPassword } from "@/backend-functions/useractions-api";

const NewPasswordForm = () => {
  const navigate = useNavigate();

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
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      newPassword: "",
      confirmNewPassword: "",
    },
    resolver: zodResolver(newPasswordSchema),
  });

  // $ Handle form submission
  const onSubmit = (data) => {
    // todo: send POST request to api with new password.

    // $ Update global form data
    setFormData((prevData) => ({
      ...prevData,
      ...data,
    }));

    const finalData = { ...formData, ...data };
    // $ Mark this step as submitted
    setFormStepsSubmitted((prev) => ({
      ...prev,
      [currentStepIndex]: true,
    }));

    // $ Update progress and move to next step
    const stepProgress = 100 / totalSteps;
    setProgressStatus((prev) => Math.min(prev + stepProgress, 100));
    setCurrentStepIndex(currentStepIndex + 1);

    // console.log(data); //debug: data collected by this form
    console.log("finalData:", finalData); // debug: data collected for the entire form flow (email, password and confirm passwords.)
    // console.log("form submitted:", formStepsSubmitted); // debug:

    // todo: call the api with finalData i.e. email, password and new password

   
  
    resetPassword({
      email: finalData.email,
      otp: finalData.otp,
      new_password: finalData.newPassword,
      confirm_password: finalData.confirmNewPassword
    })

    // $ send data to the api
    toaster.create({
      title: "Password successfully updated",
      type: "success",
    });

    // $ reset the form data once successfully send the data to api
    setFormData({});
    reset();
    // $ redirect to login page or dashboard as per logic
    navigate("/login");
  };

  // Form field definitions
  const formFields = [
    {
      name: "newPassword",
      label: "Password",
      type: "password",
      placeholder: "Enter password",
      icon: MdLockOutline,
    },
    {
      name: "confirmNewPassword",
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
    <form onSubmit={handleSubmit(onSubmit)} style={{ height: "100%" }}>
      <Fieldset.Root
        width="100%"
        height="100%"
        rounded={{ base: "0", md: "md" }}
        bg="white"
        py={{ base: 2, md: "2.5rem" }}
        px={{ base: "1rem", md: 12 }}
        display="flex"
        alignItems="center"
      >
        <Box width="100%" mx="auto">
          <FormHeader
            title="Set Up A New Password"
            subHeading="Input a new login password"
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

export default NewPasswordForm;
