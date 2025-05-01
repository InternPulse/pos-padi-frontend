import AdminSignUpFormManager from "@/components/form/signupforms/AdminSignUpFormManager";
import FormImage from "@/components/form/FormImage";

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
import FormImage from "@/components/form/FormImage";
import { ContainCentral } from "./LoginPage";


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
      templateColumns={{ base: "1fr", md: "50% 50%" }}
      height="100vh"
      bgColor={{ base: "white", md: "rgba(0, 0, 0, 0.02)" }}
      width="100%"
      // border="2px dashed red" // debug:
    >
      <GridItem
        height="100%"
        maxHeight={{ md: "auto", lg: "100vh" }}
        py="1.25rem"
        px={{ md: "1rem", lg: "1.875rem" }}
        display={{ base: "none", md: "block" }}
        // border="1px dashed blue" // debug:
      >

        <ContainCentral>
          <FormImage/>
        </ContainCentral>

      </GridItem>
      <GridItem
        py="2.5rem"
        width="100%"
        mx={{ base: "auto" }}
        px={{ base: "0", md: "0px" }}
        height={{ base: "auto" }}
        maxWidth={"500px"}
        // border="1px dashed teal" // debug:
      >
        <ContainCentral>

        
        <Flex
          gap="1.5rem"
          direction="column"
          width="100%"
          height="100%"
          // px={{ base: "10px", md: "0" }}
          // border="2px solid red" // debug:
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
          <AdminSignUpFormManager />
        </Flex>
        </ContainCentral>
      </GridItem>
    </Grid>
  );
}

export default AdminSignUpPage;
