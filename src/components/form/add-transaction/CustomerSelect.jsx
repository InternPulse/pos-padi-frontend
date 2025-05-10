import React from "react";
import { Box, Text, Input, Field } from "@chakra-ui/react";

const CustomerSelect = ({ value, onChange, customers }) => {
  return (

      <Field.Root>
        <Field.Label>Customer ID</Field.Label>
        <Input
          list="customerList"
          name="customer_id"
          value={value}
          onChange={onChange}
          placeholder="Search customer's first/last name"
        />
        <datalist id="customerList">
          {customers.map((customer) => (
            <option
              key={customer.id}
              value={customer.id}
            >{`${customer.firstName} ${customer.lastName} - ${customer.phone}`}</option>
          ))}
        </datalist>
      </Field.Root>

  );
};

export default CustomerSelect;
