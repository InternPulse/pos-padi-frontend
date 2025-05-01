// $ This is the first form in the series of Admin Signup logic.

import {
  Box,
  Button,
  Flex,
  Link,
  Text,
  Fieldset,
  Image,
} from "@chakra-ui/react";
import { toaster } from "@/components/ui/toaster";

// $ Icons & Images
import { LuMail } from "react-icons/lu";
import { MdLockOutline } from "react-icons/md";

// $ Custom form input and header
import FormInputField from "@/components/customComponents/FormInputField";
import FormHeader from "../FormHeader";

// $ Global Context

// $ Form Schema and State Management
import { loginSchema } from "../schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/Authentication/AuthProvider";
import { loginUser } from "@/backend-functions/useractions-api";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  // $ Initialize react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      loginPassword: "",
    },
    resolver: zodResolver(loginSchema),
  });

  // $ Handle form submission
  const onSubmit = async (data) => {
    // todo: api call POST request

    toaster.create({
      title: "Login Successful",
      type: "success",
    });

    console.log("formData:", data); // debug:
    // reset(); // todo: Reset the form after successfull api call using this function
    console.log(data)
    //reshaping the login keys
    const response = await loginUser({
            "email": data.email,
            "password": data.loginPassword,
          });
          // console.log(response)
          if (response.ok) {
            setAuth(true)
          }
          
          navigate("/")
          
    
  };

  // $ Form field definitions
  const formFields = [
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter email",
      icon: LuMail,
    },
    {
      name: "loginPassword",
      label: "Password",
      type: "password",
      placeholder: "Enter password",
      icon: MdLockOutline,
    },
  ];

  //   const handleLogin = async (e) => {
  //     e.preventDefault();

  //     console.log("Hi")

  //     const response = await loginUser({
  //       "email": "owner1@test.com",
  //       "password": "Jonathan1@"
  //     });
  //     console.log(response)
  //     if (response.ok) {
  //       setAuth(true)
  //     }
  //   }

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
        height={{ base: "auto", lg: "37.5rem" }}
        // border="1px solid red" //debug:
      >
        <Box
          display={{ base: "block", md: "none" }}
          height="auto"
          width="100%"
          mb="2.56rem"
          // border="1px solid red" //debug:
        >
          <Image
            src="/src/assets/logo-lg.png"
            alt="pos-padi-logo"
            height="2rem"
            mx="auto"
          />
        </Box>
        <Box width="100%" mx="auto">
          <Box mt={{ lg: "3.75rem" }}>
            <FormHeader
              title="Login To Your Account"
              subHeading="Welcome back! Input your login details"
            />
          </Box>

          <Fieldset.Content>
            <Flex direction="column" gap={{ base: "4", lg: "1rem" }}>
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
          <Flex justify="end" width="100%" mt={{ base: "0.625rem" }}>
            <Link
              color="rgba(2, 177, 79, 1)"
              href="/forgot-password"
              fontSize={{ base: "0.875rem" }}
            >
              Forgot Password?
            </Link>
          </Flex>
          <Button
            type="submit"
            disabled={ isSubmitting}
            isLoading={isSubmitting}
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
            {isSubmitting ? "Submitting..." : "Login"}
          </Button>
          <Flex justify="center" mt={{ base: 4, lg: "1.875rem" }}>
            <Text color="gray.600" mr={1} fontSize={{ base: "0.875rem" }}>
              Do you have an account?
            </Text>
            <Link
              color="rgba(2, 177, 79, 1)"
              fontWeight="bold"
              href="/admin-signup"
              fontSize={{ base: "0.875rem" }}
            >
              Sign Up
            </Link>
          </Flex>
        </Box>
      </Fieldset.Root>
    </form>
  );
};

export default LoginForm;
