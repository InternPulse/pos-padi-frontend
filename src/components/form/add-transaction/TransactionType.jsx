"use client";
import { NativeSelect, Field } from "@chakra-ui/react";

const TransactionType = ({ value, onChange }) => {
  const transactionTypes = [
    { label: "Deposit", value: "deposit" },
    { label: "Withdrawal", value: "withdrawal" },
    { label: "Transfer", value: "transfer" },
    { label: "Payment", value: "payment" },
  ];

  return (

      <Field.Root>
        <Field.Label>Transaction Type</Field.Label>
        <NativeSelect.Root>
          <NativeSelect.Field
            id="transactionType"
            name="transactionType"
            value={value}
            onChange={(e) => onChange(e.target.value)}
          >
            <option value="" disabled>
              Choose transaction type
            </option>
            {transactionTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </NativeSelect.Field>
          <NativeSelect.Indicator />
        </NativeSelect.Root>
      </Field.Root>
  );
};

export default TransactionType;
