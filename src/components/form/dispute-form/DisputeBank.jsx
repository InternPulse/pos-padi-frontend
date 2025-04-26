"use client"

import { Portal, Select, createListCollection } from "@chakra-ui/react"

const DisputeBank = () => {
  // Sort the banks in alphabetical order by label
  const sortedFrameworks = frameworks.items.sort((a, b) =>
    a.label.localeCompare(b.label)
  )

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
        Bank
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
            placeholder="Pick Customer's Bank"
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
            {sortedFrameworks.map((framework) => (
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
    { label: "Fidelity Bank", value: "fidelity" },
    { label: "Access Bank", value: "access" },
    { label: "Zenith Bank", value: "zenith" },
    { label: "Guaranty Trust Bank", value: "guaranty" },
    { label: "Ecobank Nigeria", value: "ecobank" },
    { label: "Stanbic IBTC", value: "stanbic" },
    { label: "First Bank of Nigeria", value: "first_bank" },
    { label: "Wema Bank", value: "wema" },
    { label: "Sterling Bank", value: "sterling" },
    { label: "United Bank for Africa", value: "uba" },
    { label: "Union Bank of Nigeria", value: "union" },
    { label: "Heritage Bank", value: "heritage" },
    { label: "First City Monument Bank", value: "fcmb" },
    { label: "Jaiz Bank", value: "jaiz" },
    { label: "Polaris Bank", value: "polaris" },
    { label: "Keystone Bank", value: "keystone" },
    { label: "FBNQuest Merchant Bank", value: "fbnquest" },
    { label: "SunTrust Bank Nigeria", value: "suntrust" },
    { label: "Citibank Nigeria", value: "citibank" },
  ]
})

export default DisputeBank
