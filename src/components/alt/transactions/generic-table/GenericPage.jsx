import { Flex, Text } from "@chakra-ui/react";
import Card from "@/components/alt/dashboard-components/Card";
import GenericTable from "@/components/alt/transactions/generic-table/GenericTable";

const GenericPage = ({ pageSummary, pageTable, pageTitle }) => {
  return (
    <Flex
      direction={"column"}
      width={"95%"}
      height={"100%"}
      px={{ base: 1, xl: 4 }}
      pb={8}
      gap={6}
      align={"center"}
    >
      <Flex
        direction={{ base: "column", sm: "row" }}
        justify={{ base: "space-around", lg: "space-between" }}
        gap={5}
        wrap={"wrap"}
        width={"100%"}
        p={2}
        align={{ base: "center" }}

      >
        {pageSummary.map((item) => (
          <Card {...item} />
        ))}
      </Flex>

      <Flex
        width={{base: '100%' , md: "90%"}}
        align={"start"}
        direction={"column"}
        p={4}
        bg={{ base: "white", _dark: "gray.900" }}
        gap={4}
        rounded={'xl'}

      >
        <Text textStyle={"md"} fontWeight={"semibold"}>
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
