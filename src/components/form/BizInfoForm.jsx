import React from "react";

import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Input,
  InputGroup,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { LuUser, LuMail } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";
import { MdLockOutline } from "react-icons/md";

import { PasswordInput } from "@/components/ui/password-input";
import Drop from "../ui/drop";

const BizInfoForm = () => {
  return (
    <Box
      // $ Changed the value on md to 100%, else form does not fit the parent container
      w={{ base: "100%", md: "100%" }}
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
              <Heading size="lg">Business Information</Heading>
            </HStack>
            <Text color="gray.600">Input your business details</Text>
          </Box>

          <VStack spacing={4} align="stretch">
            <Stack spacing={1}>
              <Text fontWeight="medium">Business Name</Text>
              <Input placeholder="Enter Business Name" />
            </Stack>

            <Stack spacing={1}>
              <Text fontWeight="medium">Address</Text>
              <Input placeholder="Enter Address" />
            </Stack>

            <Stack spacing={1}>
              <Drop label="State" placeholder="Select State" />
            </Stack>

            <Stack spacing={1}>
              <Drop label="LGA" placeholder="Select LGA" />
            </Stack>

            <Button mt={6} w="full" colorPalette="green" size="lg">
              Continue
            </Button>

            <Flex justify="center" mt={4}>
              <Text color="gray.600" mr={1}>
                Do you have an account?
              </Text>
              <Link color="green.500" fontWeight="bold">
                Login
              </Link>
            </Flex>
          </VStack>
        </Stack>
      </Box>
    </Box>
  );
};

export default BizInfoForm;
