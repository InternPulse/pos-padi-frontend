import { Flex, Box, VStack, StackSeparator, Text } from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";

function GenericTableCard({ items }) {
  const navigate = useNavigate()
  const currentPath = useLocation().pathname

  function TableCard({ item }) {
    const { item1, item2, item3, item5, item6, isHeader } = item;

    const title = `${item1} - ${item2} ${item3}`;
    const email = item5;
    const phoneNo = item6;

    return (
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

  function handleClick(isHeader, id){
    if(isHeader){return}
    if(currentPath == '/agents' || currentPath == '/customers'){
      navigate(`${currentPath}/${id}`)
    }
  }

  return (
    <VStack separator={<StackSeparator />}>
      {items?.map((item) => (
        <Box width={'100%'} onClick={()=>{handleClick(item.isHeader, item.item1)}}><TableCard item={item} /></Box>
      ))}
    </VStack>
  );
}

export default GenericTableCard;
