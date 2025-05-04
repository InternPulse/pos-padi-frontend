"use client";
import { NativeSelect } from "@chakra-ui/react";

const TransactionType = ({ value, onChange }) => {
  const transactionTypes = [
    { label: "Deposit", value: "deposit" },
    { label: "Withdrawal", value: "withdrawal" },
    { label: "Transfer", value: "transfer" },
    { label: "Payment", value: "payment" },
  ];

  return (
    <div>
      <label
        htmlFor="transactionType"
        style={{
          fontSize: "16px",
          fontWeight: 400,
          fontFamily: "Poppins",
          color: {base:"#1A1A1A", dark:"#F5F5F5"},
          marginBottom: "5px",
          display: "block",
        }}
      >
        Transaction Type
      </label>
      <NativeSelect.Root>
        <NativeSelect.Field
          id="transactionType"
          name="transactionType"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={{
            border: "1px solid #C4C4C4",
            borderRadius: "10px",
            height: "48px",
            width: "100%",
            padding: "0 10px",
            backgroundColor: "#FFFFFF",
            fontFamily: "Poppins",
            fontSize: "14px",
            fontWeight: 400,
            color: {base:"#1A1A1A", dark:"#F5F5F5"}
          }}
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
    </div>
  );
};

export default TransactionType;
