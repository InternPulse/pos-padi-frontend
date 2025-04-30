import { Box, Flex, Text, Link, Image } from "@chakra-ui/react";
import posterminal from "../../assets/posterminal.png";

const TerminalComponent = () => {
  return (
    <Flex direction="column" p={5}>
      <Text fontSize="xl" fontWeight="bold">Terminal Assignment</Text>
      <Text fontSize="md" color="gray.500">
        This is the terminal assigned to you.
      </Text>


      <Flex direction={{ base: "column", md: "row" }} align="center" p={5} gap={5}>

        <Flex
          direction={{ base: "column", md: "row" }}
          mt={5}
          p={5}
          borderWidth="1px"
          borderRadius="lg"
          boxShadow="sm"
          flex="1"
        >
          <Box flex="1">
            <Text fontSize="md" fontWeight="bold">Terminal ID</Text>
            <Text fontSize="lg" color="gray.700">KFNKE934O</Text>
            <Link color="green.500" mt={3}>Request Change Of Terminal</Link>
          </Box><Box flex="1" ml={{ md: 5 }} mt={{ base: 5, md: 0 }}>
            <Text fontSize="md" fontWeight="bold" mt={3}>Terminal Serial Number</Text>
            <Text fontSize="lg" color="gray.700">P2302NDFDENKLSEHFK</Text>
          </Box>
        </Flex>

        {/* Image Section */}
        <Box flex="1" display="flex" justifyContent="center">
          <Image
            src={posterminal}
            alt="Payment Terminal"
            boxSize="200px"
            objectFit="cover"
          />
  </Box>
      </Flex>
    </Flex>
  );
};

export default TerminalComponent;
