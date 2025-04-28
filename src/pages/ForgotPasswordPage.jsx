import ForgotPasswordFormManager from "@/components/form/forgot-password-forms/ForgotPasswordFormManager";
import { Grid, GridItem, Image, Box, Flex } from "@chakra-ui/react";

function ForgotPasswordPage() {
  return (
    <Grid
      templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
      height="100%"
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
        maxHeight={{ base: "100%" }}
        maxWidth={"500px"}
        border="1px dotted blue" // debug:
      >
        <Flex
          gap="1.5rem"
          direction="column"
          width="100%"
          height="100%"
          // px={{ base: "10px", md: "0" }}
          border="1px dashed red" // debug:
        >
          <ForgotPasswordFormManager />
        </Flex>
      </GridItem>
    </Grid>
  );
}

export default ForgotPasswordPage;
