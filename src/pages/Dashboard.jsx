import { Box, Flex } from "@chakra-ui/react";
import TopAgentCard from "@/components/TopAgentCard";
import RevenueCard from "@/components/RevenueCard";
import Financecharts from "@/components/DashboardComponents/Financecharts";

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
      bg={"gray.200"}
      height={{ base: "230px", sm:'284px', xl: "170px" }}
      rounded={'xl'}
    >
      <RevenueCard />
    </Box>
  );  
}

function TopAgentContainer(){

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
      rounded={'xl'}
    >
      <TopAgentCard {...topAgentDetails}/>
    </Box>
  );  
}

function Dashboard() {
  const placeholderTransactionSummaries  = [
    'data',
    'data',
    'data',
    'data',
    'data',
    'data',
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
          placeholderTransactionSummaries.map(item => <PlaceHolderTransactionsCard />)
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
