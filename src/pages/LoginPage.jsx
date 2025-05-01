import { Grid, GridItem, Flex, Box } from "@chakra-ui/react";
import LoginForm from "@/components/form/loginforms/LoginForm";
import FormImage from "@/components/form/FormImage";
import Logo from "@/components/header-nav-components/Logo";

export function ContainCentral({ children }) {
  return (
    <Flex width={"100%"} height={"100%"} justify={"center"} align={"start"}>
      {children}
    </Flex>
  );
}

function LoginPage() {
  return (
    <Grid
      maxH={"100vh"}
      templateColumns={{
        base: "1fr",
        // md: "minmax(30rem, 43.75rem) minmax(25rem, 31.25rem)",
        md: '50% 50%'
      }}
      height="100vh"
      bgColor={{ base: "white", md: "rgba(0, 0, 0, 0.02)" }}
      width="100%"
      //   border="2px dashed red" // debug:
    >
      <GridItem
        height="100%"
        maxH={"100vh"}
        py="1.25rem"
        px={{ md: "1rem", lg: "1.875rem" }}
        display={{ base: "none", md: "block" }}
        // border="1px dashed blue" // debug:
      >
        <ContainCentral>
          <FormImage />
        </ContainCentral>
      </GridItem>
      <GridItem
        py="6.25rem"
        width="100%"
        maxH={"100vh"}
        mx={{ base: "auto" }}
        px={{ base: "0", md: "0px" }}
        height={{ base: "auto" }}
        //border="1px dotted green" // debug:
      >
        <ContainCentral>
          <LoginForm />
        </ContainCentral>
      </GridItem>
    </Grid>
  );
}

export default LoginPage;
