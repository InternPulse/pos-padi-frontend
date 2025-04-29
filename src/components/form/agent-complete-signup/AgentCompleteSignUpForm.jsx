// $ This is the first form in the series of Admin Signup logic.
import { Box, Button, Flex, Fieldset, Image } from "@chakra-ui/react";
import { toaster } from "@/components/ui/toaster";

// $ Icons & Images
import { MdLockOutline } from "react-icons/md";

// $ Custom form input and header
import FormInputField from "@/components/customComponents/FormInputField";
import FormHeader from "../FormHeader";

// $ Global Context

// $ Form Schema and State Management
import { agentSignUpSchema } from "../schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const AgentCompleteSignUpForm = () => {
  // $ Initialize react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      agentPassword: "",
      confirmAgentPassword: "",
    },
    resolver: zodResolver(agentSignUpSchema),
  });

  // $ Handle form submission
  const onSubmit = (data) => {
    // todo: api call POST request

    toaster.create({
      title: "Account Updated Successfully",
      type: "success",
    });

    console.log("formData:", data); // debug:
    reset(); // todo: Reset the form after successfull api call using this function
  };

  // $ Form field definitions
  const formFields = [
    {
      name: "agentPassword",
      label: "password",
      type: "password",
      placeholder: "Enter password ",
      icon: MdLockOutline,
    },
    {
      name: "confirmAgentPassword",
      label: "Confirm Password",
      type: "password",
      placeholder: "Enter password",
      icon: MdLockOutline,
    },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ height: "100%" }}>
      <Fieldset.Root
        width={{ lg: "100%" }}
        maxWidth={{ base: "25rem", md: "100%" }}
        mx={{ base: "auto", lg: "0" }}
        rounded={{ base: "0", md: "md" }}
        bg="white"
        py={{ base: 2, md: "1rem" }}
        px={{ base: "1rem", md: 12 }}
        display="flex"
        alignItems="center"
        height="100%"
        // border="1px solid red" //debug:
      >
        <Box
          display={{ base: "block", md: "none" }}
          height="auto"
          width="100%"
          mb="2.56rem"
          // border="1px dashed red" //debug:
        >
          <Image
            src="/src/assets/logo-lg.png"
            alt="pos-padi-logo"
            height="2rem"
            mx="auto"
          />
        </Box>
        <Box width="100%" mx="auto">
          <Box
            mt={{ lg: "1.5rem" }}
            // border="1px solid blue" // debug:
          >
            <FormHeader
              title="Complete Sign Up"
              subHeading="Input your password to complete Sign Up"
            />
          </Box>

          <Fieldset.Content>
            <Flex
              direction="column"
              gap={{ base: "4", lg: "1rem" }}
              mt={{ md: "2rem", lg: "2.8rem" }}
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
                  icon={input.icon}
                  registerField={register}
                />
              ))}
            </Flex>
          </Fieldset.Content>
          <Button
            type="submit"
            mt={{ base: "2rem", lg: "2.5rem" }}
            w="full"
            bgColor={isValid ? "rgba(2, 177, 79, 1)" : "rgba(2, 177, 79, 0.5)"}
            size="lg"
            _hover={{
              bgColor: isValid
                ? "rgba(2, 177, 79, 0.9)"
                : "rgba(2, 177, 79, 0.5)",
            }}
          >
            Confirm
          </Button>
        </Box>
      </Fieldset.Root>
    </form>
  );
};

export default AgentCompleteSignUpForm;
