import { Box, Flex } from "@chakra-ui/react";
import TopAgentCard from "@/components/TopAgentCard";
import RevenueCard from "@/components/RevenueCard";
import Financecharts from "@/components/DashboardComponents/Financecharts";
import { IoPeopleOutline } from "react-icons/io5";
import { GrGroup } from "react-icons/gr";
import { GiSwipeCard } from "react-icons/gi";
import { transactionSummary } from "@/components/alt/transactions/AltTransactions";
import Card from "@/components/alt/dashboard-components/Card";

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

function ButtonGroupContainer() {
  return (
    <Box
      width={{ base: "108px", md: "200px", xl:'344px'}}
      bg={"gray.200"}
      height={{ base: "40px", md: "40px" }}
      rounded={'xl'}
    ></Box>
  );
}

function SelectDateContainer() {
  return (
    <Box
      width={{ base: "150px", md: "200px"}}
      bg={"gray.200"}
      height={{ base: "40px", md: "40px" }}
      rounded={'xl'}
    ></Box>
  );
}

function ExportButtonContainer() {
  return (
    <Box
      width={{ base: "40px", md: "140px"}}
      bg={"gray.200"}
      height={{ base: "40px", md: "40px" }}
      rounded={'xl'}
    ></Box>
  );
}

function ChartContainer(){
  return (
    <Box
      width={{ base: "100%", lg: "738px" }}
      bg={"gray.200"}
      height={{ base: "230px", lg: "484px" }}
      rounded={'xl'}
    >
      <Financecharts />
    </Box>
  );
}

function RevenueCardContainer(){
  return (
    <Box
      width={{ base: "100%", sm: '50%', lg: "360px" }}
      height={{ base: "230px", sm:'284px', xl: "170px" }}
      rounded={'xl'}
    >
      <RevenueCard />
    </Box>
  );  
}

function TopAgentContainer(){

  const topAgentDetails = {
    userFullName: "Boluwatife Adubi",
    amount: "353560.03",
    clients: 18
  }

  return (
    <Box
      width={{ base: "100%", sm: '50%', lg: "360px" }}
      bg={"gray.200"}
      height="284px"
      rounded={'xl'}
    >
      <TopAgentCard {...topAgentDetails}/>
    </Box>
  );  
}

function Dashboard() {
  const CompanySummaries  = [
    ...transactionSummary,
    {
      title: 'Agents',
      amount: 8,
      icon: <IoPeopleOutline />,
      iconColor: {base: 'orange.600', _dark:'orange.300'},
      iconBgColor: {base: 'orange.50', _dark: 'orange.800'},
      percent: 15,
      period: 'month'
    },
    {
      title: 'Customers',
      amount: 352,
      icon: <GrGroup />,
      iconColor: {base: 'yellow.600', _dark:'yellow.300'},
      iconBgColor: {base: 'yellow.50', _dark: 'yellow.800'},
      percent: -5,
      period: 'month'
    },
    {
      title: 'Transaction Count',
      amount: 7214,
      icon: <GiSwipeCard />,
      iconColor: {base: 'purple.600', _dark:'purple.300'},
      iconBgColor: {base: 'purple.50', _dark: 'purple.800'},
      percent: 23,
      period: 'month'
    },
  ]





  return (
    <Flex p={5} direction={'column'} gap={5}>
      <Flex width={'100%'} justify={'space-between'} px={{base: 2, md: 8, xl: 14}}>
        <ButtonGroupContainer />
        <Flex width={{base: '200px', md: '360px'}} justify={'space-between'}>
          <SelectDateContainer />
          <ExportButtonContainer />
        </Flex>
      </Flex>
      <Flex width={'100%'} wrap={'wrap'} gap={5} justify={'center'}>
        {
          CompanySummaries.map(item => <Card {...item} />)
        }
      </Flex>
      <Flex direction={{base:'column', xl:'row'}} gap={5} justify={'center'} align={{lg:'center'}}>

        <ChartContainer />
        <Flex direction={{base: 'column', sm: 'row', xl: 'column'}} gap={5} justify={{base:'space-between', md:'space-around'}}>
          <RevenueCardContainer />
          
          <TopAgentContainer />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Dashboard;
