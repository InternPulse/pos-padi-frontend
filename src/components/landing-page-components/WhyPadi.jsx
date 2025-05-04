import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Button,
  SimpleGrid,
  Icon,
  VStack,
  Image,
} from "@chakra-ui/react";
import { BsHandThumbsUp, BsArrowRightShort } from "react-icons/bs";
import Secure from "../../assets/secure.png";
import CustomerSupport from "../../assets/support.png";
import ReportingTool from "../../assets/comprehensive.png";

const WhyPadi = () => {
  const features = [
    {
      icon: Secure,
      title: "Secure Transaction",
      description:
        "Bank-level encryption and security protocols to keep your money safe. Transact and be happy",
    },
    {
      icon: CustomerSupport,
      title: "Customer Support",
      description:
        "Dedicated support team to assist you with any questions or issues",
    },
    {
      icon: ReportingTool,
      title: "Comprehensive Reporting Tool",
      description:
        "Get the insights you need with detailed reports designed to guide better business decisions",
    },
  ];

  return (
    <Box bg={{ base: "gray.50", _dark: "gray.900" }} width="full">
      <Container maxW="7xl" mx="auto">
        <VStack spacing={{ base: 10, md: 20 }} py={{ base: 10, md: 20 }}>
          <Box w="100%">
            {/* Top section with icon and heading */}
            <Flex justify="space-between" align="flex-start" mb={8}>
              <Flex
                p={2}
                borderRadius="lg"
                bg={{ base: "green.50", _dark: "green.900" }}
                border="1px solid"
                borderColor={{ base: "green.200", _dark: "green.700" }}
                align="center"
                gap={2}
                w="fit-content"
              >
                <Icon
                  as={BsHandThumbsUp}
                  color={{ base: "green.500", _dark: "green.300" }}
                  boxSize={4}
                />
                <Text
                  color={{ base: "green.500", _dark: "green.300" }}
                  fontWeight="medium"
                  fontSize="sm"
                >
                  Why Choose POS-Padi
                </Text>
              </Flex>

              {/* Right side with stats */}
              <Box textAlign="right">
                <Heading
                  size="2xl"
                  color={{ base: "green.400", _dark: "green.300" }}
                  mb={1}
                >
                  10.5k
                </Heading>
                <Text
                  color={{ base: "gray.600", _dark: "gray.400" }}
                  fontSize="sm"
                >
                  Users have been enjoying POS-Padi
                </Text>
              </Box>
            </Flex>

            {/* Main content section */}
            <Box mb={{ base: 12, md: 16 }}>
              <VStack align="start" spacing={8} w="100%">
                <Heading
                  as="h1"
                  size="2xl"
                  mb={4}
                  color={{ base: "gray.800", _dark: "gray.100" }}
                >
                  Your No 1 Web App To Boost Business Goals
                </Heading>
                <Text
                  color={{ base: "gray.500", _dark: "gray.400" }}
                  mb={4}
                  maxW="550px"
                >
                  <Text
                    as="span"
                    fontWeight="bold"
                    color={{ base: "gray.600", _dark: "gray.300" }}
                  >
                    POS-Padi
                  </Text>{" "}
                  isn't just another POS—It's your reliable. With top-notch
                  uptime, fast settlements, support, and competitive
                  commissions.
                </Text>
                <Button
                  bg={{ base: "green.400", _dark: "green.500" }}
                  color="white"
                  size="md"
                  px={6}
                  display="flex"
                  alignItems="center"
                  gap={2}
                  _hover={{
                    bg: { base: "green.500", _dark: "green.600" },
                    transform: "translateX(4px)",
                    transition: "all 0.2s",
                  }}
                >
                  Learn More
                  <BsArrowRightShort size={24} />
                </Button>
              </VStack>
            </Box>
          </Box>

          {/* Feature cards */}
          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={{ base: 16, md: 15 }}
            gap={4}
            mx="auto"
            w="full"
            justifyItems="center"
          >
            {features.map((feature, index) => (
              <Box
                key={index}
                bg={{ base: "white", _dark: "gray.800" }}
                p={6}
                borderRadius="lg"
                boxShadow="sm"
                _hover={{
                  transform: "translateY(-5px)",
                  transition: "all 0.3s ease",
                  boxShadow: "lg",
                  borderColor: { base: "green.200", _dark: "green.700" },
                  border: "1px solid",
                }}
                w={{ base: "100%", sm: "90%", md: "100%" }}
                maxW={{ base: "400px", md: "380px" }}
                h={{ base: "auto", md: "240px" }}
                py={8}
                borderWidth="1px"
                borderColor={{ base: "transparent", _dark: "gray.700" }}
              >
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  boxSize="50px"
                  mb={3}
                  objectFit="contain"
                />
                <Heading
                  size="sm"
                  mb={2}
                  color={{ base: "gray.800", _dark: "gray.100" }}
                >
                  {feature.title}
                </Heading>
                <Text
                  color={{ base: "gray.600", _dark: "gray.400" }}
                  fontSize="sm"
                >
                  {feature.description}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default WhyPadi;
