import SignUpMultiStepFormManager from "@/components/form/signupforms/SignUpMultiStepFormManager";
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

  // $ Function to handle the progress bar status dot position relative to the track
  const getDotLeftPosition = (progressStatus) => {
    if (progressStatus === 0) {
      return "calc(0% + 6px)";
    } else if (progressStatus === 100) {
      return "calc(100% - 16px)";
    } else {
      return `calc(${progressStatus}% - 6px)`;
    }
  };

  return (
    <Grid
      templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
      height="auto"
      bgColor={{ base: "white", md: "rgba(0, 0, 0, 0.02)" }}
      width="100%"
      // bgColor="rgba(0, 0, 0, 0.2)"
      // border="2px dashed red" // debug:
    >
      <GridItem
        height="auto"
        // maxHeight={{ md: "auto", lg: "100vh" }}
        py="1.25rem"
        px={{ md: "1rem", lg: "1.875rem" }}
        display={{ base: "none", md: "block" }}
        // border="1px dashed blue" // debug:
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
        py="2.5rem"
        width="100%"
        mx={{ base: "auto", md: "0" }}
        px={{ base: "0", md: "0px" }}
        maxHeight={{ base: "auto" }}
        maxWidth={"500px"}
        // border="1px dotted blue" // debug:
      >
        <Flex
          gap="1.5rem"
          direction="column"
          width="100%"
          height="100%"
          // px={{ base: "10px", md: "0" }}
          // border="1px dashed red" // debug:
        >
          {/* // $ ======================= Progess Bar ======================= */}
          <Stack gap="1" position="relative">
            <Box px={{ base: "1rem", md: "0" }}>
              <Progress.Root defaultValue={0} value={progressStatus}>
                <Progress.Track height="3px">
                  <Progress.Range bgColor="#02B14F" />
                </Progress.Track>
              </Progress.Root>
            </Box>
            <Box
              position="absolute"
              top="-4px" // % Adjust vertically above the track
              left={{
                base: getDotLeftPosition(progressStatus),
                md: `calc(${progressStatus}% - 6px)`,
              }} // % Center dot
              boxSize="12px"
              borderRadius="full"
              bg="#02B14F"
              zIndex="1"
              transition="left 0.3s ease"
            />
          </Stack>
          <SignUpMultiStepFormManager />
        </Flex>
      </GridItem>
    </Grid>
  );
}

export default AdminSignUpPage;
