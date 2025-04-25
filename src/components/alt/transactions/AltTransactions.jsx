import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import AltTransactionTable from "./AltTransactionTable";
import { transactions } from "@/components/transactions/transactionsMockData";
// import { BiDirections } from "react-icons/bi";
import Card from "../dashboard-components/Card";
import { LuWallet } from "react-icons/lu";
import TransactionPageFilterButton from "@/components/TransactionPageFilterButton";
import { useState } from "react";


export function formatCurrency(num) {
  const formattedCurrency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN",
  }).format(num);

  return formattedCurrency;
}

export const transactionSummary = [
  {
    title: "Total Transaction",
    amount: formatCurrency(536000),
    icon: <LuWallet />,
    iconColor: { base: "blue.600", _dark: "blue.300" },
    iconBgColor: { base: "blue.50", _dark: "blue.800" },
    percent: -30,
    period: "month",
  },
  {
    title: "Successful",
    amount: formatCurrency(132394.05),
    icon: <LuWallet />,
    iconColor: { base: "green.600", _dark: "green.300" },
    iconBgColor: { base: "green.50", _dark: "green.800" },
    percent: 30,
    period: "month",
  },
  {
    title: "Failed",
    amount: formatCurrency(357304.26),
    icon: <LuWallet />,
    iconColor: { base: "red.600", _dark: "red.300" },
    iconBgColor: { base: "red.50", _dark: "red.800" },
    percent: 10,
    period: "month",
  },
];

function AltTransactions() {
  const [filters, setFilters] = useState({
    search: '',
    status: '',
    agent: ''
  });

  // Get unique values for dropdowns
  const statusOptions = [...new Set(transactions.map(item => item.status))];
  const agentOptions = [...new Set(transactions.map(item => item.agent))];

  const filterTransactions = (data) => {
    return data.filter(item => {
      const matchesSearch = item.reference.toLowerCase().includes(filters.search.toLowerCase());
      const matchesStatus = !filters.status || item.status === filters.status;
      const matchesAgent = !filters.agent || item.agent === filters.agent;
      
      return matchesSearch && matchesStatus && matchesAgent;
    });
  };

  const filteredTransactions = filterTransactions(transactions);

  // Handle input changes
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setFilters(prev => ({...prev, search: value}));
  };

  const handleStatusChange = (e) => {
    const value = e.target.value;
    setFilters(prev => ({...prev, status: value}));
  };

  const handleAgentChange = (e) => {
    const value = e.target.value;
    setFilters(prev => ({...prev, agent: value}));
  };


  return (
    <Flex
      direction={"column"}
      gap={5}
      py={5}
      align={"center"}
    >
      <Flex
        wrap={"wrap"}
        gap={5}
        p={5}
        justify={{ base: "center", lg: "start" }}
      >
        {transactionSummary.map((item) => (
          <Card {...item} />
        ))}
      </Flex>

      <Flex
        gap={5}
        px={{ base: 2, md: 5 }}
        py={5}
        bg={{ base: "white", _dark: "inherit" }}
        direction={"column"}
        width={{ base: "95%", md: "auto" }}
        rounded={"2xl"}
      >
        <Text
          color={{ base: "#626C7A", _dark: "gray.200" }}
          fontWeight={"semibold"}
        >
          Transactions List
        </Text>
        <Flex h={"40px"} >
          {/* Placeholder for filter input elements */}
          <TransactionPageFilterButton 
            statusOptions={statusOptions}
            agentOptions={agentOptions}
            searchValue={filters.search}
            statusValue={filters.search?'' : filters.status}
            agentValue={filters.search ? '' : filters.agent}
            onSearchChange={handleSearchChange}
            onStatusChange={handleStatusChange}
            onAgentChange={handleAgentChange}
          />


        </Flex>
        <AltTransactionTable transactions={filteredTransactions} />
      </Flex>
    </Flex>
  );
}

export default AltTransactions;
