import TransactionTableMobile from "@/components/transactions/TransactionTableMobile";
import {
  Box,
  Flex,
  Badge,
  Stack,
  ButtonGroup,
  IconButton,
  Pagination,
} from "@chakra-ui/react";
import { useState } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

const PAGE_SIZE = 10;

function TableRow({ isHeader, children }) {
  return (
    <Flex
      color={{base: isHeader ? "#626C71" : "inherit", _dark: isHeader ? "gray.300" : "inherit" }}
      width={{ base: "0px", md: "700px", lg: "750px", xl: "1080px" }}
      height={"60px"}
      bg={{base: isHeader ? "#f2f2f2" : "inherit", _dark:isHeader ? "gray.700" : "inherit"}}
      gap={3}
      p={3}
      align={"center"}
      borderRadius={isHeader ? "inherit" : "none"}
      justify={"space-between"}
      boxShadow={'0 0 1.5px lightgrey'}
      _hover={{bg: {base: isHeader ? '#f2f2f2' : 'gray.100', _dark: 'gray.500'}}}
      cursor={isHeader ? '' : 'pointer'}
    >
      {children}
    </Flex>
  );
}

function TableData({
  isHeader,
  reference,
  amount,
  customer,
  type,
  agent,
  dateTime,
  status,
}) {
  return (
    <TableRow isHeader={isHeader}>
      <Box
        display={{ base: "none", xl: "block" }}
        fontSize={isHeader ? "0.875rem" : "0.875rem"}
        fontWeight={isHeader ? "semibold" : "normal"}
        width={"100px"}
      >
        {reference}
      </Box>
      <Box
        fontSize={isHeader ? "0.875rem" : "0.875rem"}
        fontWeight={isHeader ? "semibold" : "normal"}
        width={"100px"}
      >
        {amount}
      </Box>
      <Box
        textTransform={"capitalize"}
        fontSize={isHeader ? "0.875rem" : "0.875rem"}
        fontWeight={isHeader ? "semibold" : "normal"}
        width={"180px"}
      >
        {customer}
      </Box>
      <Box
        textTransform={"capitalize"}
        fontSize={isHeader ? "0.875rem" : "0.875rem"}
        fontWeight={isHeader ? "semibold" : "normal"}
        width={"100px"}
      >
        {type}
      </Box>
      <Box
        display={{ base: "none", xl: "block" }}
        textTransform={"capitalize"}
        fontSize={isHeader ? "0.875rem" : "0.875rem"}
        fontWeight={isHeader ? "semibold" : "normal"}
        width={"180px"}
      >
        {agent}
      </Box>
      <Box
        textTransform={"capitalize"}
        fontSize={isHeader ? "0.875rem" : "0.875rem"}
        fontWeight={isHeader ? "semibold" : "normal"}
        width={"180px"}
      >
        {dateTime}
      </Box>
      <Box
        textTransform={"capitalize"}
        fontSize={isHeader ? "0.875rem" : "0.875rem"}
        fontWeight={isHeader ? "semibold" : "normal"}
        width={"80px"}
      >
        {!isHeader && (
          <Badge
            py={1}
            px={2}
            colorPalette={status == "successful" ? "green" : "red"}
            rounded={'xl'}
          >
            {status}
          </Badge>
        )}
        {isHeader && status}
      </Box>
    </TableRow>
  );
}

function AltTransactionTable({ transactions }) {
  //Attempting Pagination Inclusion
  const [page, setPage] = useState(1);
  const paginatedItems = transactions.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );

  //End of Attempt

  const transactionsTableHeader = {
    reference: "Reference",
    amount: "Amount",
    customer: "Customer",
    type: "Type",
    agent: "Agent",
    dateTime: "Date & Time",
    status: "Status",
  };

  const sampleTransaction = {
    reference: "NMKJHGFD34",
    amount: 6600.0,
    customer: "Grace Walsh",
    type: "deposit",
    agent: "Owen Gordon",
    dateTime: "Feb 16, 2025 11:35:00 AM",
    status: "successful",
  };
  return (
    <Stack
      borderTopRadius={"2xl"}
      bg={{ base: "white", _dark: "inherit" }}
      gap={5}
      height={`${62 * (PAGE_SIZE + 2)}px`}
    >
      <Box
        borderRadius={"inherit"}
        display={{ base: "none", md: "block" }}
        boxShadow={'0 0 1.5px lightgrey'}
      >
        <TableData isHeader={true} {...transactionsTableHeader} />

        {paginatedItems.map((item) => (
          <TableData {...item} />
        ))}
      </Box>

      <Box display={{base: 'block', md: 'none'}}>
        <TransactionTableMobile transactions={paginatedItems} />
      </Box>

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

export default AltTransactionTable;
