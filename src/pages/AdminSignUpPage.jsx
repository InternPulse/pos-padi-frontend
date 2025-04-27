import SignUpMultiStepFormManager from "@/components/form/SignUpMultiStepFormManager";
import { useGlobalContext } from "@/context/useGlobalContext";
import {
  Grid,
  GridItem,
  Image,
  Box,
  Stack,
  Progress,
  Flex,
} from "@chakra-ui/react";

function AdminSignUpPage() {
  const { progressStatus } = useGlobalContext();
  return (
    <Grid
      templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
      height="100vh"
      // border="1px dashed red"
      bgColor="rgba(0, 0, 0, 0.02)"
    >
      <GridItem
        maxHeight="100vh"
        // border="1px dashed blue"
        py="20px"
        px="30px"
      >
        <Box height="100%">
          <Image
            src="/src/assets/POD.png"
            alt="Sign Up Visual"
            height="100%"
            width="100%"
            fit="cover"
            rounded="20px"
          />
        </Box>
      </GridItem>
      <GridItem
        p="40px 0px 44px 0"
        maxHeight="100vh"
        maxWidth={"500px"}
        // border="2px dashed red"
      >
        <Flex gap="1.5rem" direction="column" width="100%" height="100%">
          {/* // $ ======================= Progess Bar ======================= */}
          <Stack gap="1" position="relative">
            <Progress.Root defaultValue={0} value={progressStatus}>
              <Progress.Track height="3px">
                <Progress.Range bgColor="#02B14F" />
              </Progress.Track>
            </Progress.Root>
            <Box
              position="absolute"
              top="-4px" // Adjust vertically above the track
              left={`calc(${progressStatus}% - 6px)`} // Center dot
              boxSize="12px"
              borderRadius="full"
              bg="#02B14F"
              zIndex="1"
            />
          </Stack>
          <SignUpMultiStepFormManager />
        </Flex>
      </GridItem>
    </Grid>
  );
}

export default AdminSignUpPage;
