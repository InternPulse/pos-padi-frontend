import ForgotPasswordFormManager from "@/components/form/forgot-password-forms/ForgotPasswordFormManager";
import { Grid, GridItem } from "@chakra-ui/react";
import FormImage from "@/components/form/FormImage";

function ForgotPasswordPage() {
  return (
    <Grid
      templateColumns={{
        base: "1fr",
        md: "minmax(30rem, 43.75rem) minmax(25rem, 31.25rem)",
      }}
      height="100vh"
      bgColor={{ base: "white", md: "rgba(0, 0, 0, 0.02)" }}
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
        maxWidth={"500px"}
        // border="2px dotted blue" // debug:
      >
        <ForgotPasswordFormManager />
      </GridItem>
    </Grid>
  );
}

export default ForgotPasswordPage;
