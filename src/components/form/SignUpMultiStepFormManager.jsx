import useMultiFormHook from "@/utils/useMultiFormHook";
import { Container } from "@chakra-ui/react";

function SignUpMultiStepFormManager() {
  // $ Destructure the returned values from the custom hook
  const { step } = useMultiFormHook();

  return (
    <Container
      //   border="2px dashed red"
      position="relative"
      width="100%"
      height="100%"
      p="0"
    >
      {/* // $ ============== Form Rendered based on the step provided ============= */}
      {step}
    </Container>
  );
}

export default SignUpMultiStepFormManager;
