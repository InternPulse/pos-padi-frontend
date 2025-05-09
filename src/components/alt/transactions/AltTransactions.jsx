import { Box, Flex, Stack, Text, Button } from "@chakra-ui/react";
import AltTransactionTable from "./AltTransactionTable";
import { transactions, transformTransactions } from "@/components/transactions/transactionsMockData";
// import { BiDirections } from "react-icons/bi";
import Card from "../dashboard-components/Card";
import { LuWallet } from "react-icons/lu";
import TransactionPageFilterButton from "@/components/TransactionPageFilterButton";
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import ExportButton from "../dashboard-components/ExportButton";
import AddTransactionDialog from "@/components/form/add-transaction/AddTransactionDialog";
import { percentageDiff } from "@/utils/percentageDifference";
import { getAllTransactions } from "@/backend-functions/transactions-api";
import ErrorMsg from "@/components/error-and-loading/ErrorMsg";
import LoadingSpinner from "@/components/error-and-loading/LoadingSpinner";
import { getNotifications } from "@/backend-functions/notifications";
import { transformNotifications } from "@/components/transactions/notificationsMockData";
import { getAllCustomers } from "@/backend-functions/customers-api";
import { transformCustomers } from "@/components/transactions/customersMockData";

export function formatCurrency(num) {
  const formattedCurrency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN",
  }).format(num);

  return formattedCurrency;
}



function AltTransactions() {
  const { user, notifications, setNotifications, newTransaction } = useOutletContext();

  const [ loading, setLoading ] = useState(true)
  const [ error, setError ] = useState(null)
  const [ transactionsData, setTransactionsData ] = useState([])
  const [ rawCustomersData, setRawCustomersData ] = useState([])
  const [filters, setFilters] = useState({
    search: "",
    status: "",
    agent: "",
  });




  useEffect(() => {
    window.scrollTo(0, 0);

    let ignore = false;

    async function fetchTransactionsData(){
      try{
        setLoading(true)

        const txData = await getAllTransactions()
        const notificationsData = await getNotifications()
        const customersData = await getAllCustomers()

        if(!ignore && txData && notificationsData && customersData){
          setTransactionsData(txData.data)
          setRawCustomersData(customersData.results)
          setNotifications(transformNotifications(notificationsData.data.notifications))
        }

        

      }catch(error){
        if(!ignore){
          setTransactionsData(null)
          setNotifications([])
          setRawCustomersData(null)
        }
      }finally {
        if(!ignore){
          setLoading(false)
        }
      }
    }

    fetchTransactionsData()

    return () => {
      ignore = true;
    }

  }, [newTransaction]);

  if(error){ return <ErrorMsg error={error} />}
  if(loading){ return <LoadingSpinner /> }

  const transactions = transformTransactions(transactionsData)
  const rawCustomers = transformCustomers(rawCustomersData).rawCustomers

  const transactionSummary = [
    {
      title: "Total Transaction",
      amount: formatCurrency(
        transactions.reduce((acc, trans) => {
          return acc + trans.amount;
        }, 0)
      ),
      icon: <LuWallet />,
      iconColor: { base: "blue.600", _dark: "blue.300" },
      iconBgColor: { base: "blue.50", _dark: "blue.800" },
      percent: percentageDiff(transactions, 'transactions', 'sum', 'month').percentageChange,
      period: "month",
    },
    {
      title: "Successful",
      amount: formatCurrency(
        transactions
          .filter((trans) => trans.status == "successful")
          .reduce((acc, trans) => {
            return acc + trans.amount;
          }, 0)
      ),
      icon: <LuWallet />,
      iconColor: { base: "green.600", _dark: "green.300" },
      iconBgColor: { base: "green.50", _dark: "green.800" },
      percent: percentageDiff(transactions.filter(tx => tx.status == 'successful'), 'transactions', 'sum', 'month').percentageChange,
      period: "month",
    },
    {
      title: "Failed",
      amount: formatCurrency(
        transactions
          .filter((trans) => trans.status == "failed")
          .reduce((acc, trans) => {
            return acc + trans.amount;
          }, 0)
      ),
      icon: <LuWallet />,
      iconColor: { base: "red.600", _dark: "red.300" },
      iconBgColor: { base: "red.50", _dark: "red.800" },
      percent: percentageDiff(transactions.filter(tx => tx.status == 'failed'), 'transactions', 'sum', 'month').percentageChange,
      period: "month",
    },
  ];


  // Get unique values for dropdowns
  const statusOptions = [...new Set(transactions.map((item) => item.status))];
  const agentOptions = [...new Set(transactions.map((item) => item.agent))];

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

  const filteredTransactions = filterTransactions(transactions);

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
    <Flex
      direction={"column"}
      gap={5}
      py={5}
      px={{ base: 0, md: 4 }}
      align={"center"}
      justify={"center"}
      width={"95%"}
    >
      <Flex
        wrap={"wrap"}
        gap={5}
        p={{ base: 2, md: 5 }}
        justify={{ base: "center", md: "start" }}
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
        width={{ base: "100%", md: "100%" }}
        rounded={"2xl"}
      >
        <Text
          color={{ base: "#626C7A", _dark: "gray.200" }}
          fontWeight={"semibold"}
        >
          Transactions List
        </Text>
        <Flex h={{base: '100px', xl: "40px"}} justify={'space-between'} direction={{base: 'column', xl: 'row'}}>
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

          <Flex width={{ base: "100%", md: "340px" }} justify={{base: 'space-between' , md: "start"}} gap={4} >

            {/* <Button
              colorPalette={"green"}
              rounded={"lg"}
              display={user.role == "agent" ? "block" : "none"}
            >
              <Flex gap={2}>
                <FiPlus /> Add Transaction
              </Flex>
            </Button> */}
            <AddTransactionDialog customers={rawCustomers} />
            <Box width={{ base: "50px", md: "150px" }}>
              <ExportButton />
            </Box>
          </Flex>
        </Flex>
        <AltTransactionTable transactions={filteredTransactions} />
      </Flex>
    </Flex>
  );
}

export default AltTransactions;
