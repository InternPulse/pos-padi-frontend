import { Flex, VStack, Text } from '@chakra-ui/react'
import Logo from '../header-nav-components/Logo'

function ErrorMsg({ error }) {
    return (
      <Flex direction={'column'} justify={"center"} align={"center"} w={"100vw"} h={"100vh"}>
        <Logo isConcise={true} />
        <VStack>
          <Text fontWeight={"semibold"}>Error: {error}</Text>
          <Text textStyle={"sm"}>Consider refreshing page</Text>
        </VStack>
      </Flex>
    )
}

export default ErrorMsg