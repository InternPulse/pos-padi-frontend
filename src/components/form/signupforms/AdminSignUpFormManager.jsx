import useMultiFormHook from "@/utils/useMultiFormHook";
import { Container } from "@chakra-ui/react";

function SignUpFormManager() {
  // $ Destructure the returned values from the custom hook
  const { step } = useMultiFormHook();

  return (
    <Container position="relative" width="100%" height="100%" p="0">
      {/* // $ ============== Form Rendered based on the step provided ============= */}
      {step}
    </Container>
  );
}

export default SignUpFormManager;
