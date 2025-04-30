import {
  Box,
  Text,
  Flex,
  Heading,
  Grid,
  GridItem,
  Image,
} from "@chakra-ui/react";
import React from "react";

import loyaltyImage from "@/assets/images/loyalty.svg";
import notification from "@/assets/images/notification.svg";
import recharge from "@/assets/images/recharge.svg";
import terminals from "@/assets/images/terminals.svg";
import transactionUpdate from "@/assets/images/transaction-update.svg";

const Features = () => {
  return (
    <Box bg="gray.50" w="full">
      <Box py={{ base: 10, md: 20 }} px={{ base: 4, md: 10 }}>
        {/* Feature Badge */}
        <Flex
          as="span"
          align="center"
          justify="center"
          borderRadius="full"
          border="1px solid"
          borderColor="green.200"
          bg="green.100"
          px={3}
          py={1}
          fontSize="sm"
          color="green.500"
          mb={4}
          gap={2}
          w={{ base: "fit-content", md: "fit-content" }}
          mx="auto"
        >
          {/* Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="18"
            viewBox="0 0 17 18"
            fill="none"
          >
            <path
              d="M2.5 8.5625L2.5415 11.5555C2.583 14.5486 3.79952 15.7318 6.79257 15.6903L10.3856 15.6405C13.3786 15.599 14.5619 14.3825 14.5203 11.3894L14.4788 8.3964"
              stroke="#02B14F"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.49994 8.99752C9.71983 8.98061 10.606 7.97489 10.4691 6.75667L9.96736 2.30987L6.85433 2.35303L6.46945 6.81213C6.36638 8.03368 7.28006 9.01444 8.49994 8.99752Z"
              stroke="#02B14F"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.7062 8.94146C14.0527 8.92279 15.0241 7.81588 14.8722 6.47786L14.6602 4.64729C14.3962 2.91745 13.7203 2.26009 11.9738 2.28431L9.94067 2.3125L10.4721 6.97891C10.6007 8.07724 11.6063 8.95671 12.7062 8.94146Z"
              stroke="#02B14F"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Text */}
          <Text>Features</Text>
        </Flex>

        {/* Heading */}
        <Heading
          as="h2"
          fontSize={{ base: "3xl", md: "4xl" }}
          fontWeight="semibold"
          color="#290619"
          textAlign="center"
        >
          All You Need For Your Agency Banking Business
        </Heading>

        {/* Subtext */}
        <Text
          mt={4}
          fontWeight="normal"
          color="#667085"
          fontSize={{ base: "md", md: "xl" }}
          maxW="3xl"
          mx="auto"
          textAlign="center"
        >
          Our POS platform is packed with powerful tools to help you serve
          customers faster, manage your earnings, and grow with ease—no tech
          skills needed.
        </Text>

        {/* Responsive Grid */}
        <Grid
          mt={10}
          gap={10}
          templateColumns={{
            base: "repeat(1, 1fr)", // 1 column on small screens
            md: "repeat(2, 1fr)", // 2 columns on medium screens
            lg: "repeat(3, 1fr)", // 3 columns on large screens
          }}
          templateRows={{
            lg: "repeat(2, auto)", // 2 rows on large screens
          }}
          templateAreas={{
            lg: `
              "item1 item2 ."
              "item3 item4 item5"
            `,
          }}
        >
          {/* Grid Item 1 */}
          <GridItem area={{ lg: "item1" }}>
            <Box textAlign="left">
              <Image
                src={transactionUpdate}
                alt="Transaction Update"
                mx="auto"
                mb={4}
                borderRadius="md"
              />
              <Heading as="h3" fontSize="lg" fontWeight="semibold" mb={2}>
                Realtime Transaction Update
              </Heading>
              <Text fontSize="sm" color="gray.600">
                Get all withdrawal and bills payment history on the go
              </Text>
            </Box>
          </GridItem>

          {/* Grid Item 2 */}
          <GridItem area={{ lg: "item2" }}>
            <Box textAlign="left">
              <Image
                src={notification}
                alt="Instant Notification"
                mx="auto"
                mb={4}
                borderRadius="md"
              />
              <Heading as="h3" fontSize="lg" fontWeight="semibold" mb={2}>
                Instant Notification
              </Heading>
              <Text fontSize="sm" color="gray.600">
                All issues are notified to the agent and the business owner
              </Text>
            </Box>
          </GridItem>

          {/* Grid Item 3 */}
          <GridItem area={{ lg: "item3" }}>
            <Box textAlign="left">
              <Image
                src={loyaltyImage}
                alt="Loyalty Points"
                mx="auto"
                mb={4}
                borderRadius="md"
              />
              <Heading as="h3" fontSize="lg" fontWeight="semibold" mb={2}>
                Loyalty Points
              </Heading>
              <Text fontSize="sm" color="gray.600">
                Customers get rewarded for transactions
              </Text>
            </Box>
          </GridItem>

          {/* Grid Item 4 */}
          <GridItem area={{ lg: "item4" }}>
            <Box textAlign="left">
              <Image
                src={recharge}
                alt="Recharge Effortlessly"
                mx="auto"
                mb={4}
                borderRadius="md"
              />
              <Heading as="h3" fontSize="lg" fontWeight="semibold" mb={2}>
                Recharge Effortlessly
              </Heading>
              <Text fontSize="sm" color="gray.600">
                Recharge your phone or buy data bundles for yourself and loved
                ones
              </Text>
            </Box>
          </GridItem>

          {/* Grid Item 5 */}
          <GridItem area={{ lg: "item5" }}>
            <Box textAlign="left">
              <Image
                src={terminals}
                alt="Terminal Management"
                mx="auto"
                mb={4}
                borderRadius="md"
              />
              <Heading as="h3" fontSize="lg" fontWeight="semibold" mb={2}>
                Terminal Management
              </Heading>
              <Text fontSize="sm" color="gray.600">
                Control how terminals are used across agents
              </Text>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default Features;
