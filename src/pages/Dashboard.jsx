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
import { transactions } from "@/components/transactions/transactionsMockData";
import ExportButton from "@/components/alt/dashboard-components/ExportButton";

function ButtonGroupContainer() {
  return (
    <Box
      width={{ base: "108px", md: "200px", xl: "344px" }}
      
      height={{ base: "40px", md: "40px" }}
      rounded={"xl"}
    >
      <TransDashFilterbutton/>
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
  return (
    <Box
      width={{ base: "100%", lg: "100%" }}
      maxW={{ base: "100%", lg: "738px" }}
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
      <RevenueCard />
    </Box>
  );
}

function TopAgentContainer() {
  const topAgentDetails = {
    userFullName: "Biolaluwatito Adubi",
    amount: "353560.03",
    clients: 18
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

function Dashboard() {
  const [filteredTransactions, setFilteredTransactions] = useState(null);
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  
  const CompanySummaries = [
    ...transactionSummary,
    {
      title: 'Agents',
      amount: rawAgents.length,
      icon: <IoPeopleOutline />,
      iconColor: {base: 'orange.600', _dark:'orange.300'},
      iconBgColor: {base: 'orange.50', _dark: 'orange.800'},
      percent: 15,
      period: 'month'
    },
    {
      title: 'Customers',
      amount: [...(new Set(transactions.map(transaction => transaction.customer)))].length,
      icon: <GrGroup />,
      iconColor: {base: 'yellow.600', _dark:'yellow.300'},
      iconBgColor: {base: 'yellow.50', _dark: 'yellow.800'},
      percent: -5,
      period: 'month'
    },
    {
      title: 'Transaction Count',
      amount: transactions.length,
      icon: <GiSwipeCard />,
      iconColor: {base: 'purple.600', _dark:'purple.300'},
      iconBgColor: {base: 'purple.50', _dark: 'purple.800'},
      percent: 23,
      period: 'month'
    },
  ];

  const handleDateRangeChange = ({ startDate, endDate, transactions }) => {
    if (!startDate && !endDate) {
      // Clear state
      setFilteredTransactions([]);
    } else {
      // Update with filtered transactions
      setFilteredTransactions(transactions);
    }
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
        <ButtonGroupContainer />
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
        width={'100%'} 
        wrap={'wrap'} 
        gap={{ base: 3, md: 5 }} 
        justify={'center'}
      >
        {CompanySummaries.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </Flex>
      <Flex 
        direction={{ base: 'column', xl: 'row' }} 
        gap={5} 
        justify={'center'} 
        align={{ lg: 'center' }}
        width="100%"
        maxW="100%"
      >
        <ChartContainer filteredTransactions={filteredTransactions} />
        <Flex 
          direction={{ base: 'column', sm: 'row', xl: 'column' }} 
          gap={5} 
          justify={{ base: 'space-between', md: 'space-around' }} 
          width={{ sm: '100%', xl: 'auto' }}
          minW={{ xl: '360px' }}
        >
          <RevenueCardContainer />
          <TopAgentContainer />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Dashboard;