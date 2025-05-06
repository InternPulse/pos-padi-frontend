import { Flex, Text, Button, Box } from "@chakra-ui/react";
import Card from "@/components/alt/dashboard-components/Card";
import GenericTable from "@/components/alt/transactions/generic-table/GenericTable";
import SearchByText from "@/components/Others/data-filters/SearchByText";
import { useState } from "react";
import { filterRow } from "@/components/Others/data-filters/SearchByText";
import ExportButton from "../../dashboard-components/ExportButton";
import { useLocation } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import AddCustomerDialog from "@/components/form/add-customer-form/AddCustomerDialog";

const GenericPage = ({ pageSummary, pageTable, pageTitle }) => {
  const [searchText, setSearchText] = useState("");
  const currentPath = useLocation().pathname;
  const { user } = useOutletContext();

  const filteredPageTable = {
    ...pageTable,
    items: pageTable.items.filter((row) => filterRow(row, searchText)),
  };

  return (
    <Flex
      direction={"column"}
      width={"95%"}
      height={"100%"}
      // px={{ base: 1, xl: 4 }}
      py={5}
      gap={5}
      align={"center"}
    >
      <Flex
        direction={{ base: "column", sm: "row" }}
        justify={{ base: "start", "2xl": "center" }}
        gap={5}
        wrap={"wrap"}
        width={"100%"}
        p={{ base: 2, md: 3, xl: 6 }}
        align={{ base: "center" }}
      >
        {pageSummary.map((item) => (
          <Card {...item} />
        ))}
      </Flex>

      <Flex
        width={{ base: "100%", md: "95%" }}
        align={"start"}
        direction={"column"}
        px={{ base: 2, md: 5 }}
        py={5}
        bg={{ base: "white", _dark: "gray.900" }}
        gap={5}
        rounded={"2xl"}
      >
        <Text
          ml={2}
          textStyle={"md"}
          fontWeight={"semibold"}
          color={{ base: "#626C7A", _dark: "gray.200" }}
        >
          {pageTitle} List
        </Text>
        <Flex
          width={"100%"}
          rounded="xl"
          height={{ base: "100px", md: "60px" }}
          justify={{ base: "space-around", md: "space-between" }}
          // border={'2px solid red'}
          align={"center"}
          direction={{ base: "column", md: "row" }}
          px={2}
        >
          {/**Filter buttons here */}
          <Flex width={{ base: "100%", md: "280px" }}>
            <SearchByText
              searchText={searchText}
              setSearchText={setSearchText}
            />
          </Flex>
          <Flex
            width={{ base: "100%", md: "340px" }}
            justify={
              currentPath.includes("agent") ||
              (currentPath.includes("customer") && user.role == "agent")
                ? "space-between"
                : "end"
            }
          >
            {/* <Button
              colorPalette={"green"}
              rounded={"lg"}
              display={
                currentPath.includes("agent") ||
                (currentPath.includes("customer") && user.role == "agent")
                  ? "block"
                  : "none"
              }
            >
              <Flex gap={2}>
                <FiPlus /> Add{" "}
                {currentPath.includes("agent") ? "Agent" : "Customer"}{" "}
              </Flex>
            </Button> */}
            <AddCustomerDialog />
            <Box width={{ base: "50px", md: "150px" }}>
              <ExportButton />
            </Box>
          </Flex>
        </Flex>
        <GenericTable {...filteredPageTable} />
      </Flex>
    </Flex>
  );
};

export default GenericPage;
