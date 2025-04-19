import { Box, Flex } from "@chakra-ui/react";
import TopAgentCard from "@/components/TopAgentCard";

function PlaceHolderTransactionsCard() {
  return (
    <Box
      width={{ base: "168px", lg: "360px" }}
      bg={"gray.200"}
      height={{ base: "68px", lg: "145px" }}
      rounded={'xl'}
    ></Box>
  );
}

function PlaceholderChart(){
  return (
    <Box
      width={{ base: "100%", lg: "738px" }}
      bg={"gray.200"}
      height={{ base: "230px", lg: "484px" }}
      rounded={'xl'}
    ></Box>
  );
}

function PlaceholderRevenue(){
  return (
    <Box
      width={{ base: "100%", lg: "360px" }}
      bg={"gray.200"}
      height={{ base: "230px", lg: "170px" }}
      rounded={'xl'}
    ></Box>
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

  const topAgentDetails = {
    userFullName: "Biolaluwatito Adubi",
    amount: "353560.03",
    clients: 18
  }

  return (
    <Flex p={5} direction={'column'} gap={5}>
      <Flex width={'100%'} wrap={'wrap'} gap={5} justify={'center'}>
        {
          placeholderTransactionSummaries.map(item => <PlaceHolderTransactionsCard />)
        }
      </Flex>
      <Flex direction={{base:'column', lg:'row'}} gap={5} justify={'center'}>

        <PlaceholderChart />
        <Flex direction={'column'} gap={5} justify={'space-between'}>
          <PlaceholderRevenue />
          <TopAgentCard {...topAgentDetails}/>

        </Flex>
      </Flex>
    </Flex>
  );
}

export default Dashboard;
