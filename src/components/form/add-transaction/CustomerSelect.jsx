import React from 'react';
import { Box, Text, Input } from '@chakra-ui/react';

const CustomerSelect = ({ value, onChange, customers }) => {
  return (
    <Box>
      <Text fontFamily="Poppins" fontWeight={400} fontSize="16px" mb={1}>
        Select Customer
      </Text>
      <Input
        list="customerList"
        name="customerName"
        value={value}
        onChange={onChange}
        placeholder="Type or select customer"
        width="100%"
        height="48px"
        borderRadius="10px"
        border="1px solid"
        borderColor="gray.200"
        fontFamily="Poppins"
      />
      <datalist id="customerList">
        {customers.map((customer, index) => (
          <option key={index} value={customer} />
        ))}
      </datalist>
    </Box>
  );
};

export default CustomerSelect;
