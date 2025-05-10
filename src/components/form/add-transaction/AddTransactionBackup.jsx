"use client";
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
import { FaMoneyBillWave } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import TransactionType from "./TransactionType";
import SuccessDialog from "../success-dialog/SuccessDialog";
import CustomerSelect from "./CustomerSelect"; 

const AddTransactionBackup = () => {
  const [formData, setFormData] = useState({
    amount: "",
    transactionType: "",
    date: "",
    customerName: "", 
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const customers = ["Customer 1", "Customer 2", "Customer 3"]; //sample customer data

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTransactionTypeChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      transactionType: value,
    }));
  };

  const handleCustomerChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      customerName: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.transactionType ||
      !formData.amount ||
      !formData.customerName ||
      !formData.date
    ) {
      alert("Please fill in all fields");
      return;
    }

    setShowSuccess(true);
    setFormData({
      amount: "",
      transactionType: "",
      customerName: "",
      date: "",
    });
    console.log("Transaction submitted:", formData);
  };

  const closeSuccess = () => {
    setShowSuccess(false);
  };

  return (
    <Center position="relative">
      <Box
        as="form"
        onSubmit={handleSubmit}
        width={{ base: "100%", sm: "100%" }}
        height="auto"
        px={{ base: 2, md: 2 }}
        py={{ base: 8, md: 8 }}
      >
        <Text
          fontFamily="Poppins"
          fontWeight={600}
          fontSize="24px"
          color={{ base: 'black', _dark: 'white' }}
          mb={4}
        >
          Add New Transaction
        </Text>

        <Text fontFamily="Poppins" fontSize="16px" color="#626C7A" mb={6}>
          Input Transaction Details
        </Text>

        <VStack gap={6} align="stretch">
          {/* Amount */}
          <Box position="relative">
            <Text
              fontFamily="Poppins"
              fontWeight={400}
              fontSize="16px"
              color={{ base: 'gray.600', _dark: 'gray.300' }}
              mb={1}
            >
              Amount
            </Text>
            <Flex align="center" position="relative">
              <Box position="absolute" left="3" color={{ base: 'gray.600', _dark: 'gray.300' }}>
                <FaMoneyBillWave />
              </Box>
              <Input
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                placeholder="Enter Amount"
                width="100%"
                height="48px"
                borderRadius="10px"
                border="1px solid"
                borderColor="gray.200"
                pl={10}
                fontFamily="Poppins"
                _placeholder={{
                  color: { base: 'gray.600', _dark: 'gray.300' },
                  fontFamily: "Poppins",
                }}
              />
            </Flex>
          </Box>

          {/* Customer Select */}
          <CustomerSelect
            value={formData.customerName}
            onChange={handleCustomerChange}
            customers={customers}
          />

          {/* Transaction Type Dropdown */}
          <TransactionType
            value={formData.transactionType}
            onChange={handleTransactionTypeChange}
          />

          {/* Date Field */}
          <Box position="relative">
            <Text
              fontFamily="Poppins"
              fontWeight={400}
              fontSize="16px"
              color="#1A1A1A"
              mb={1}
            >
              Date
            </Text>
            <Flex align="center" position="relative">
              <Box position="absolute" left="3" color="#626C7A">
                <FaCalendarAlt />
              </Box>
              <Input
                name="date"
                value={formData.date}
                onChange={handleChange}
                placeholder="Select Date"
                width="100%"
                height="48px"
                borderRadius="10px"
                border="1px solid"
                borderColor="gray.200"
                pl={10}
                fontFamily="Poppins"
                _placeholder={{
                  color: "gray.400",
                  fontFamily: "Poppins",
                }}
                type="date"
              />
            </Flex>
          </Box>

          {/* Continue Button */}
          <Button
            type="submit"
            bg="green.600"
            color="white"
            width="100%"
            height="48px"
            borderRadius="10px"
            fontFamily="Poppins"
            fontWeight={600}
            fontSize="16px"
            mt={4}
          >
            Continue
          </Button>
        </VStack>
      </Box>

      {/* Success Dialog */}
      {showSuccess && (
        <SuccessDialog onClose={closeSuccess} variant="transaction" />
      )}
    </Center>
  );
};

export default AddTransactionBackup;
