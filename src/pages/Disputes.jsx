import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import DisputesTable from "@/components/alt/disputes/DisputesTable";
import { transactions, transformTransactions } from "@/components/transactions/transactionsMockData";
import { disputes, transformDisputes } from "@/components/transactions/disputesMockData";
import Card from "@/components/alt/dashboard-components/Card";
import { LuTicket } from "react-icons/lu";
import TransactionPageFilterButton from "@/components/TransactionPageFilterButton";
import { useEffect, useState } from "react";
import { percentageDiff } from "@/utils/percentageDifference";
import { useOutletContext } from "react-router-dom";
import { getDisputes } from "@/backend-functions/dispute-api";
import { getNotifications } from "@/backend-functions/notifications";
import { transformNotifications } from "@/components/transactions/notificationsMockData";
import LoadingSpinner from "@/components/error-and-loading/LoadingSpinner";
import ErrorMsg from "@/components/error-and-loading/ErrorMsg";
import { getAllTransactions } from "@/backend-functions/transactions-api";


function Disputes() {

  const { user, notifications, setNotifications } = useOutletContext()

  const [ loading, setLoading ] = useState(true)
  const [ error, setError ] = useState(null)
  const [ disputesData, setDisputesData ] = useState([])
  const [ transactionsData, setTransactionsData ] = useState([])

  
  
  const [filters, setFilters] = useState({
    search: '',
    disputeStatus: '',
    agent: ''
  });



  useEffect(() => {
    window.scrollTo(0, 0);

    let ignore = false;

    async function fetchDisputesData(){
      setLoading(true)

      try{

        const dpData = await getDisputes()
        const txData = await getAllTransactions()
        const notificationsData = await getNotifications()

        if(!ignore && dpData && notificationsData && txData){
          setDisputesData(transformDisputes(dpData.disputes))
          setNotifications(transformNotifications(notificationsData.data.notifications))
          setTransactionsData(txData.data)
          console.log(transactionsData)
        }

      }catch(error){
        if(!ignore){
          setDisputesData(null)
          setTransactionsData(null)
          setNotifications([])
        }
      }finally{
        if(!ignore){
          setLoading(false)
        }
      }

    }

    fetchDisputesData()

    return () => {
      ignore = true
    }

  }, []);

  if(error){ return <ErrorMsg error={error} />}
  if(loading){ return <LoadingSpinner /> }

  console.log(transactionsData)

  // const transactions = transformTransactions(transactionsData)
  // console.log(transactions)

  // const disputedTransactions = disputes.map(dispute => {
  //   const disputeTx = transactions.find(tx => tx.reference == dispute.reference)
  //   return {
  //     ...dispute, ...disputeTx
  //   }
  // })

  const disputedTransactions = disputesData

  console.log(disputesData)
  console.log(disputedTransactions[1])


  // console.log(disputesData)
  // const disputedTransactions = disputesData.map(dispute => dispute.transaction)
  // console.log(disputedTransactions)
  
  const transactionSummary = [
    {
      title: "Total Tickets",
      amount: disputedTransactions.length,
      icon: <LuTicket />,
      iconColor: { base: "blue.600", _dark: "blue.300" },
      iconBgColor: { base: "blue.50", _dark: "blue.800" },
      percent: percentageDiff(disputedTransactions, 'disputes', 'length', 'month').percentageChange,
      period: "month",
    },
    {
      title: "Resolved",
      amount: disputedTransactions.filter(item => item.disputeStatus.toLowerCase() == 'resolved').length,
      icon: <LuTicket />,
      iconColor: { base: "green.600", _dark: "green.300" },
      iconBgColor: { base: "green.50", _dark: "green.800" },
      percent: percentageDiff(disputedTransactions.filter(item => item.disputeStatus == 'resolved'), 'disputes', 'length', 'month').percentageChange,
      period: "month",
    },
    {
      title: "Pending",
      amount: disputedTransactions.filter(item => item.disputeStatus.toLowerCase() == 'pending').length,
      icon: <LuTicket />,
      iconColor: { base: "red.600", _dark: "red.300" },
      iconBgColor: { base: "red.50", _dark: "red.800" },
      percent: percentageDiff(disputedTransactions.filter(item => item.disputeStatus == 'pending'), 'disputes', 'length', 'month').percentageChange,
      period: "month",
    },
  ];



  // Get unique values for dropdowns
  const statusOptions = [...new Set(disputedTransactions.map(item => item.disputeStatus))];
  const agentOptions = [...new Set(disputedTransactions.map(item => item.agent))];

  const filterTransactions = (data) => {
    return data.filter(item => {
      const matchesSearch = item.reference.toLowerCase().includes(filters.search.toLowerCase());
      const matchesStatus = !filters.disputeStatus || item.disputeStatus === filters.disputeStatus;
      const matchesAgent = !filters.agent || item.agent === filters.agent;
      
      return matchesSearch && matchesStatus && matchesAgent;
    });
  };

  const filteredTransactions = filterTransactions(disputedTransactions);

  // Handle input changes
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setFilters(prev => ({...prev, search: value}));
  };

  const handleStatusChange = (e) => {
    const value = e.target.value;
    setFilters(prev => ({...prev, disputeStatus: value}));
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
        <DisputesTable transactions={filteredTransactions} />
      </Flex>
    </Flex>
  );
}

export default Disputes;
