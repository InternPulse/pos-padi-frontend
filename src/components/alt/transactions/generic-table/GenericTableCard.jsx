import { Flex, HStack, VStack, StackSeparator, Text } from "@chakra-ui/react";

function GenericTableCard({ items }) {
  function TableCard({ item }) {
    const { item1, item2, item3, item5, item6, isHeader } = item;

    const title = `${item1} - ${item2} ${item3}`;
    const email = item5;
    const phoneNo = item6;

    return (
      // <HStack
      //   height={"60px"}
      //   width={"100%"}
      //   display={{ base: "flex", md: "none" }}

      // >
      //   <Flex my={2} direction={'column'} justify={'flex-start'} p={1} width={"100%"}>
      //     <Text fontWeight={"semibold"} textTransform={"capitalize"}>
      //       {title}
      //     </Text>
      //     <Text textStyle={"md"} width={"100%"} color={"gray.500"}>
      //       {email}
      //     </Text>
      //   <Text textStyle={"md"} color={"gray.500"}>
      //     {phoneNo}
      //   </Text>
      //   </Flex>
      // </HStack>

      <Flex padding={2} gap={2} align={'start'} w={'100%'} direction={"column"}>
        <Text fontWeight={"semibold"} textTransform={"capitalize"}>
          {title}
        </Text>
        <Text textStyle={"md"} width={"100%"} color={{base: "gray.500", _dark: 'gray.300'}}>
          {email}
        </Text>
        <Text textStyle={"md"} width={"100%"} color={{base: "gray.500", _dark: 'gray.300'}}>
          {phoneNo}
        </Text>
      </Flex>
    );
  }

  return (
    <VStack separator={<StackSeparator />}>
      {items.map((item) => (
        <TableCard item={item} />
      ))}
    </VStack>
  );
}

export default GenericTableCard;
