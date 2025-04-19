// $ Chakra UI Components
import { Badge, Table, Box } from "@chakra-ui/react";
// $ Project Data
import {
  transactions,
  transactionTableHeaders,
} from "./transactionsMockData.js";

function TransactionTable() {
  return (
    <Table.ScrollArea
      rounded="10px"
      borderColor={"gray.200"}
      borderWidth="1px"
      display={{ base: "hidden", md: "block" }}
    >
      <Table.Root size="sm" stickyHeader interactive>
        <Table.Header>
          <Table.Row bgColor={"#C4C4C4"} height="3rem">
            {transactionTableHeaders.map((header) => (
              <Table.ColumnHeader
                key={header.name}
                color="gray.600"
                border="none"
                fontSize={{ base: "0.85rem", lg: "0.875rem" }}
                textTransform={"capitalize"}
              >
                {header.name}
              </Table.ColumnHeader>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body bgColor="transparent">
          {transactions && transactions.length > 0 ? (
            transactions.map((item) => (
              <Table.Row
                key={item.reference}
                _hover={{
                  bgColor: "gray.200/50",
                }}
                textTransform={"capitalize"}
                height="70px"
                bgColor="transparent"
                color="gray.600"
              >
                <Table.Cell
                  color="gray.500"
                  borderColor="gray.200"
                  fontSize="0.75rem"
                  textAlign="left"
                >
                  {item.reference}
                </Table.Cell>
                <Table.Cell
                  color="gray.500"
                  borderColor="gray.200"
                  fontSize="0.75rem"
                >
                  {item.amount}
                </Table.Cell>
                <Table.Cell
                  color="gray.500"
                  borderColor="gray.200"
                  fontSize="0.75rem"
                >
                  {item.customer}
                </Table.Cell>
                <Table.Cell
                  color="gray.500"
                  borderColor="gray.200"
                  fontSize="0.75rem"
                >
                  {item.type}
                </Table.Cell>
                <Table.Cell
                  color="gray.500"
                  borderColor="gray.200"
                  fontSize="0.75rem"
                >
                  {item.agent}
                </Table.Cell>
                <Table.Cell
                  color="gray.500"
                  borderColor="gray.200"
                  fontSize="0.75rem"
                >
                  {item.dateTime}
                </Table.Cell>
                <Table.Cell borderColor="gray.200" fontSize="0.75rem">
                  <Badge
                    fontSize={{ base: "0.6rem", lg: "0.75rem" }}
                    textAlign={"center"}
                    width={"5rem"}
                    py={1.5}
                    rounded={"full"}
                    color={
                      item.status === "successful"
                        ? "green.500"
                        : item.status === "pending"
                        ? "gray.400"
                        : "red.400"
                    }
                    bgColor={
                      item.status === "successful"
                        ? "green.100"
                        : item.status === "pending"
                        ? "gray.200"
                        : "red.100"
                    }
                  >
                    <Box as="span" mx="auto">
                      {item.status}
                    </Box>
                  </Badge>
                </Table.Cell>
              </Table.Row>
            ))
          ) : (
            <Table.Row>
              <Table.Cell as="td" textAlign="center" py={4}>
                No transactions found. Add a new transaction to get started.
              </Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table.Root>
    </Table.ScrollArea>
  );
}

export default TransactionTable;
