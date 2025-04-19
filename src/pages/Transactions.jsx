import TransactionTable from "@/components/transactions/TransactionTable";
import { Grid, GridItem, Container } from "@chakra-ui/react";

function Transactions() {
  return (
    <Grid
      maxHeight="100%"
      width="100%"
      border="2px dashed red"
      templateColumns={"repeat(3, 1fr)"}
      templateRows={"auto, 1fr"}
      gap={6}
      p={4}
    >
      <GridItem height="7rem" width="100%">
        {/*Cards  */}
        <Container
          border="gray.200"
          bgColor="gray.300"
          height="7rem"
          rounded="12px"
        ></Container>
      </GridItem>
      <GridItem>
        <Container
          border="gray.200"
          bgColor="gray.300"
          height="7rem"
          rounded="12px"
          width="100%"
        ></Container>
      </GridItem>
      <GridItem>
        <Container
          border="gray.200"
          bgColor="gray.300"
          height="7rem"
          rounded="12px"
          width-="100%"
        ></Container>
      </GridItem>
      <GridItem colSpan={3}>
        <TransactionTable />
      </GridItem>
    </Grid>
  );
}

export default Transactions;
