import {
  Box,
  Flex,
  Badge,
  Stack,
  VStack,
  ButtonGroup,
  IconButton,
  Pagination,
} from "@chakra-ui/react";
import { useState } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import GenericTableCard from "./GenericTableCard";
import { useNavigate, useLocation } from "react-router-dom";

const PAGE_SIZE = 10;

function TableRow({ isHeader, children, onClick }) {
  return (
    <Flex
      onClick={onClick}
      color={{
        base: isHeader ? "#626C71" : "inherit",
        _dark: isHeader ? "gray.300" : "inherit",
      }}
      width={{ base: "100%" }}//, md: "600px", lg: "650px", xl: "1080px" }}
      height={"60px"}
      bg={{
        base: isHeader ? "#f2f2f2" : "inherit",
        _dark: isHeader ? "gray.700" : "inherit",
      }}
      gap={3}
      p={3}
      align={"center"}
      borderRadius={isHeader ? "inherit" : "none"}
      justify={"space-between"}
      boxShadow={"0 0 1.5px lightgrey"}
      _hover={{
        bg: { base: isHeader ? "#f2f2f2" : "gray.100", _dark: "gray.500" },
      }}
      cursor={isHeader ? "" : "pointer"}
    >
      {children}
    </Flex>
  );
}



function TableData({
  isHeader,
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  status,
}) {


  return (
    <TableRow  isHeader={isHeader}>
      {item1 && (
        <Box
          display={{ base: "none", xl: "block" }}
          fontSize={isHeader ? "0.875rem" : "0.875rem"}
          fontWeight={isHeader ? "semibold" : "normal"}
          width={"100px"}
        >
          {item1}
        </Box>
      )}
      {item2 && (
        <Box
          fontSize={isHeader ? "0.875rem" : "0.875rem"}
          fontWeight={isHeader ? "semibold" : "normal"}
          width={"100px"}
        >
          {item2}
        </Box>
      )}
      {item3 && (
        <Box
          textTransform={"capitalize"}
          fontSize={isHeader ? "0.875rem" : "0.875rem"}
          fontWeight={isHeader ? "semibold" : "normal"}
          width={"180px"}
        >
          {item3}
        </Box>
      )}
      {item4 && (
        <Box
          textTransform={"capitalize"}
          fontSize={isHeader ? "0.875rem" : "0.875rem"}
          fontWeight={isHeader ? "semibold" : "normal"}
          width={"100px"}
        >
          {item4}
        </Box>
      )}
      {item5 && (
        <Box
          display={{ base: "none", sm: "block" }}
          textTransform={isHeader? "" : "lowercase"}
          fontSize={isHeader ? "0.875rem" : "0.875rem"}
          fontWeight={isHeader ? "semibold" : "normal"}
          width={"180px"}
        >
          {item5}
        </Box>
      )}
      {item6 && (
        <Box
          textTransform={"capitalize"}
          fontSize={isHeader ? "0.875rem" : "0.875rem"}
          fontWeight={isHeader ? "semibold" : "normal"}
          width={"180px"}
        >
          {item6}
        </Box>
      )}
      {status && (
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
              rounded={"xl"}
            >
              {status}
            </Badge>
          )}
          {isHeader && status}
        </Box>
      )}
    </TableRow>
  );
}

function GenericTable({ headings, items }) {
  const [page, setPage] = useState(1);
  const navigate = useNavigate()
  const currentPath = useLocation().pathname
  const paginatedItems = items?.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function handleClick(isHeader, id){
    if(isHeader){return}
    if(currentPath == '/agents' || currentPath == '/customers'){
      navigate(`${currentPath}/${id}`)
    }
  }

  return (
    <Stack
      borderTopRadius={"2xl"}
      bg={{ base: "white", _dark: "inherit" }}
      // display={{ base: "none", md: "flex" }}
      gap={5}
      height={{base: `${107 * (PAGE_SIZE + 2)}px`, md: `${68 * (PAGE_SIZE + 2)}px`}}
      width={'100%'}
    >
      <Box
        borderRadius={"inherit"}
        display={{ base: "none", md: "block" }}
        boxShadow={"0 0 1.5px lightgrey"}
      >
        <TableData isHeader={true} {...headings} />

        {paginatedItems?.map((item) => (
          <Box onClick={()=>{handleClick(item.isHeader, item.item1)}}><TableData {...item} /></Box>
          // <TableData {...item} />
        ))}
      </Box>

      <Box height={'100%'} display={{base: 'block', md: 'none'}}>
        <GenericTableCard items={paginatedItems} />
      </Box>
      

      
     

      <Pagination.Root
        count={items?.length}
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

export default GenericTable;
