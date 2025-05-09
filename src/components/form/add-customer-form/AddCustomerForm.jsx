import React, { useState } from "react";
import {
  Box,
  Text,
  Input,
  Button,
  VStack,
  Flex,
  Center,
} from "@chakra-ui/react";
import { FaRegUser } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import SuccessDialog from "../success-dialog/SuccessDialog";
import { useLocation } from "react-router-dom";
import { createAgent } from "@/backend-functions/agents-api";

const AddCustomerForm = () => {
  const currentPath = useLocation().pathname;
  const variant = currentPath.includes("customer") ? "customer" : "agent";

  const customerFormData = { firstName: "", lastName: "", phoneNumber: "" };
  const agentFormData = { ...customerFormData, email: "" };
  const defaultFormData =
    variant == "customer" ? customerFormData : agentFormData;

  const [formData, setFormData] = useState(defaultFormData);

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.phoneNumber || (!formData.email && (variant == 'agent'))) {
      alert("Please fill in all fields");
      return;
    }

    setShowSuccess(true);
    setFormData(defaultFormData);
    // console.log("Form submitted:", formData);

    createAgent({
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone: formData.phoneNumber
    })
  };

  const closeSuccess = () => {
    setShowSuccess(false);
  };

  return (
    <Center py={6} position="relative">
      {/* Form Content */}
      <Box
        as="form"
        onSubmit={handleSubmit}
        width={{ base: "100%", sm: "100%" }}
        maxW={"400px"}
      >
        <Text
          fontFamily="Poppins"
          fontWeight={600}
          fontSize="24px"
          color={{ base: "green.500", _dark: "green.300" }}
          mb={4}
          textTransform={"capitalize"}
        >
          Add New {variant}
        </Text>

        <Text
          textTransform={"capitalize"}
          fontFamily="Poppins"
          fontSize="16px"
          color={{ base: "gray.500", _dark: "gray.400" }}
          mb={6}
        >
          Input {variant} Details
        </Text>

        <VStack gap={6} align="stretch">
          {/* First Name */}
          <Box position="relative">
            <Text
              fontFamily="Poppins"
              fontWeight={400}
              fontSize="16px"
              color={{ base: "gray.900", _dark: "gray.400" }}
              mb={1}
            >
              First Name
            </Text>
            <Flex align="center" position="relative">
              <Box position="absolute" left="3" color="#626C7A">
                <FaRegUser />
              </Box>
              <Input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter First Name"
                width="100%"
                height="48px"
                borderRadius="10px"
                border="1px solid"
                borderColor={{ base: "gray.200", _dark: "gray.500" }}
                pl={10}
                fontFamily="Poppins"
                _placeholder={{
                  color: "gray.400",
                  fontFamily: "Poppins",
                }}
              />
            </Flex>
          </Box>

          {/* Last Name */}
          <Box position="relative">
            <Text
              fontFamily="Poppins"
              fontWeight={400}
              fontSize="16px"
              color={{ base: "gray.900", _dark: "gray.400" }}
              mb={1}
            >
              Last Name
            </Text>
            <Flex align="center" position="relative">
              <Box position="absolute" left="3" color="#626C7A">
                <FaRegUser />
              </Box>
              <Input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter Last Name"
                width="100%"
                height="48px"
                borderRadius="10px"
                border="1px solid"
                borderColor={{ base: "gray.200", _dark: "gray.500" }}
                pl={10}
                fontFamily="Poppins"
                _placeholder={{
                  color: "gray.400",
                  fontFamily: "Poppins",
                }}
              />
            </Flex>
          </Box>

          {/* Phone Number */}
          <Box position="relative">
            <Text
              fontFamily="Poppins"
              fontWeight={400}
              fontSize="16px"
              color={{ base: "gray.900", _dark: "gray.400" }}
              mb={1}
            >
              Phone Number
            </Text>
            <Flex align="center" position="relative">
              <Box position="absolute" left="3" color="#626C7A">
                <BsTelephone />
              </Box>
              <Input
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter Phone Number"
                width="100%"
                height="48px"
                borderRadius="10px"
                border="1px solid"
                borderColor={{ base: "gray.200", _dark: "gray.500" }}
                pl={10}
                fontFamily="Poppins"
                _placeholder={{
                  color: "gray.400",
                  fontFamily: "Poppins",
                }}
              />
            </Flex>
          </Box>

          {/* Email */}
          {(variant == "agent" || variant == "customer") && (
            <Box position="relative">
              <Text
                fontFamily="Poppins"
                fontWeight={400}
                fontSize="16px"
                color={{ base: "gray.900", _dark: "gray.400" }}
                mb={1}
              >
                Email
              </Text>
              <Flex align="center" position="relative">
                <Box position="absolute" left="3" color="#626C7A">
                  <BsTelephone />
                </Box>
                <Input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Phone Number"
                  width="100%"
                  height="48px"
                  borderRadius="10px"
                  border="1px solid"
                  borderColor={{ base: "gray.200", _dark: "gray.500" }}
                  pl={10}
                  fontFamily="Poppins"
                  _placeholder={{
                    color: "gray.400",
                    fontFamily: "Poppins",
                  }}
                />
              </Flex>
            </Box>
          )}

          <Button
            type="submit"
            bg={{ base: "green.500", _dark: "green.600" }}
            color="white"
            width="100%"
            height="48px"
            borderRadius="10px"
            fontFamily="Poppins"
            fontWeight={600}
            fontSize="16px"
            mt={4}
            textTransform={"capitalize"}
          >
            Add New {variant}
          </Button>
        </VStack>
      </Box>

      {/* Success Dialog - */}
      {showSuccess && (
        <SuccessDialog onClose={closeSuccess} variant={variant} />
      )}
    </Center>
  );
};

export default AddCustomerForm;
