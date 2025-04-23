import TransactionTable from "@/components/transactions/TransactionTable";
import TransactionTableMobile from "@/components/transactions/TransactionTableMobile";
import { Flex, Grid, GridItem, Container, SimpleGrid } from "@chakra-ui/react";

function Transactions() {
  return (
    <Grid
      bgColor="gray.200"
      height="auto"
      width="100%"
      maxWidth="73.75rem"
      // border="2px dashed red"
      gap={{ base: "1.25rem", xl: "1.125rem" }}
      p={4}
    >
      {/* Add Transaction: Visible width < 680px */}
      <GridItem
        width="100%"
        bgColor="gray.300"
        color="gray.500"
        height="2.375rem"
        display={{ base: "block", lg: "none" }}
        // border="1px solid green"
      >
        <Container>Add Transaction Button Container</Container>
      </GridItem>

      {/*Cards  
      
      */}
      <GridItem
        width="100%"
        maxWidth="69.75rem"
        // border="1px dashed red"
      >
        <SimpleGrid
          gap={{ base: "0.525rem", xl: "1.125rem" }}
          maxWidth="67.5rem"
          columns={{
            base: 2,
            sm: 3,
          }}
          gapY="1rem"
        >
          <Container
            bgColor="gray.300"
            rounded="12px"
            height={{ base: "4.25rem", md: "6rem", xl: "9.06rem" }}
            width="100%"
            maxWidth="22.5rem"
          >
            Card 1
          </Container>
          <Container
            bgColor="gray.300"
            rounded="12px"
            height={{ base: "4.25rem", md: "6rem", xl: "9.06rem" }}
            width="100%"
            maxWidth="22.5rem"
          >
            Card 2
          </Container>
          <Container
            bgColor="gray.300"
            rounded="12px"
            height={{ base: "4.25rem", md: "6rem", xl: "9.06rem" }}
            width="100%"
            maxWidth="22.5rem"
          >
            Card 3
          </Container>
        </SimpleGrid>
      </GridItem>
      {/* Transactions Table  */}
      <GridItem
        height={{ base: "auto", xl: "61.125rem" }}
        width="100%"
        maxWidth="67.5rem"
        // border="1px dashed blue"
      >
        <Flex
          direction="column"
          gap="0.625rem"
          height="100%"
          bgColor="white"
          maxWidth="100%"
          p={{ base: "0.5625rem", xl: "1.5rem" }}
          rounded="10px"
        >
          {/* Container for the Search functions */}
          <Container
            height="2.5rem"
            widht="100%"
            bgColor={"gray.300"}
            textAlign={"center"}
          >
            Table Search Items and Button
          </Container>
          <TransactionTable />
          <TransactionTableMobile />
        </Flex>
      </GridItem>
    </Grid>
  );
}

export default Transactions;
