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
import { useState } from "react";

export const PinInputForm = () => {
  // $ Number of Pin Boxes
  const numberOfInputs = 6;

  const { totalSteps } = useMultiFormHook();

  // $ Initial state for the pin data array
  const [value, setValue] = useState(["", "", "", "", "", ""]);

  // $ Hook to validate the pin once submitted
  const { validate, errors, isPinComplete } = useFormValidation([
    {
      name: "OTP",
      type: "pin",
      error: "PIN is required and must be exactly 6 digits",
    },
  ]);

  const { setProgressStatus, setCurrentStepIndex, currentStepIndex } =
    useGlobalContext();

  // $ Form Submit Function handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("pin value", value); // debug: console.log

    // $ Create the data object for validation
    const pinData = { OTP: value };

    // $ Check submission validity using the validate hook function
    const isValid = validate(pinData);

    if (isValid) {
      const stepProgress = 100 / totalSteps;
      setProgressStatus((prev) => Math.min(prev + stepProgress, 100));
      setCurrentStepIndex(currentStepIndex + 1);
      alert("Signup Complete");
    } else {
      console.log("Form validation failed");
    }
  };

  // $ Check if all 6 digits was entered to change the button color
  const pinComplete = isPinComplete(value);

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
          bgColor={
            pinComplete ? "rgba(2, 177, 79, 1)" : "rgba(2, 177, 79, 0.5)"
          }
          size="lg"
          onClick={handleSubmit}
        >
          Verify
        </Button>
      </Box>
    </Fieldset.Root>
  );
};
