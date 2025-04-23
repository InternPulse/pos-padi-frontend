
import React from 'react';
import {
  Box,
  Heading,
  Text,
  Input,
  Select,
  Button,
  VStack,
  HStack,
  Icon,
} from '@chakra-ui/react';
import {
  FaMoneyBillWave,
  FaPhone,
  FaUser,
  FaReceipt,
  FaCalendarAlt,
  FaPhoneAlt,
} from 'react-icons/fa';
import { BiSolidReceipt } from "react-icons/bi";

const AddTransactionPage = () => {
  const FormField = ({ label, icon, children }) => (
    <Box>
      <Text mb={1} fontWeight="medium">
        {label}
      </Text>
      <HStack spacing={3} border="1px solid" borderColor="gray.300" borderRadius="md" p={2}>
        <Icon as={icon} color="gray.500" />
        {children}
      </HStack>
    </Box>
  );

  return (
    <Box maxW="md" mx="auto" mt={8} p={6} boxShadow="md" borderRadius="md">
      <VStack spacing={6} align="stretch">
        {/* Heading */}
        <Heading as="h1" size="lg" textAlign="left">
          Add New Transaction
        </Heading>
        <Text fontSize="md" color="gray.600" textAlign="left">
          Input transaction details
        </Text>

        <FormField label="Amount" icon={FaMoneyBillWave}>
          <Input placeholder="Enter Amount" type="number" border="none" />
        </FormField>

        <FormField label="Customer phone No" icon={FaPhoneAlt}>
          <Input placeholder="Enter phone number" type="tel" border="none" />
        </FormField>

        <FormField label="Customer Name" icon={FaUser}>
          <Input placeholder="Enter Name" border="none" />
        </FormField>

        <FormField label="Transaction Type" icon={BiSolidReceipt}>
          <Select placeholder="Choose Transaction Type" border="none">
            <option value="deposit">Deposit</option>
            <option value="withdrawal">Withdrawal</option>
            <option value="transfer">Transfer</option>
            <option value="payment">Payment</option>
          </Select>
        </FormField>

        <FormField label="Date" icon={FaCalendarAlt}>
          <Input type="date" placeholder="Choose Date" border="none" />
        </FormField>

        {/* Continue Button */}
        <Button
          colorScheme="#11ee78"
          size="lg"
          mt={4}
          bg="#11ee78"
          _hover={{ bg: '#11ee78' }}
          _active={{ bg: '#11ee78' }}
        >
          Continue
        </Button>
      </VStack>
    </Box>
  );
};

export default AddTransactionPage;
