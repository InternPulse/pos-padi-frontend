import React, { useState } from "react";
import { Box, Button, Input, Text, VStack } from "@chakra-ui/react";
import DisputeReasons from "./DisputeReasons";
import DisputeBank from "./DisputeBank";

const DisputesForm = ({
  defaultTransactionType = "Withdrawal",
  defaultAmount = "₦ 5000",
  defaultAccountName = "John Doe",
}) => {
  const [accountNumber, setAccountNumber] = useState("");
  const [reason, setReason] = useState("");
  const [bank, setBank] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", {
      transactionType: defaultTransactionType,
      amount: defaultAmount,
      accountName: defaultAccountName,
      accountNumber,
      reason,
      bank,
    });

  };

  return (
    <Box
      width={{ base: "100%", md: "500px" }}
      minHeight="904px"
      borderRadius="10px"
      bg="white"
      p={8}
      mx="auto"
      mt={8}
      boxShadow="md"
    >
      <VStack
        spacing={6}
        width={{ base: "100%", md: "400px" }}
        mx="auto"
        align="stretch"
      >
        <Text fontSize="24px" fontWeight="600" color="black">
          Dispute
        </Text>

        <Text fontWeight="400" fontSize="16px" color="#626C7A" mb="5px" fontFamily="Poppins">
          Input dispute details
        </Text>

        {/* Transaction Type (readonly) */}
        <Text fontSize="16px" color="#1A1A1A">
          Transaction Type
        </Text>
        <Input
          value={defaultTransactionType}
          isReadOnly
          placeholder="Transaction Type"
          height="48px"
          borderRadius="10px"
          fontFamily="Poppins"
          fontSize="12px"
          bg="gray.100"
        />

        {/* Amount (readonly) */}
        <Text fontSize="16px" color="#1A1A1A">
          Amount
        </Text>
        <Input
          value={defaultAmount}
          isReadOnly
          placeholder="Amount"
          height="48px"
          borderRadius="10px"
          fontFamily="Poppins"
          fontSize="12px"
          bg="gray.100"
        />

        {/* Reason (editable) */}
        <DisputeReasons
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />

        {/* Account Number (editable) */}
        <Text fontSize="16px" color="#1A1A1A">
          Account Number
        </Text>
        <Input
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
          placeholder="Enter account number"
          height="48px"
          borderRadius="10px"
          fontFamily="Poppins"
          fontSize="12px"
        />

        {/* Bank (editable) */}
        <DisputeBank
          value={bank}
          onChange={(e) => setBank(e.target.value)}
        />

        {/* Account Name (readonly) */}
        <Text fontSize="16px" color="#1A1A1A">
          Account Name
        </Text>
        <Input
          value={defaultAccountName}
          isReadOnly
          placeholder="Account Name"
          height="48px"
          borderRadius="10px"
          fontFamily="Poppins"
          fontSize="12px"
          bg="gray.100"
        />

        <Button
          bg="#02B14F"
          color="white"
          _hover={{ bg: "#028a3f" }}
          mt={4}
          height="48px"
          borderRadius="10px"
          fontFamily="Poppins"
          onClick={handleSubmit}
        >
          Raise Dispute
        </Button>
      </VStack>
    </Box>
  );
};

export default DisputesForm;
