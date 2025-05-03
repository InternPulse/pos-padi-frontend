import React from "react";
import {
  Accordion,
  Box,
  Flex,
  Text,
  Heading,
  Grid,
  GridItem,
  Circle,
  Span,
  Container,
  VStack,
} from "@chakra-ui/react";
import { IoMdStarOutline } from "react-icons/io";

const Faq = () => {
  const items = [
    {
      value: "agent",
      title: "How do I become a Pospadi agent?",
      text: "Simply fill out the signup form on our website or contact our support team to get started.",
    },
    {
      value: "pos-issue",
      title: "What if my POS has an issue?",
      text: "Please contact our technical support team immediately for assistance with any POS issues.",
    },
    {
      value: "commissions",
      title: "Are there commissions?",
      text: "Yes, there are commissions for transactions. The exact rates will be provided when you sign up as an agent.",
    },
    {
      value: "services",
      title: "What services can I offer with the Pospadi POS?",
      text: "Our POS system supports various services including cash withdrawals, bill payments, funds transfer, and more.",
    },
    {
      value: "settlements",
      title: "How fast are settlements?",
      text: "Settlements are typically processed within 24 hours of transaction completion.",
    },
    {
      value: "limit",
      title: "Is there a daily transaction limit?",
      text: "Yes, there are daily transaction limits which will be specified in your agent agreement.",
    },
    {
      value: "requirements",
      title: "Do I need a business name or shop to start?",
      text: "No, you don't necessarily need a registered business name or physical shop to start as a Pospadi agent.",
    },
  ];

  return (
    <Box bg={{ base: "white", _dark: "gray.900" }} width="full">
      <Container maxW="7xl" py={{ base: 10, md: 20 }} px={{ base: 4, md: 8 }}>
        <VStack spacing={6} align="center" mb={12}>
          <Box
            p={2}
            bg={{ base: "green.50", _dark: "green.900" }}
            borderRadius={20}
            border="1px solid"
            borderColor={{ base: "green.200", _dark: "green.700" }}
          >
            <Flex alignItems="center" gap={2}>
              <IoMdStarOutline color="currentColor" size={20} />
              <Text
                color={{ base: "green.500", _dark: "green.300" }}
                fontWeight="medium"
              >
                FAQs
              </Text>
            </Flex>
          </Box>

          <Heading
            as="h1"
            fontSize="3xl"
            textAlign="center"
            color={{ base: "gray.800", _dark: "gray.100" }}
          >
            Frequently Asked Questions
          </Heading>

          <Text
            color={{ base: "gray.600", _dark: "gray.400" }}
            textAlign="center"
            maxW="2xl"
          >
            These are some of the questions that users frequently ask and we
            have answered them here
          </Text>
        </VStack>

        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={8}>
          <GridItem>
            <Accordion.Root collapsible>
              {items.slice(0, 3).map((item) => (
                <Box
                  key={item.value}
                  mb={4}
                  bg={{ base: "white", _dark: "gray.800" }}
                  borderRadius="lg"
                  boxShadow="sm"
                  _hover={{
                    transform: "translateY(-2px)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <Accordion.Item value={item.value}>
                    <Accordion.ItemTrigger p={4}>
                      <Flex justify="space-between" align="center" width="100%">
                        <Span
                          flex="1"
                          fontWeight="semibold"
                          textAlign="left"
                          mr={4}
                          color={{ base: "gray.800", _dark: "gray.100" }}
                        >
                          {item.title}
                        </Span>
                        <Accordion.ItemIndicator />
                      </Flex>
                    </Accordion.ItemTrigger>
                    <Accordion.ItemContent>
                      <Box p={4} bg={{ base: "gray.50", _dark: "gray.700" }}>
                        <Text color={{ base: "gray.600", _dark: "gray.300" }}>
                          {item.text}
                        </Text>
                      </Box>
                    </Accordion.ItemContent>
                  </Accordion.Item>
                </Box>
              ))}
            </Accordion.Root>
          </GridItem>

          <GridItem>
            <Accordion.Root collapsible>
              {items.slice(3).map((item) => (
                <Box
                  key={item.value}
                  mb={4}
                  bg={{ base: "white", _dark: "gray.800" }}
                  borderRadius="lg"
                  boxShadow="sm"
                  _hover={{
                    transform: "translateY(-2px)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <Accordion.Item value={item.value}>
                    <Accordion.ItemTrigger p={4}>
                      <Flex justify="space-between" align="center" width="100%">
                        <Span
                          flex="1"
                          fontWeight="semibold"
                          textAlign="left"
                          mr={4}
                          color={{ base: "gray.800", _dark: "gray.100" }}
                        >
                          {item.title}
                        </Span>
                        <Accordion.ItemIndicator />
                      </Flex>
                    </Accordion.ItemTrigger>
                    <Accordion.ItemContent>
                      <Box p={4} bg={{ base: "gray.50", _dark: "gray.700" }}>
                        <Text color={{ base: "gray.600", _dark: "gray.300" }}>
                          {item.text}
                        </Text>
                      </Box>
                    </Accordion.ItemContent>
                  </Accordion.Item>
                </Box>
              ))}
            </Accordion.Root>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Faq;
