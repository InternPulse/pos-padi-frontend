import AgentCard from "@/components/agent-details/AgentCard";
import CustomerCard from "./CustomerCard";
import Card from "@/components/alt/dashboard-components/Card";
import { Flex, Box, Button, Tabs } from "@chakra-ui/react";
import { IoIosArrowBack } from "react-icons/io";
import { GrGroup } from "react-icons/gr";
import { LuWallet } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import { GiSwipeCard } from "react-icons/gi";
import { useLocation, useNavigate } from "react-router-dom";
import { formatCurrency } from "@/components/alt/transactions/AltTransactions";
import { useState, useEffect } from "react";
import AltTransactionTable from "@/components/alt/transactions/AltTransactionTable";
import TransactionPageFilterButton from "@/components/TransactionPageFilterButton";
import GenericTable from "@/components/alt/transactions/generic-table/GenericTable";
import {
  rawCustomers,
  listCustomers,
} from "@/components/transactions/customersMockData";
import { transactions } from "@/components/transactions/transactionsMockData";
import { filterRow } from "../Others/data-filters/SearchByText";
import SearchByText from "../Others/data-filters/SearchByText";
import ExportButton from "../alt/dashboard-components/ExportButton";
import { percentageDiff } from "@/utils/percentageDifference";
import { TiVolumeMute } from "react-icons/ti";

function EntityDetails({ entity, entityType }) {
  const currentPath = useLocation().pathname;
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState("customers");
  const [searchText, setSearchText] = useState("");

  const previousPage = currentPath.includes("agent") ? "/agents" : "/customers";

  function returnToPreviousPage() {
    navigate(previousPage);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let pageTransactions;

  switch (entityType) {
    case "agent":
      pageTransactions = transactions.filter(
        (item) => item.agent == `${entity.firstName} ${entity.lastName}`
      );
      break;

    case "customer":
      pageTransactions = transactions.filter(
        (item) => item.customer == `${entity.firstName} ${entity.lastName}`
      );
      break;

    default:
      pageTransactions = [];
  }

  const pageEntity = {
    ...entity,
    performanceSummary:
      entityType == "agent"
        ? [
            {
              title: "Total Transaction",
              amount: formatCurrency(
                pageTransactions.reduce((acc, item) => {
                  return acc + item.amount;
                }, 0)
              ),
              icon: <LuWallet />,
              iconColor: { base: "blue.600", _dark: "blue.300" },
              iconBgColor: { base: "blue.50", _dark: "blue.800" },
              percent: percentageDiff(
                pageTransactions,
                "transactions",
                "sum",
                "month"
              ).percentageChange,
              period: "month",
            },
            {
              title: "Transaction Count",
              amount: pageTransactions.length,
              icon: <GiSwipeCard />,
              iconColor: { base: "purple.600", _dark: "purple.300" },
              iconBgColor: { base: "purple.50", _dark: "purple.800" },
              percent: percentageDiff(
                pageTransactions,
                "transactions",
                "length",
                "month"
              ).percentageChange,
              period: "month",
            },
            {
              title: "Successful",
              amount: formatCurrency(
                pageTransactions
                  .filter((item) => item.status == "successful")
                  .reduce((acc, item) => {
                    return acc + item.amount;
                  }, 0)
              ),
              icon: <LuWallet />,
              iconColor: { base: "green.600", _dark: "green.300" },
              iconBgColor: { base: "green.50", _dark: "green.800" },
              percent: percentageDiff(
                pageTransactions.filter((item) => item.status == "successful"),
                "transactions",
                "sum",
                "month"
              ).percentageChange,
              period: "month",
            },
            {
              title: "Failed",
              amount: formatCurrency(
                pageTransactions
                  .filter((item) => item.status == "failed")
                  .reduce((acc, item) => {
                    return acc + item.amount;
                  }, 0)
              ),
              icon: <LuWallet />,
              iconColor: { base: "red.600", _dark: "red.300" },
              iconBgColor: { base: "red.50", _dark: "red.800" },
              percent: percentageDiff(
                pageTransactions.filter((item) => item.status == "failed"),
                "transactions",
                "sum",
                "month"
              ).percentageChange,
              period: "month",
            },
            {
              title: "Customers",
              amount: rawCustomers.filter(
                (item) => item.agent == `${entity.firstName} ${entity.lastName}`
              ).length,
              icon: <GrGroup />,
              iconColor: { base: "yellow.600", _dark: "yellow.300" },
              iconBgColor: { base: "yellow.50", _dark: "yellow.800" },
              percent: percentageDiff(
                rawCustomers.filter(
                  (item) =>
                    item.agent == `${entity.firstName} ${entity.lastName}`
                ),
                "customers",
                "length",
                "month"
              )?.percentageChange,
              period: "month",
            },
          ]
        : [
            {
              title: "Total Transaction",
              amount: formatCurrency(
                pageTransactions.reduce((acc, item) => {
                  return acc + item.amount;
                }, 0)
              ),
              icon: <LuWallet />,
              iconColor: { base: "blue.600", _dark: "blue.300" },
              iconBgColor: { base: "blue.50", _dark: "blue.800" },
              percent: percentageDiff(
                pageTransactions,
                "transactions",
                "sum",
                "month"
              ).percentageChange,
              period: "month",
            },
            {
              title: "Transaction Count",
              amount: pageTransactions.length,
              icon: <GiSwipeCard />,
              iconColor: { base: "purple.600", _dark: "purple.300" },
              iconBgColor: { base: "purple.50", _dark: "purple.800" },
              percent: percentageDiff(
                pageTransactions,
                "transactions",
                "length",
                "month"
              ).percentageChange,
              period: 'month'
            },
            {
              title: "Successful",
              amount: formatCurrency(
                pageTransactions
                  .filter((item) => item.status == "successful")
                  .reduce((acc, item) => {
                    return acc + item.amount;
                  }, 0)
              ),
              icon: <LuWallet />,
              iconColor: { base: "green.600", _dark: "green.300" },
              iconBgColor: { base: "green.50", _dark: "green.800" },
              percent: percentageDiff(
                pageTransactions.filter((item) => item.status == "successful"),
                "transactions",
                "sum",
                "month"
              ).percentageChange,
              period: "month",
            },
            {
              title: "Failed",
              amount: formatCurrency(
                pageTransactions
                  .filter((item) => item.status == "failed")
                  .reduce((acc, item) => {
                    return acc + item.amount;
                  }, 0)
              ),
              icon: <LuWallet />,
              iconColor: { base: "red.600", _dark: "red.300" },
              iconBgColor: { base: "red.50", _dark: "red.800" },
              percent: percentageDiff(
                pageTransactions.filter((item) => item.status == "failed"),
                "transactions",
                "sum",
                "month"
              ).percentageChange,
              period: "month",
            },
            {
              title: "Loyalty Points Earned",
              amount: entity.loyaltyPoints,
              icon: <FaRegStar />,
              iconColor: { base: "yellow.600", _dark: "yellow.300" },
              iconBgColor: { base: "yellow.50", _dark: "yellow.800" },
              percent: percentageDiff(pageTransactions.filter(tx => tx.status == 'successful'), 'points', 'sum', 'month').percentageChange,
              period: "month",
            },
          ],
  };

  const customersList = listCustomers(rawCustomers)
  
  const pageCustomersTable =
    entityType == "agent"
      ? {
          ...customersList,
          items: customersList.items
            .filter(
              (item) =>
                item.item6 == `${pageEntity.firstName} ${pageEntity.lastName}`
            )
            .filter((item) => filterRow(item, searchText)),
        }
      : {};

  const [filters, setFilters] = useState({
    search: "",
    status: "",
    agent: "",
  });

  // Get unique values for dropdowns
  const statusOptions = [
    ...new Set(pageTransactions.map((item) => item.status)),
  ];
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
    <Flex width={"100%"} direction={"column"} gap={4} p={{ md: 4 }}>
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
        {entityType == "agent" && <AgentCard agent={pageEntity} />}
        {entityType == "customer" && <CustomerCard customer={pageEntity} />}
        <Flex
          width={"100%"}
          wrap={"wrap"}
          p={{ base: 0, "2xl": 4 }}
          justify={{ base: "center", md: "start" }}
          gap={{ base: 4, xl: 3 }}
        >
          {pageEntity.performanceSummary.map((item) => (
            <Card {...item} />
          ))}
        </Flex>
      </Flex>
      <Tabs.Root
        defaultValue={entityType == "agent" ? "customers" : "transactions"}
        colorPalette={"green"}
      >
        <Tabs.List>
          {entityType == "agent" && (
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
          )}
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
            px={{ base: 1, md: 5 }}
            py={5}
            bg={{ base: "white", _dark: "gray.900" }}
            gap={5}
            rounded={"2xl"}
          >
            <Flex
              width={"100%"}
              rounded="xl"
              height={"60px"}
              px={2}
              align={"center"}
              justify={"space-between"}
            >
              {/**Filter buttons here */}
              <Flex width={{ base: "80%", md: "280px" }} colorPalette={"gray"}>
                <SearchByText
                  searchText={searchText}
                  setSearchText={setSearchText}
                />
              </Flex>
              <Box
                width={{ base: "50px", md: "150px" }}
                height={"40px"}
                colorPalette={"gray"}
              >
                <ExportButton />
              </Box>
            </Flex>
            <GenericTable {...pageCustomersTable} />
          </Flex>
        </Tabs.Content>
        <Tabs.Content value="transactions">
          <Flex
            bg={{ base: "white", _dark: "inherit" }}
            direction={"column"}
            gap={4}
            px={{ base: 2, md: 4 }}
            py={4}
            rounded={"2xl"}
            width={"100%"}
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

export default EntityDetails;
