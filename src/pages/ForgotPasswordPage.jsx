import ForgotPasswordFormManager from "@/components/form/forgot-password-forms/ForgotPasswordFormManager";
import { Grid, GridItem, Box } from "@chakra-ui/react";
import FormImage from "@/components/form/FormImage";
import { ContainCentral } from "./LoginPage";

function ForgotPasswordPage() {
  return (
    <Grid
      templateColumns={{
        base: "1fr",
        md: "50% 50%",
      }}
      _light={{
        bg:"white"
      }}
      height="100vh"
      bgColor={{ base: "", md: "rgba(0, 0, 0, 0.02)" }}
      width="100%"
      pt={{ base: "8rem", md: "0" }}
      // border="2px dashed red" // debug:
    >
      <GridItem
        height="100%"
        py="1.25rem"
        px={{ md: "1rem", lg: "1.875rem" }}
        display={{ base: "none", md: "block" }}
        // border="1px dashed blue" // debug:
      >
        <FormImage />
      </GridItem>
      <GridItem
        py="2.5rem"
        width="100%"
        mx={{ base: "auto", md: "0" }}
        maxHeight={{ base: "auto" }}
      >
        <ContainCentral>
          <Box w={{base: '100%' , md: "100%"}} maxW={"500px"}>
            <ForgotPasswordFormManager />
          </Box>
        </ContainCentral>
      </GridItem>
    </Grid>
  );
}

export default ForgotPasswordPage;
