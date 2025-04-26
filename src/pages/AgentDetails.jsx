import AgentCard from "@/components/agent-details/AgentCard";
import Card from "@/components/alt/dashboard-components/Card";
import { Flex, Button, Tabs } from "@chakra-ui/react";
import { IoIosArrowBack } from "react-icons/io";
import { GrGroup } from "react-icons/gr";
import { LuWallet } from "react-icons/lu";
import { GiSwipeCard } from "react-icons/gi";
import { useLocation, useNavigate } from "react-router-dom";
import { formatCurrency } from "@/components/alt/transactions/AltTransactions";
import { useState, useEffect } from "react";
import AltTransactionTable from "@/components/alt/transactions/AltTransactionTable";
import TransactionPageFilterButton from "@/components/TransactionPageFilterButton";
import GenericTable from "@/components/alt/transactions/generic-table/GenericTable";
import { customersList } from "@/components/transactions/customersMockData";
import { transactions } from "@/components/transactions/transactionsMockData";

function AgentDetails() {
  const currentPath = useLocation().pathname;
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState("customers");

  const previousPage = currentPath.includes("agent") ? "/agents" : "/customers";

  function returnToPreviousPage() {
    navigate(previousPage);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const agent = {
    imageURL: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04",
    firstName: "Tana",
    lastName: "Ofik",
    email: "meetdarlingono@gmail.com",
    phone: "09155334727",
    dateCreated: "April 18, 2025",
    agentId: "PADI48305",
    terminalId: "VDKJNKR12",
    isActive: true,
    performanceSummary: [
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
        title: "Transaction Count",
        amount: 7214,
        icon: <GiSwipeCard />,
        iconColor: { base: "purple.600", _dark: "purple.300" },
        iconBgColor: { base: "purple.50", _dark: "purple.800" },
        percent: 23,
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
      {
        title: "Customers",
        amount: 352,
        icon: <GrGroup />,
        iconColor: { base: "yellow.600", _dark: "yellow.300" },
        iconBgColor: { base: "yellow.50", _dark: "yellow.800" },
        percent: -5,
        period: "month",
      },
    ],
  };

  const pageCustomersTable = {
    ...customersList,
    items: customersList.items.filter(
      (item) => item.item6 == `${agent.firstName} ${agent.lastName}`
    ),
  };

  const pageTransactions = transactions.filter(item => item.agent == `${agent.firstName} ${agent.lastName}`)

  const [filters, setFilters] = useState({
    search: "",
    status: "",
    agent: "",
  });

  // Get unique values for dropdowns
  const statusOptions = [...new Set(pageTransactions.map((item) => item.status))];
  const agentOptions = [...new Set(pageTransactions.map((item) => item.agent))];

  const filterTransactions = (data) => {
    return data.filter((item) => {
      const matchesSearch = item.reference
        .toLowerCase()
        .includes(filters.search.toLowerCase());
      const matchesStatus = !filters.status || item.status === filters.status;
      const matchesAgent = !filters.agent || item.agent === filters.agent;

      return matchesSearch && matchesStatus && matchesAgent;
    });
  };

  const filteredTransactions = filterTransactions(pageTransactions);

  // Handle input changes
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setFilters((prev) => ({ ...prev, search: value }));
  };

  const handleStatusChange = (e) => {
    const value = e.target.value;
    setFilters((prev) => ({ ...prev, status: value }));
  };

  const handleAgentChange = (e) => {
    const value = e.target.value;
    setFilters((prev) => ({ ...prev, agent: value }));
  };





  return (
    <Flex width={"100%"} direction={"column"} gap={4} p={4}>
      <Button
        onClick={returnToPreviousPage}
        colorPalette="gray"
        variant="ghost"
        alignSelf={"start"}
      >
        <IoIosArrowBack />{" "}
        {previousPage.includes("agent")
          ? "Back to Agents List"
          : "Back to Customers List"}
      </Button>
      <Flex
        gap={4}
        direction={{ base: "column", "2xl": "row" }}
        align={{ base: "start" }}
      >
        <AgentCard agent={agent} />
        <Flex
          width={"100%"}
          wrap={"wrap"}
          p={{ base: 0, "2xl": 4 }}
          justify={{ base: "center", md: "start" }}
          gap={{ base: 4, xl: 3 }}
        >
          {agent.performanceSummary.map((item) => (
            <Card {...item} />
          ))}
        </Flex>
      </Flex>
      <Tabs.Root defaultValue="customers" colorPalette={"green"}>
        <Tabs.List>
          <Tabs.Trigger
            onClick={() => {
              setCurrentTab("customers");
            }}
            value="customers"
            color={currentTab == "customers" ? "green" : "inherit"}
            fontWeight={currentTab == "customers" ? "semibold" : "normal"}
          >
            Customers
          </Tabs.Trigger>
          <Tabs.Trigger
            onClick={() => {
              setCurrentTab("transactions");
            }}
            value="transactions"
            color={currentTab == "transactions" ? "green" : "inherit"}
            fontWeight={currentTab == "transactions" ? "semibold" : "normal"}
          >
            Transactions
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="customers">
          <Flex
            width={{ base: "100%", md: "95%" }}
            align={"start"}
            direction={"column"}
            px={{ base: 2, md: 5 }}
            py={5}
            bg={{ base: "white", _dark: "gray.900" }}
            gap={5}
            rounded={"2xl"}
          >
            <Flex
              width={"100%"}
              bg={"gray.200"}
              rounded="xl"
              height={"60px"}
            ></Flex>
            <GenericTable {...pageCustomersTable} />
          </Flex>
        </Tabs.Content>
        <Tabs.Content value="transactions">
          <Flex
            bg={{ base: "white", _dark: "inherit" }}
            direction={"column"}
            gap={4}
            p={{ base: 0, md: 4 }}
            rounded={'2xl'}
          >
            <Flex h={"40px"}>
              {/* Placeholder for filter input elements */}
              <TransactionPageFilterButton
                statusOptions={statusOptions}
                agentOptions={agentOptions}
                searchValue={filters.search}
                statusValue={filters.search ? "" : filters.status}
                agentValue={filters.search ? "" : filters.agent}
                onSearchChange={handleSearchChange}
                onStatusChange={handleStatusChange}
                onAgentChange={handleAgentChange}
              />
            </Flex>
            <AltTransactionTable transactions={filteredTransactions} />
          </Flex>
        </Tabs.Content>
      </Tabs.Root>
    </Flex>
  );
}

export default AgentDetails;
