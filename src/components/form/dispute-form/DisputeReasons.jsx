"use client"

import { Portal, Select, createListCollection } from "@chakra-ui/react"

const DisputeReasons = () => {
  return (
    <Select.Root collection={frameworks} size="sm" width="400px">
      <Select.HiddenSelect />

      <Select.Label
        fontSize="16px"
        fontWeight="400"
        fontFamily="Poppins"
        color="#1A1A1A"
        mb="5px"
      >
        Reason
      </Select.Label>

      <Select.Control
        height="48px"
        border="none"
        fontFamily="Poppins"
        fontSize="14px"
        fontWeight="400"
        color="#1A1A1A"
      >
        <Select.Trigger
          border="1px solid #C4C4C4"
          borderRadius="10px"
          height="48px"
          width="100%"
          paddingX="10px"
          backgroundColor="#FFFFFF"
          fontFamily="Poppins"
          fontSize="12px"
          fontWeight="400"
          color="#1A1A1A"
          display="flex"
          alignItems="center"
        >
          <Select.ValueText
            placeholder="Select reason"
            color="#C4C4C4"
            fontSize="12px"
            fontWeight="400"
            textTransform="capitalize"
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
            {frameworks.items.map((framework) => (
              <Select.Item
                key={framework.value}
                item={framework}
                padding="10px"
                fontSize="12px"
                fontWeight="400"
                fontFamily="Poppins"
                color="#1A1A1A"
                _hover={{ bg: "#f0f0f0" }}
              >
                {framework.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  )
}

const frameworks = createListCollection({
  items: [
    { label: "Declined but customer was debited", value: "declined_customer_debited" },
    { label: "Incorrect Amount", value: "incorrect_amount" },
    { label: "Fraudulent Transaction", value: "fraudulent" },
    { label: "Duplicate Transaction", value: "duplicate" }
  ]
})

export default DisputeReasons
