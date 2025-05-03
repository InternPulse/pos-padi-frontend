import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
  Image,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { FaStore } from "react-icons/fa";
import transactionIcon from "../../assets/realtimetransactions.png";
import notificationIcon from "../../assets/instantNotifications.png";
import loyaltyIcon from "../../assets/loyaltypoint.png";
import terminalIcon from "../../assets/terminalManagement.png";
import airtimeIcon from "../../assets/rechargeEffortlessly.png";

const FeatureCard = ({ title, description, icon, isLarge }) => (
  <Box
    bg={{ base: "#ebeced", _dark: "gray.800" }}
    borderRadius="xl"
    boxShadow="sm"
    transition="all 0.3s"
    h={{ base: "auto", md: isLarge ? "300px" : "250px" }}
    _hover={{
      transform: "translateY(-5px)",
      boxShadow: "lg",
      borderColor: { base: "green.200", _dark: "green.700" },
      border: "1px solid",
    }}
    overflow="hidden"
    borderWidth="1px"
    borderColor={{ base: "transparent", _dark: "gray.700" }}
    w="100%"
  >
    <VStack align="stretch" h="100%" spacing={0}>
      {/* Image Section */}
      <Box
        p={6}
        bg={{ base: "#ebeced", _dark: "gray.800" }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        h="55%"
      >
        <Image src={icon} alt={title} maxH="100%" objectFit="contain" />
      </Box>

      {/* Text Section */}
      <Box
        bg={{ base: "white", _dark: "gray.700" }}
        p={6}
        h="45%"
        borderBottomRadius="xl"
      >
        <VStack align="flex-start" spacing={2}>
          <Heading
            size="md"
            color={{ base: "black", _dark: "gray.100" }}
            fontWeight="bold"
          >
            {title}
          </Heading>
          <Text color={{ base: "gray.500", _dark: "gray.400" }} fontSize="sm">
            {description}
          </Text>
        </VStack>
      </Box>
    </VStack>
  </Box>
);

function Features() {
  const features = [
    {
      title: "Realtime Transaction Update",
      description: "Get all withdrawal and Bills payment history on the go",
      icon: transactionIcon,
      isLarge: true,
    },
    {
      title: "Instant Notification",
      description:
        "All Issues are been notified to the agent and the business owner",
      icon: notificationIcon,
      isLarge: true,
    },
    {
      title: "Loyalty Point",
      description: "Customers get rewarded for transactions",
      icon: loyaltyIcon,
      isLarge: false,
    },
    {
      title: "Recharge Effortlessly",
      description:
        "Recharge your phone or buy data bundles for yourself and loved ones.",
      icon: airtimeIcon,
      isLarge: false,
    },
    {
      title: "Terminal Management",
      description: "Control how terminals are used across agents",
      icon: terminalIcon,
      isLarge: false,
    },
  ];

  return (
    <Box bg={{ base: "gray.50", _dark: "gray.900" }} width="full">
      <Container maxW="7xl">
        <VStack spacing={{ base: 10, md: 20 }} py={{ base: 10, md: 20 }}>
          <Box textAlign="center" w="100%">
            <Flex justify="center" align="center" mb={4}>
              <Flex
                p={2}
                borderRadius="lg"
                bg={{ base: "green.50", _dark: "green.900" }}
                border="1px solid"
                borderColor={{ base: "green.200", _dark: "green.700" }}
                align="center"
                gap={2}
              >
                <Icon
                  as={FaStore}
                  color={{ base: "green.500", _dark: "green.300" }}
                  boxSize={5}
                />
                <Text
                  color={{ base: "green.400", _dark: "green.300" }}
                  fontWeight="semibold"
                >
                  Features
                </Text>
              </Flex>
            </Flex>
            <Heading
              as="h1"
              size="2xl"
              mb={4}
              color={{ base: "gray.800", _dark: "gray.100" }}
            >
              All You Need For Your Agency Banking Business
            </Heading>
            <Text
              color={{ base: "gray.400", _dark: "gray.500" }}
              maxW="2xl"
              mx="auto"
            >
              Our POS platform is packed with powerful tools to help you serve
              customers faster, manage your earnings, and grow with ease—no tech
              skills needed.
            </Text>
          </Box>

          {/* Responsive layout container */}
          <Box w="100%">
            {/* Display on large screens - Grid layout */}
            <Box display={{ base: "none", lg: "block" }} w="100%">
              <Grid templateRows="auto auto" gap={8} w="100%">
                {/* Top row - 2 large cards */}
                <Grid templateColumns="repeat(2, 1fr)" gap={8} w="100%">
                  {features.slice(0, 2).map((feature, index) => (
                    <GridItem key={index}>
                      <FeatureCard {...feature} />
                    </GridItem>
                  ))}
                </Grid>

                {/* Bottom row - 3 smaller cards */}
                <Grid templateColumns="repeat(3, 1fr)" gap={8} w="100%">
                  {features.slice(2).map((feature, index) => (
                    <GridItem key={index + 2}>
                      <FeatureCard {...feature} />
                    </GridItem>
                  ))}
                </Grid>
              </Grid>
            </Box>

            {/* Display on mobile and tablet - Column layout */}
            <Box display={{ base: "block", lg: "none" }} w="100%">
              <VStack spacing={6} w="100%">
                {features.map((feature, index) => (
                  <Box
                    key={index}
                    w={{ base: "100%", sm: "90%", md: "85%" }}
                    maxW="600px"
                    mx="auto"
                  >
                    <FeatureCard {...feature} />
                  </Box>
                ))}
              </VStack>
            </Box>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}

export default Features;
