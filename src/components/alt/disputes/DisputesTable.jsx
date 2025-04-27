import DisputesTableMobile from "./DisputesTableMobile";
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
import DisputesDialog from "../transactions/Effects/DisputesDialog";

const PAGE_SIZE = 10;

function TableRow({ isHeader, children }) {
  return (
    <Flex
      color={{base: isHeader ? "#626C71" : "inherit", _dark: isHeader ? "gray.300" : "inherit" }}
      width={{ base: "0px", md: '100%'}} //"700px", lg: "750px", xl:'980px', '2xl': "1080px" }}
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
  disputeStatus,
}) {
  return (
    <TableRow isHeader={isHeader}>
      <Box
        display={{ base: "none", '2xl': "block" }}
        fontSize={isHeader ? "0.875rem" : "0.875rem"}
        fontWeight={isHeader ? "semibold" : "normal"}
        width={"90px"}
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
            colorPalette={disputeStatus == "resolved" ? "green" : "red"}
            rounded={'xl'}
          >
            {disputeStatus}
          </Badge>
        )}
        {isHeader && disputeStatus}
      </Box>
    </TableRow>
  );
}

function DisputesTable({ transactions }) {

  const [page, setPage] = useState(1);
  const paginatedItems = transactions.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );


  const transactionsTableHeader = {
    reference: "Reference",
    amount: "Amount",
    customer: "Customer",
    type: "Type",
    agent: "Agent",
    dateTime: "Date & Time",
    disputeStatus: "Status",
  };


  return (
    <Flex
      borderTopRadius={"2xl"}
      bg={{ base: "white", _dark: "inherit" }}
      gap={5}
      height={`${62 * (PAGE_SIZE + 2)}px`}
      direction={'column'}
    >
      <Box
        borderRadius={"inherit"}
        display={{ base: "none", md: "block" }}
        boxShadow={'0 0 1.5px lightgrey'}
        width={'100%'}
      
      >
        <TableData isHeader={true} {...transactionsTableHeader} />

        {paginatedItems.map((item) => (
          <DisputesDialog data={item}><TableData {...item} /></DisputesDialog>
        ))}
      </Box>

      <Box display={{base: 'block', md: 'none'}}>
        <DisputesTableMobile transactions={paginatedItems} />
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
    </Flex>
  );
}

export default DisputesTable;
