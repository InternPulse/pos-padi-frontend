import { Flex, VStack, Spinner, Text } from "@chakra-ui/react";
import Logo from "../header-nav-components/Logo";

function LoadingSpinner() {
  return (
    <Flex
      justify={"center"}
      align={"center"}
      width={"100vw"}
      height={"100vh"}
    >
      <VStack colorPalette="green">
        <Spinner color="colorPalette.600" size={"xl"} borderWidth={"3px"} />
        <Logo isConcise={true} />
        <Text
          textStyle={"sm"}
          fontWeight={"semibold"}
          italic
          color="gray.600"
        >
          Loading...
        </Text>
      </VStack>
    </Flex>
  );
}

export default LoadingSpinner