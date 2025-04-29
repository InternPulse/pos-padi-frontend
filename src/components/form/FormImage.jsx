import { Box, Image, Heading, Text, Flex, HStack } from "@chakra-ui/react";
import podImage from "../../../src/assets/POD.png";
import logoImage from "../../../src/assets/logo.svg";

function FormImage() {
  return (
    <Box position="relative" width="100%" height="100%" overflow="hidden">
      <Image
        src={podImage}
        alt="POS Terminal"
        w="100%"
        h="100%"
        position="absolute"
        fit="cover"
        rounded="10px"
      />
      <Flex
        direction="column"
        justify="space-between"
        h="full"
        position="relative"
        p={{ base: 8, md: 12 }}
      >
        <HStack mb={4}>
          <Flex
            bg="green.400"
            p={2}
            borderRadius="md"
            alignItems="center"
            gap={2}
          >
            <Box bg="white" borderRadius="md">
              <Image src={logoImage} alt="Logo" p={2} objectFit="cover" />
            </Box>

            <Text fontWeight="bold" textStyle="2xl">
              POS-Padi
            </Text>
          </Flex>
        </HStack>
        <Box
          px={6}
          py={12}
          borderRadius="md"
          bg="rgba(255, 255, 255, 0.2)"
          backdropFilter="blur(10px)"
          color="white"
        >
          <Heading size="xl" mb={4}>
            Run Your POS Business Smarter with POS-Padi
          </Heading>
          <Text fontSize="md">
            Get full control over your operations — from managing agents and
            tracking transactions to monitoring performance in real time.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default FormImage;
