import React from "react";

import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  InputGroup,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { MdLockOutline } from "react-icons/md";

import { PasswordInput } from "@/components/ui/password-input";


const CompleteSignUp = () => {

  

  return (
    <Box
      w={{ base: "100%", md: "50%" }}
      bg="white"
      py={{ base: 12, md: 24 }}
      px={{ base: 8, md: 12 }}
      display="flex"
      alignItems="center"
    >
      <Box w="full" maxW="md" mx="auto">
        <Stack spacing={8}>
          <Box>
            <HStack mb={2}>
              <Box w={1} h={6} bg="green.400" />
              <Heading size="lg">Complete Sign Up</Heading>
            </HStack>
            <Text color="gray.600">Input your password to complete Sign Up</Text>
          </Box>

          <VStack spacing={4} align="stretch">
            <Stack spacing={1}>
              <Text fontWeight="medium">Password</Text>
              <InputGroup startElement={<MdLockOutline />}>
                <PasswordInput placeholder="Enter Password" />
              </InputGroup>
              <Flex gap={1}>
                <Badge p={1}>Min 8 characters</Badge>
                <Badge p={1}>1 Number</Badge>
                <Badge p={1}>Special Character</Badge>
              </Flex>
            </Stack>

            <Stack spacing={1}>
              <Text fontWeight="medium">Confirm Password</Text>
              <InputGroup startElement={<MdLockOutline />}>
                <PasswordInput placeholder="Enter Password" />
              </InputGroup>
            </Stack>

            <Button mt={6} w="full" colorPalette="green" size="lg">
              Continue
            </Button>

            <Flex justify="center" mt={4}>
              <Text color="gray.600" mr={1}>
                Don't have an account?
              </Text>
              <Link color="green.500" fontWeight="bold">
                Sign Up
              </Link>
            </Flex>
          </VStack>
        </Stack>
      </Box>
    </Box>
  );
};

export default CompleteSignUp;
