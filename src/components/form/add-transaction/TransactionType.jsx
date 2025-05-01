"use client";
import { Portal, Select, createListCollection } from "@chakra-ui/react";

const TransactionType = ({ value, onChange }) => {
  const transactionTypes = createListCollection({
    items: [
      { label: "Deposit", value: "deposit" },
      { label: "Withdrawal", value: "withdrawal" },
      { label: "Transfer", value: "transfer" },
      { label: "Payment", value: "payment" },
    ],
  });

  const handleValueChange = (details) => {
     
    onChange(details.value);
  };

  return (
    <Select.Root
      collection={transactionTypes}
      size="sm"
      width="100%"
      value={
        value
          ? transactionTypes.items.find((item) => item.value === value)
          : undefined
      }
      onValueChange={handleValueChange}
    >
      <Select.HiddenSelect name="transactionType" />
      <Select.Label
        fontSize="16px"
        fontWeight="400"
        fontFamily="Poppins"
        color="#1A1A1A"
        mb="5px"
      >
        Transaction Type
      </Select.Label>
      <Select.Control>
        <Select.Trigger
          border="1px solid #C4C4C4"
          borderRadius="10px"
          height="48px"
          width="100%"
          paddingX="10px"
          backgroundColor="#FFFFFF"
          fontFamily="Poppins"
          fontSize="14px"
          fontWeight="400"
          color="#1A1A1A"
          display="flex"
          alignItems="center"
        >
          <Select.ValueText
            placeholder="Choose transaction type"
            color="#C4C4C4"
            fontSize="14px"
            fontWeight="400"
          />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner zIndex={10}>
          <Select.Content
            borderRadius="10px"
            border="1px solid #C4C4C4"
            bg="white"
            boxShadow="sm"
          >
            {transactionTypes.items.map((type) => (
              <Select.Item
                key={type.value}
                item={type}
                padding="10px"
                fontSize="14px"
                fontWeight="400"
                fontFamily="Poppins"
                color="#1A1A1A"
                _hover={{ bg: "#f0f0f0" }}
              >
                {type.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
};

export default TransactionType;
