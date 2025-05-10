"use client";
import React, { useState } from "react";
import {
  Box,
  Text,
  Input,
  InputGroup,
  Button,
  Field,
  VStack,
  Flex,
  Center,
} from "@chakra-ui/react";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import TransactionType from "./TransactionType";
import SuccessDialog from "../success-dialog/SuccessDialog";
import CustomerSelect from "./CustomerSelect";
import TransactionStatus from "./TransactionStatus";
import { createTransaction } from "@/backend-functions/transactions-api";
import { useOutletContext } from "react-router-dom";

const AddTransactionBackup = ({ customers }) => {
  const { setNewTransaction } = useOutletContext()

  const [formData, setFormData] = useState({
    amount: "",
    type: "",
    fee: "",
    customer_id: "",
    status: "",
  });

  const [ formStatus, setFormStatus ] = useState('')

  const [showSuccess, setShowSuccess] = useState(false);

  //const customers = ["Customer 1", "Customer 2", "Customer 3"]; //sample customer data

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: Number(value),
    }));

  };

  const handleTransactionTypeChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      type: value,
    }));
  };

  const handleTransactionStatusChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      status: value,
    }));
  };

  const handleCustomerChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      customer_id: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.type ||
      !formData.amount ||
      !formData.customer_id ||
      !formData.status ||
      !formData.fee
    ) {
      alert("Please fill in all fields");
      return;
    }

    setFormStatus('Submitting...')

    try{
      const newTx = await createTransaction(formData)

      if(newTx){
        setFormData({
          amount: "",
          type: "",
          customer_id: "",
          fee: "",
          status: "",
        });
        setShowSuccess(true);

      }
    }catch(error){
      setFormStatus(`Failed: ${error.message}`)
    }

    console.log("Transaction submitted:", formData);
  };

  const closeSuccess = () => {
    setShowSuccess(false);
    setNewTransaction(prev => !prev)
  };

  return (
    <Center   position="relative">
      <Box
        as="form"
        onSubmit={handleSubmit}
        width={{ base: "100%", sm: "100%" }}
        height="auto"
        px={{ base: 2, md: 2 }}
        py={{ base: 8, md: 8 }}
        //border={'3px solid red'}
        
      >
        <Text
          fontFamily="Poppins"
          fontWeight={600}
          fontSize="24px"
          color={{ base: "black", _dark: "white" }}
          mb={4}
        >
          Add New Transaction
        </Text>

        <Text fontFamily="Poppins" fontSize="16px" color={{base: "#626C7A", _dark: 'gray.300'}} mb={6}>
          Input Transaction Details
        </Text>

        <VStack gap={6} align="stretch">
          {/* Amount */}
          {/* <Box position="relative">
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
          </Box> */}
          <Field.Root>
            <Field.Label>Amount</Field.Label>
            <InputGroup startElement={<FaMoneyBillWave />}>
              <Input name='amount' value={formData.amount} onChange={handleChange} placeholder="Enter Amount" />
            </InputGroup>
          </Field.Root>
          <Field.Root>
            <Field.Label>Charges</Field.Label>
            <InputGroup startElement={<FaMoneyBillWave />}>
              <Input name='fee' value={formData.fee} onChange={handleChange} placeholder="Enter Fee" />
            </InputGroup>
          </Field.Root>

          {/* Customer Select */}
          <CustomerSelect
            value={formData.customer_id}
            onChange={handleCustomerChange}
            customers={customers}
          />

          {/* Transaction Type Dropdown */}
          <TransactionType
            value={formData.type}
            onChange={handleTransactionTypeChange}
          />

          {/* Transaction Status Dropdown */}
          <TransactionStatus
            value={formData.status}
            onChange={handleTransactionStatusChange}
          />

          {/* Date Field */}
          {/* <Box position="relative">
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
          </Box> */}

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
          {formStatus && <Text textAlign={'center'} color={'green'} fontWeight={'medium'} textStyle={'sm'}>{formStatus}</Text>}
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
