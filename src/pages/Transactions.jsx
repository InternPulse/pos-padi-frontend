import TransactionTable from "@/components/transactions/TransactionTable";
import TransactionTableMobile from "@/components/transactions/TransactionTableMobile";
import { Flex, Grid, GridItem, Container, SimpleGrid } from "@chakra-ui/react";

function Transactions() {
  return (
    <Grid
      bgColor="gray.500"
      width={{ base: "23.438rem", sm: "100%", xl: "73.75rem" }}
      maxWidth="73.75rem"
      border="2px dashed red"
      gap={{ base: "1.25rem", xl: "1.125rem" }}
      p={{ base: "1rem", xl: "1.875rem" }}
    >
      {/* Add Transaction */}
      <GridItem
        width={{ base: "21.438rem", sm: "100%" }}
        bgColor="gray.300"
        height="2.375rem"
        display={{ base: "block", md: "none" }}
      >
        <Container>Add Transaction Button Container</Container>
      </GridItem>

      {/*Cards  */}
      <GridItem
        // height={{ base: "9.75rem", xl: "9.06rem" }}
        height="auto"
        width={{ base: "21.438rem", sm: "100%" }}
        maxWidth="69.75rem"
        border="1px dashed red"
      >
        <SimpleGrid
          gap={{ base: "0.525rem", xl: "1.125rem" }}
          width="100%"
          height="100%"
          columns={{
            base: 2,
            sm: 3,
          }}
          gapY="1rem"
        >
          <Container
            border="gray.200"
            bgColor="gray.300"
            rounded="12px"
            height={{ base: "4.25rem", xl: "9.06rem" }}
            width={{ base: "10.438rem", sm: "100%" }}
            maxWidth="22.5rem"
          >
            Card 1
          </Container>
          <Container
            border="gray.200"
            bgColor="gray.300"
            rounded="12px"
            height={{ base: "4.25rem", xl: "9.06rem" }}
            width={{ base: "10.438rem", sm: "100%" }}
            maxWidth="22.5rem"
          >
            Card 2
          </Container>
          <Container
            border="gray.200"
            bgColor="gray.300"
            rounded="12px"
            height={{ base: "4.25rem", xl: "9.06rem" }}
            width={{ base: "10.438rem", sm: "100%" }}
            maxWidth="22.5rem"
          >
            Card 3
          </Container>
        </SimpleGrid>
      </GridItem>
      {/* Transactions Table  */}
      <GridItem
        width={{ base: "21.438rem", sm: "100%", xl: "69.75rem" }}
        height={{ base: "auto", xl: "61.125rem" }}
        // border="1px dashed blue"
      >
        <Flex
          direction="column"
          gap="0.625rem"
          height="100%"
          bgColor="white"
          width="100%"
          p={{ base: "0.5625rem", xl: "1.5rem" }}
          rounded="10px"
        >
          {/* Container for the Search functions */}
          <Container
            height="2.5rem"
            widht="100%"
            border="1px solid gray.500"
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
