import { Flex, Text } from "@chakra-ui/react";
import Card from "@/components/alt/dashboard-components/Card";
import GenericTable from "@/components/alt/transactions/generic-table/GenericTable";

const GenericPage = ({ pageSummary, pageTable, pageTitle }) => {
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
        justify={{ base: "start", lg: "start" }}
        gap={5}
        wrap={"wrap"}
        width={"100%"}
        p={{base:2, md: 3, xl: 6}}
        align={{ base: "center" }}
      >
        {pageSummary.map((item) => (
          <Card {...item} />
        ))}
      </Flex>

      <Flex
        width={{base: '100%' , md: "95%"}}
        align={"start"}
        direction={"column"}
        px={{ base: 2, md: 5 }}
        py={5}
        bg={{ base: "white", _dark: "gray.900" }}
        gap={5}
        rounded={'2xl'}
      >
        <Text ml={2} textStyle={"md"} fontWeight={"semibold"} color={{ base: "#626C7A", _dark: "gray.200" }}>
          {pageTitle} List
        </Text>
        <Flex
          width={"100%"}
          bg={"gray.200"}
          rounded="xl"
          height={"60px"}
        ></Flex>
        <GenericTable {...pageTable} />
      </Flex>
    </Flex>
  );
};

export default GenericPage;
