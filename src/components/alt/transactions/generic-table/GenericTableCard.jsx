import { Flex, HStack, VStack, StackSeparator, Text } from "@chakra-ui/react";

function GenericTableCard({ items }) {
  function TableCard({ item }) {
    const { item1, item2, item3, item5, item6, isHeader } = item;

    const title = `${item1} - ${item2} ${item3}`;
    const email = item5;
    const phoneNo = item6;

    return (
      <HStack
        height={"60px"}
        width={"100%"}
        display={{ base: "flex", md: "none" }}
      >
        <Flex direction={'column'} justify={'flex-start'} p={1} width={"100%"}>
          <Text fontWeight={"semibold"} textTransform={"capitalize"}>
            {title}
          </Text>
          <Text textStyle={"md"} width={"100%"} color={"gray.500"}>
            {email}
          </Text>
        <Text textStyle={"md"} color={"gray.500"}>
          {phoneNo}
        </Text>
        </Flex>
      </HStack>
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
