// $ This is the second form in the series of Admin Signup logic. The form is used to confirm the email address of the user trying to signup.

// $ Chakra Components
import { PinInput, Flex, Fieldset, Box, Button, Field } from "@chakra-ui/react";

// $ Icons
import { IoMailOutline } from "react-icons/io5";

// $ Custom form header
import FormHeader from "./FormHeader";

// $ util function for form validation, the location for custom hook /src/utils/useFormValidation.js
import useFormValidation from "@/utils/useFormValidation";
import { useGlobalContext } from "@/context/useGlobalContext";
import useMultiFormHook from "@/utils/useMultiFormHook";
import { useState, useEffect, useMemo } from "react";

export const PinInputForm = () => {
  // $ Number of Pin Boxes
  const numberOfInputs = 6;

  const { totalSteps } = useMultiFormHook();
  const [value, setValue] = useState(["", "", "", "", "", ""]);
  const { validate, errors, isValid, validateField } = useFormValidation([
    {
      name: "OTP",
      type: "pin",
      error: "PIN is required and must be exactly 6 digits",
    },
  ]);

  const { setProgressStatus, setCurrentStepIndex, currentStepIndex } =
    useGlobalContext();

  const pinData = useMemo(
    () => ({
      OTP: value,
    }),
    [value]
  );

  useEffect(() => {
    // $ Skip initial validation when the component first mounts and validate only when the value is non-empty
    if (value.some((v) => v !== "")) {
      validateField(pinData, "OTP");
    }
  }, [value, validateField]); // Only use `value`, `validateField`, and `pinData` here

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("pin value", value);

    // Check submission validity
    const submissionValid = validate(pinData);

    if (submissionValid) {
      const stepProgress = 100 / totalSteps;
      setProgressStatus((prev) => Math.min(prev + stepProgress, 100));
      setCurrentStepIndex(currentStepIndex + 1);
    } else {
      console.log("Form validation failed");
    }
  };

  return (
    <Fieldset.Root
      width="100%"
      height="100%"
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
          title="Verify Your Email"
          subHeading="Input the code that was send to your mail inbox"
        />
        <Flex
          mx="auto"
          align={"center"}
          justify={"center"}
          width="5rem"
          height="5rem"
          rounded={"full"}
          bgColor="rgba(2, 177, 79, 0.05)"
          my="2rem"
        >
          <IoMailOutline style={{ color: "rgba(2, 177, 79, 1)" }} size={32} />
        </Flex>
        <Field.Root invalid={errors["OTP"]}>
          <Fieldset.Content spacing={4} align="stretch">
            <PinInput.Root
              color="rgba(2, 177, 79, 1)"
              width="100%"
              value={value}
              onValueChange={(e) => setValue(e.value)}
            >
              <PinInput.HiddenInput />
              <PinInput.Control width="100%">
                <Flex justify={"space-between"} width="100%">
                  {Array.from({ length: numberOfInputs }).map((_, index) => (
                    <PinInput.Input
                      key={index}
                      index={index ?? ""}
                      type="pin"
                      boxSize="3.125rem"
                      borderColor="rgba(196, 196, 196, 0.5)"
                      _focus={{ borderColor: "rgba(2, 177, 79, 1)" }}
                      rounded="0.625rem"
                      fontWeight="600"
                      fontSize="1.125rem"
                      color="rgba(0, 0, 0, 1)"
                    />
                  ))}
                </Flex>
              </PinInput.Control>
            </PinInput.Root>
          </Fieldset.Content>
          <Field.ErrorText color={"red.500"} py="2">
            {errors.OTP}
          </Field.ErrorText>
        </Field.Root>
        <Button
          type="submit"
          mt={6}
          w="full"
          bgColor={isValid ? "rgba(2, 177, 79, 1)" : "rgba(2, 177, 79, 0.5)"}
          size="lg"
          onClick={handleSubmit}
        >
          Verify
        </Button>
      </Box>
    </Fieldset.Root>
  );
};
