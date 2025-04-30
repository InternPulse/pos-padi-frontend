// $ Chakra UI Components
import { Badge, Flex, Box, Text } from "@chakra-ui/react";
import DisputesDialog from "../transactions/Effects/DisputesDialog";

function DisputesTableMobile({ transactions }) {

  // const disputedTransactions = disputes.map(dispute => {
  //   const disputeTx = transactions.find(tx => tx.reference == dispute.reference)
  //   return {
  //     ...dispute, ...disputeTx
  //   }
  // })

  return (
    <Flex
      width="100%"
      height="auto"
      display={{ base: "block", md: "none" }}
    >
      {/* Container for the Search Functionality */}
      {transactions.map((item) => (
        <DisputesDialog data={item}>
        <Flex
          width="100%"
          height="4.315rem"
          key={item.reference}
          justify="space-between"
          borderBottom="1px solid rgba(227, 232, 239, 0.70)"
          py="0.625rem"
          
        >
          {/* // $ Left Size of Card */}
          <Flex
            direction="column"
            width={{ base: "13.75rem", sm: "100%" }}
            gap="0.625rem"
            // border="1px solid blue"
          >
            <Text
              height="1.3125rem"
              fontSize="0.875rem"
              fontWeight="500"
              textTransform={"capitalize"}
              color={{ _dark: "gray.200" }}
            >
              {item.type} - {""}
              <Box
                as="span"
                fontSize="0.8rem"
                fontWeight="500"
                color={{ _dark: "gray.200" }}
              >
                {item.customer}
              </Box>
            </Text>
            <Text color={{base: "#626C7A", _dark: 'gray.300'}} fontSize="0.625rem" justifySelf={"end"}>
              {item.dateTime}
            </Text>
          </Flex>
          {/* // $ Right Side of the card */}
          <Flex
            width="6.25rem"
            direction="column"
            // border="1px solid red"
            height="3rem"
            align="end"
            gap="0.3125rem"
          >
            <Text
              height="1.3125rem"
              fontSize="0.875rem"
              color={{ _dark: "gray.200" }}
            >
              {item.amount.toFixed(2)}
            </Text>
            <Badge
              fontSize="0.625rem"
              textAlign="center"
              width="5rem"
              p={"4px 10px 4px 10px"}
              rounded={"full"}
              color={item.disputeStatus === "resolved" ? "#0B9D09" : "#FF3939"}
              bgColor={item.disputeStatus === "resolved" ? "#0B9D0910" : "#FF393910"}
            >
              <Box as="span" mx="auto" textTransform="capitalize">
                {item.disputeStatus}
              </Box>
            </Badge>
          </Flex>
        </Flex>

        </DisputesDialog>
      ))}
    </Flex>
  );
}

export default DisputesTableMobile;
