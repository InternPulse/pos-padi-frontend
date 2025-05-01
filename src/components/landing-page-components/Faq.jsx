import React from 'react';
import { 
  Accordion, 
  Box, 
  Flex, 
  Text, 
  Heading, 
  Grid, 
  GridItem, 
  Circle,
  Span
} from "@chakra-ui/react";
import {Star} from 'lucide-react'

const Faq = () => {
  const items = [
    {
      value: "agent",
      title: "How do I become a Pospadi agent?",
      text: "Simply fill out the signup form on our website or contact our support team to get started."
    },
    {
      value: "pos-issue",
      title: "What if my POS has an issue?",
      text: "Please contact our technical support team immediately for assistance with any POS issues."
    },
    {
      value: "commissions",
      title: "Are there commissions?",
      text: "Yes, there are commissions for transactions. The exact rates will be provided when you sign up as an agent."
    },
    {
      value: "services",
      title: "What services can I offer with the Pospadi POS?",
      text: "Our POS system supports various services including cash withdrawals, bill payments, funds transfer, and more."
    },
    {
      value: "settlements",
      title: "How fast are settlements?",
      text: "Settlements are typically processed within 24 hours of transaction completion."
    },
    {
      value: "limit",
      title: "Is there a daily transaction limit?",
      text: "Yes, there are daily transaction limits which will be specified in your agent agreement."
    },
    {
      value: "requirements",
      title: "Do I need a business name or shop to start?",
      text: "No, you don't necessarily need a registered business name or physical shop to start as a Pospadi agent."
    },
  ];

  return (
    <Box maxWidth="100%" mx="auto" py={8} px={4} >
      <Flex justifyContent="center" mb={6}  >
        <Box p={2} bg="green.50" borderRadius={20}>
          <Flex alignItems="center" gap={2}>
            <Star color="green" size={20} />
            <Text color="green.500" fontWeight="medium">FAQs</Text>
          </Flex>
        </Box>
      </Flex>
      
      <Heading as="h1" textAlign="center" fontSize="3xl" mb={3}>
        Frequently Asked Questions
      </Heading>
      
      <Text p={3} fontSize={'lg'} textAlign="center" _light={{
        color: "gray.600",
      }} _dark={{
        color: "gray.300",
      }} mb={10}>
        These are some of the questions that users frequently ask and we have answered them here
      </Text>
      
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>
        <GridItem>
          <Accordion.Root collapsible>
            {items.slice(0, 3).map((item) => (
              <Box 
                key={item.value}
                mb={6}
                borderRadius="lg"
               
              >
                <Accordion.Item value={item.value}>
                  <Accordion.ItemTrigger p={4}>
                    <Flex justify="space-between" align="center" width="100%">
                      <Span flex="1" fontWeight="semibold" textAlign="left" mr={4}>
                        {item.title}
                      </Span>
                      <Accordion.ItemIndicator />
                    </Flex>
                  </Accordion.ItemTrigger>
                  <Accordion.ItemContent>
                    <Box p={4} border="1px" borderColor="gray.200">
                      <Text _light={{
        color: "gray.600",
      }} _dark={{
        color: "gray.300",
      }}>{item.text}</Text>
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
                mb={6}
                borderColor="gray.200"
                borderRadius="20px"
               
              >
                <Accordion.Item value={item.value}>
                  <Accordion.ItemTrigger p={4}>
                    <Flex justify="space-between" align="center" width="100%">
                      <Span flex="1" fontWeight="semibold" textAlign="left" mr={4}>
                        {item.title}
                      </Span>
                      <Accordion.ItemIndicator />
                    </Flex>
                  </Accordion.ItemTrigger>
                  <Accordion.ItemContent>
                    <Box p={4}  borderColor="gray.200">
                      <Text _light={{
                        color: "gray.600",
                    }} _dark={{
                        color: "gray.300",
                    }}>{item.text}</Text>
                    </Box>
                  </Accordion.ItemContent>
                </Accordion.Item>
              </Box>
            ))}
          </Accordion.Root>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Faq;