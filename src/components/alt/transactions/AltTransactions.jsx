import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import AltTransactionTable from "./AltTransactionTable";
import { transactions } from "@/components/transactions/transactionsMockData";
import { BiDirections } from "react-icons/bi";

function TransactionsCardContainer() {
  return (
    <Box
      width={{ base: "168px", md: "300px", lg: "360px" }}
      bg={"gray.200"}
      height={{ base: "68px", md: "145px" }}
      rounded={"xl"}
    ></Box>
  );
}

function AltTransactions() {
  const placeholderTransactionSummaries = ["data", "data", "data"];

  return (
    <Flex direction={"column"} gap={5} py={5} align={"center"} >
      <Flex wrap={"wrap"} gap={5} p={5} justify={{base: 'center', lg:'start'}}>
        {placeholderTransactionSummaries.map((item) => (
          <TransactionsCardContainer />
        ))}
      </Flex>

      <Flex
        gap={5}
        px={{base: 2, md: 5}}
        py={5}
        bg={{ base: "white", _dark: 'inherit' }}
        direction={"column"}
        width={{base:'95%', md:'auto'}}
        rounded={"2xl"}
      >
        <Text color={{base: "#626C7A", _dark: 'gray.200'}} fontWeight={"semibold"}>
          Transactions List
        </Text>
        <Flex h={"40px"} bg={"gray.200"}>
          {/* Placeholder for filter input elements */}
        </Flex>
        <AltTransactionTable transactions={transactions} />
      </Flex>
    </Flex>
  );
}

export default AltTransactions;
