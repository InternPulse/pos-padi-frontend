"use client";
import { useState } from "react";

// $ Chakra UI Components
import {
  Badge,
  Table,
  Box,
  Stack,
  ButtonGroup,
  IconButton,
  Pagination,
} from "@chakra-ui/react";

import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

// $ Transactions Data
import {
  transactions,
  transactionTableHeaders,
} from "./transactionsMockData.js";

// $ Pagination Logic
const PAGE_SIZE = 10;

function TransactionTable() {
  const [page, setPage] = useState(1);
  const paginatedItems = transactions.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );

  // $ State for the transaction data for each row to be passed to the transaction card - to be moved to the GlobalContext
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  console.log(selectedTransaction);
  // $ Check if the values are correct and passed into the state.
  return (
    <Stack display={{ base: "none", md: "block" }}>
      <Table.ScrollArea
        maxWidth="5xl"
        roundedTop="10px"
        roundedBottom="8px"
        border="1px solid rgba(233, 233, 233, 0.7)"
      >
        <Table.Root>
          <Table.Header>
            <Table.Row
              bgColor={"#E9E9E9"}
              height="4.375rem"
              p="20px 30px 20px 30px"
            >
              {transactionTableHeaders.map((header) => (
                <Table.ColumnHeader
                  key={header.name}
                  color="#626C7A"
                  border="none"
                  fontSize={{ base: "0.725rem", xl: "0.875rem" }}
                  fontWeight="600"
                  textTransform={"capitalize"}
                >
                  {header.name}
                </Table.ColumnHeader>
              ))}
            </Table.Row>
          </Table.Header>
          <Table.Body bgColor="transparent">
            {paginatedItems && paginatedItems.length > 0 ? (
              paginatedItems.map((item) => (
                <Table.Row
                  key={item.reference}
                  _hover={{
                    bgColor: "gray.200/50",
                    cursor: "pointer",
                  }}
                  textTransform="capitalize"
                  height="70px"
                  bgColor="transparent"
                  color="gray.600"
                  p="20px 30px 20px 30px"
                  onClick={() => setSelectedTransaction(item)}
                >
                  <Table.Cell
                    color="#1A1A1A"
                    borderBottom="0.5px solid rgba(233, 233, 233, 0.7)"
                    fontSize={{ base: "0.725rem", xl: "0.875rem" }}
                    fontWeight="400"
                  >
                    {item.reference}
                  </Table.Cell>
                  <Table.Cell
                    color="#1A1A1A"
                    borderBottom="0.5px solid rgba(233, 233, 233, 0.7)"
                    fontSize={{ base: "0.725rem", xl: "0.875rem" }}
                    fontWeight="400"
                  >
                    {item.amount.toFixed(2)}
                  </Table.Cell>
                  <Table.Cell
                    color="#1A1A1A"
                    borderBottom="0.5px solid rgba(233, 233, 233, 0.7)"
                    fontSize={{ base: "0.725rem", xl: "0.875rem" }}
                    fontWeight="400"
                  >
                    {item.customer}
                  </Table.Cell>
                  <Table.Cell
                    color="#1A1A1A"
                    borderBottom="0.5px solid rgba(233, 233, 233, 0.7)"
                    fontSize={{ base: "0.725rem", xl: "0.875rem" }}
                    fontWeight="400"
                  >
                    {item.type}
                  </Table.Cell>
                  <Table.Cell
                    color="#1A1A1A"
                    borderBottom="0.5px solid rgba(233, 233, 233, 0.7)"
                    fontSize={{ base: "0.725rem", xl: "0.875rem" }}
                    fontWeight="400"
                  >
                    {item.agent}
                  </Table.Cell>
                  <Table.Cell
                    color="#1A1A1A"
                    borderBottom="0.5px solid rgba(233, 233, 233, 0.7)"
                    fontSize={{ base: "0.725rem", xl: "0.875rem" }}
                    fontWeight="400"
                  >
                    {item.dateTime}
                  </Table.Cell>
                  <Table.Cell
                    borderBottom="0.5px solid rgba(233, 233, 233, 0.7)"
                    fontSize="0.75rem"
                  >
                    <Badge
                      fontSize="0.625rem"
                      textAlign={"center"}
                      width={"5rem"}
                      p={"4px 10px 4px 10px"}
                      rounded={"full"}
                      color={
                        item.status === "successful" ? "#0B9D09" : "#FF3939"
                      }
                      bgColor={
                        item.status === "successful" ? "#0B9D0910" : "#FF393910"
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

      <Pagination.Root
        count={transactions.length}
        pageSize={PAGE_SIZE}
        page={page}
        onPageChange={(details) => setPage(details.page)}
        align="end"
      >
        <ButtonGroup variant="ghost" size="sm" wrap="wrap">
          <Pagination.PrevTrigger asChild>
            <IconButton>
              <LuChevronLeft />
            </IconButton>
          </Pagination.PrevTrigger>

          <Pagination.Items
            render={(paginationPage) => (
              <IconButton
                key={paginationPage.value}
                onClick={() => setPage(paginationPage.value)}
                variant={{ base: "ghost", _selected: "outline" }}
              >
                {paginationPage.value}
              </IconButton>
            )}
          />

          <Pagination.NextTrigger asChild>
            <IconButton>
              <LuChevronRight />
            </IconButton>
          </Pagination.NextTrigger>
        </ButtonGroup>
      </Pagination.Root>
    </Stack>
  );
}

export default TransactionTable;
