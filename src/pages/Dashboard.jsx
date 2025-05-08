import { Box, Flex } from "@chakra-ui/react";
import TopAgentCard from "@/components/TopAgentCard";
import RevenueCard from "@/components/RevenueCard";
import Financecharts from "@/components/DashboardComponents/Financecharts";
import DateRangePicker from "@/components/header-nav-components/DateRangePicker";
import { useState } from "react";
import { IoPeopleOutline } from "react-icons/io5";
import { GrGroup } from "react-icons/gr";
import { GiSwipeCard } from "react-icons/gi";
import { transactionSummary } from "@/components/alt/transactions/AltTransactions";
import Card from "@/components/alt/dashboard-components/Card";
import { useEffect } from "react";
import TransDashFilterbutton from "@/components/TransFilterButton";
import { rawAgents } from "@/components/transactions/agentsMockData";
import { rawCustomers } from "@/components/transactions/customersMockData";
import { transactions } from "@/components/transactions/transactionsMockData";
import ExportButton from "@/components/alt/dashboard-components/ExportButton";
import { formatCurrency } from "@/components/alt/transactions/AltTransactions";
import { LuWallet } from "react-icons/lu";
import { useOutletContext } from "react-router-dom";
import { percentageDiff } from "@/utils/percentageDifference";



function Dashboard() {
  const [filteredTransactions, setFilteredTransactions] = useState(null);
  const [activePeriod, setActivePeriod] = useState('');

  // Transactions, Agents, Customers

  useEffect(() => {
    window.scrollTo(0,0)



  },[])

  const { user } = useOutletContext()

  const totalRevenue = formatCurrency(transactions.filter(item => item.status == 'successful').reduce((acc, tx) => acc + tx.fee, 0))
const processedAgents = rawAgents.map(agent => {
  const agentRevenue = transactions.filter(tx => tx.agent == `${agent.firstName} ${agent.lastName}`).reduce((acc, tx) => acc + tx.fee, 0)
  return {...agent, revenue: agentRevenue}
})

const topAgent = processedAgents.sort(function(a,b){return b.revenue - a.revenue})[0]

// Function to filter transactions by date period
function filterTransactionsByPeriod(transactions, period) {
  const now = new Date();
  let startDate = new Date();

  switch (period) {
    case '24hours':
      startDate.setHours(now.getHours() - 24);
      break;
    case '7days':
      startDate.setDate(now.getDate() - 7);
      break;
    case '30days':
      startDate.setDate(now.getDate() - 30);
      break;
    case '12months':
      startDate.setFullYear(now.getFullYear() - 1);
      break;
    default:
      return transactions;
  }

  return transactions.filter(transaction => {
    const transactionDate = new Date(transaction.dateTime);
    return transactionDate >= startDate && transactionDate <= now;
  });
}

function ButtonGroupContainer({onFilterChange}) {
  return (
    <Box
      width={{ base: "108px", md: "200px", xl: "344px" }}
      
      height={{ base: "40px", md: "40px" }}
      rounded={"xl"}
    >
      <TransDashFilterbutton onFilterChange={onFilterChange}/>
    </Box>
  );
}

function SelectDateContainer({ onDateRangeChange }) {
  return (
    <DateRangePicker onDateRangeChange={onDateRangeChange} />
  );
}

function ExportButtonContainer() {
  return (
    <Box
      width={{ base: "40px", md: "140px" }}
      height={{ base: "40px", md: "40px" }}
      rounded={"xl"}
    ><ExportButton /></Box>
  );
}

function ChartContainer({ filteredTransactions }) {
  const { user } = useOutletContext()

  return (
    <Box
      width={{ base: "100%", lg: "100%" }}
      maxW={{ base: "100%", lg: (user.role == 'admin'? "738px" : '100%') }}
      bg="gray.200" 
      height={{ base: "220px", md: "350px", lg: "484px" }}
      rounded="xl"
      overflow="hidden" 
      display="flex" 
      flexDirection="column"
    >
      <Financecharts 
        filteredTransactions={filteredTransactions} 
        showEmptyState={!filteredTransactions || filteredTransactions.length === 0}
      />
    </Box>
  );
}

function RevenueCardContainer() {
  return (
    <Box
      width={{ base: "100%", sm: '50%', lg: "360px" }}
      height={{ base: "230px", sm: '284px', xl: "170px" }}
      rounded={"xl"}
    >
      <RevenueCard amount={totalRevenue} percentageChange={percentageDiff(transactions.filter(tx => tx.status == 'successful'), 'fees', 'sum', 'month').percentageChange} timeframe={'last month'} />
    </Box>
  );
}

function TopAgentContainer() {
  const topAgentDetails = {
    userFullName: `${topAgent.firstName} ${topAgent.lastName}`,
    userImageURL: topAgent.imageURL,
    amount: formatCurrency(topAgent.revenue),
    clients: rawCustomers.filter(customer => customer.agent == `${topAgent.firstName} ${topAgent.lastName}`).length
  }

  return (
    <Box
      width={{ base: "100%", sm: '50%', lg: "360px" }}
      bg={"gray.200"}
      height="284px"
      rounded={"xl"}
    >
      <TopAgentCard {...topAgentDetails} />
    </Box>
  );
}

function PlaceHolderTransactionsCard() {
  return (
    <Box
      width={{ base: "168px", md: "300px", lg:'360px'}}
      bg={"gray.200"}
      height={{ base: "68px", md: "145px" }}
      rounded={'xl'}
    ></Box>
  );
}
  
 // Get filtered transactions based on active period
 const periodFilteredTransactions = filterTransactionsByPeriod(transactions, activePeriod);
  
 
 // Calculate summary data based on filtered transactions
 
 const CompanySummaries = () => {
  const totalAmount = periodFilteredTransactions.reduce((acc, trans) => acc + trans.amount, 0);
  const successfulAmount = periodFilteredTransactions
    .filter(trans => trans.status === 'successful')
    .reduce((acc, trans) => acc + trans.amount, 0);
  const failedAmount = periodFilteredTransactions
    .filter(trans => trans.status === 'failed')
    .reduce((acc, trans) => acc + trans.amount, 0);
  
  return [
    {
      title: 'Total Transaction',
      amount: formatCurrency(totalAmount),
      icon: <LuWallet />,
      iconColor: { base: "blue.600", _dark: "blue.300" },
      iconBgColor: { base: "blue.50", _dark: "blue.800" },
      percent: percentageDiff(transactions, 'transactions', 'sum', activePeriod).percentageChange,
      period: percentageDiff(transactions, 'transactions', 'sum', activePeriod).interval
    },
    {
      title: 'Successful',
      amount: formatCurrency(successfulAmount),
      icon: <LuWallet />,
      iconColor: { base: "green.600", _dark: "green.300" },
      iconBgColor: { base: "green.50", _dark: "green.800" },
      percent: percentageDiff(transactions.filter(tx => tx.status == 'successful'), 'transactions', 'sum', activePeriod).percentageChange,
      period: percentageDiff(transactions.filter(tx => tx.status == 'successful'), 'transactions', 'sum', activePeriod).interval
    },
    {
      title: 'Failed',
      amount: formatCurrency(failedAmount),
      icon: <LuWallet />,
      iconColor: { base: "red.600", _dark: "red.300" },
      iconBgColor: { base: "red.50", _dark: "red.800" },
      percent: percentageDiff(transactions.filter(tx => tx.status == 'failed'), 'transactions', 'sum', activePeriod).percentageChange,
      period: percentageDiff(transactions.filter(tx => tx.status == 'failed'), 'transactions', 'sum', activePeriod).interval
    },
    {
      title: 'Customers',
      amount: [...new Set(periodFilteredTransactions.map(t => t.customer))].length,
      icon: <GrGroup />,
      iconColor: {base: 'yellow.600', _dark:'yellow.300'},
      iconBgColor: {base: 'yellow.50', _dark: 'yellow.800'},
      percent: percentageDiff(rawCustomers, 'customers', 'length', activePeriod).percentageChange,
      period: percentageDiff(rawCustomers, 'customers', 'length', activePeriod).interval
    },
    {
      title: 'Transaction Count',
      amount: periodFilteredTransactions.length,
      icon: <GiSwipeCard />,
      iconColor: {base: 'purple.600', _dark:'purple.300'},
      iconBgColor: {base: 'purple.50', _dark: 'purple.800'},
      percent: percentageDiff(transactions, 'transactions', 'length', activePeriod).percentageChange,
      period: percentageDiff(transactions, 'transactions', 'length', activePeriod).interval
    },
  ];
};

const agentsSummary =     {
  title: 'Agents',
  amount: rawAgents.length,
  icon: <IoPeopleOutline />,
  iconColor: {base: 'orange.600', _dark:'orange.300'},
  iconBgColor: {base: 'orange.50', _dark: 'orange.800'},
  percent: percentageDiff(rawAgents, 'customers', 'length', activePeriod).percentageChange,
  period: percentageDiff(rawAgents, 'customers', 'length', activePeriod).interval
}


  const handleDateRangeChange = ({ startDate, endDate, transactions }) => {
    if (!startDate && !endDate) {
      // Clear state
      setFilteredTransactions([]);
    } else {
      // Update with filtered transactions
      setFilteredTransactions(transactions);
    }
  };
  const handleFilterChange = (period) => {
    setActivePeriod(period);
  };


  return (
    <Flex 
      p={{ base: 3, md: 5 }} 
      direction={'column'} 
      gap={5}
      maxW="100%"
      overflow="hidden"
    >
      <Flex 
        width={'100%'} 
        justify={'space-between'} 
        px={{ base: 2, md: 8, xl: 14 }}
        wrap="wrap"
        gap={4}
      >
        <ButtonGroupContainer onFilterChange={handleFilterChange}/>
        <Flex 
          width={{ base: '100%', sm: 'auto' }} 
          justify={'space-between'}
          gap={4}
        >
          <SelectDateContainer onDateRangeChange={handleDateRangeChange} />
          <ExportButtonContainer />
        </Flex>
      </Flex>
      <Flex 
        width={{base: '100%', md: '97%', '2xl': '91%'}}
        mx={'auto'}
        wrap={'wrap'} 
        gap={{ base: 3, md: 5 }}
        justify={user.role == 'admin'? 'center': {base:'center', md: 'start'}}
      >
        {CompanySummaries().map((item, index) => (
          <Card key={index} {...item} />
        ))}
        { user.role == 'admin' && <Card {...agentsSummary} />}
      </Flex>
      <Flex 
        direction={{ base: 'column', xl: 'row' }} 
        gap={5} 
        justify={'center'} 
        align={{ lg: 'center' }}
        width="100%"
        maxW="100%"
        px={user.role == 'agent' ? {base: 0, md: 6, lg: 4 , '2xl': 20} : 0}
      >
        <ChartContainer filteredTransactions={periodFilteredTransactions} />
{ (user.role == 'admin') &&  <Flex 
          direction={{ base: 'column', sm: 'row', xl: 'column' }} 
          gap={5} 
          justify={{ base: 'space-between', md: 'space-around' }} 
          width={{ sm: '100%', xl: 'auto' }}
          minW={{ xl: '360px' }}
        >
          <RevenueCardContainer />
          <TopAgentContainer />
        </Flex>}
      </Flex>
    </Flex>
  );
}

export default Dashboard;