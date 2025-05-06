import FormImage from "@/components/form/FormImage";
import { Grid, GridItem, Flex } from "@chakra-ui/react";
import AgentCompleteSignUpForm from "@/components/form/agent-complete-signup/AgentCompleteSignUpForm";

function AgentCompleteSignUpPage() {
  return (
    <Grid
      templateColumns={{
        base: "1fr",
        md: "50% 50%",
      }}
      height="100vh"
      bgColor={{ base: "", md: "rgba(0, 0, 0, 0.02)" }}
      width="100%"
      //   border="2px dashed red" // debug:
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
        py="3rem"
        width="100%"
        mx={{ base: "auto" }}
        px={{ base: "0", md: "0px" }}
        height="100%"
        // border="1px dotted green" // debug:
      >
        <Flex width="100%" height="100%" justify="center" align="center">
          <AgentCompleteSignUpForm />
        </Flex>
      </GridItem>
    </Grid>
  );
}
export default AgentCompleteSignUpPage;
