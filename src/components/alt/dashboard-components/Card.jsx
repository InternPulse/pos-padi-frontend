import { Flex, Box, Text, Icon, Circle } from '@chakra-ui/react'
import { LuTrendingUp, LuTrendingDown } from "react-icons/lu";


function TransactionsCardContainer({ children }) {
  return (
    <Box
      width={{ base: "95%", md: "340px", lg: "360px", xl: '340px' }}
      bg={{base: 'white', _dark: 'inherit'}}
      height={{ base: "130px", md: "145px" }}
      boxShadow={'0 0 2px lightgrey'}
      rounded={"xl"}
    >{children}</Box>
  );
}


function Card({ title, amount, icon, iconColor, iconBgColor, percent, period }) {

  const deltaIcon = (percent > 0) ? <LuTrendingUp /> : <LuTrendingDown />

  return (
    <TransactionsCardContainer>
      <Flex width={'100%'} height={'100%'} py={4} px={6} direction={'row'} align={'center'}>
        <Flex width={'80%'} height={'100%'} direction={'column'} justify={'space-around'} gap={2} align={'start'}>
          <Text textStyle={{md: 'md'}} fontWeight={'medium'} color={'gray.400'}>{title}</Text>
          <Text textStyle={'xl'} fontWeight={'semibold'}>{amount}</Text>
          <Flex gap={2}>
          <Text textStyle={'sm'} color={(percent > 0) ? 'green.400' : 'red.400'}>{deltaIcon} </Text>
          <Text textStyle={'sm'} color={(percent > 0) ? 'green.400' : 'red.400'}> {`${Math.abs(percent)}% from last ${period}` }</Text>
          </Flex>
        </Flex>
        <Circle width={'20%'} bg={iconBgColor} padding={4} alignSelf={'start'}>
          <Icon size={'xl'} color={iconColor}>{icon}</Icon>
        </Circle>
      </Flex>
    </TransactionsCardContainer>
  )
}

export default Card