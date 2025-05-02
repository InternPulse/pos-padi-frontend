import React from 'react'
import { Box, Flex, Heading, Text, Button, Image, Stack } from '@chakra-ui/react'
import mobile from '../../assets/mobile.png'

import {Zap} from "lucide-react"

const Banner = () => {
  return (
    <Box 
      _light={{
        bgGradient: "to-b",
        gradientFrom: "#02B14F",
        gradientTo: "green.200"
      }}
      w="100%" 
      
      px={4}
      borderRadius=""
    >
      <Flex 
        direction={{ base: 'column', md: 'row' }} 
        align="center" 
        justify="space-between"
        maxW="1200px"
        mx="auto"
        gap={6}
      >
        <Stack 
        ml={7}
          spacing={4} 
          maxW={{ base: "100%", md: "50%" }}
          textAlign={{ base: "center", md: "left" }} 
          alignItems={{ base: "center", md: "flex-start" }}
        >
          <Box>
            <Button 
            mt={5}
            mb={10}
              bg="white" 
              color="green.500" 
              rounded="full" 
              px={3} 
              _hover={{ bg: "gray.100" }}
              size={{ base: "md", md: "8px" }}
            >
              <Box as="span" fontSize="xl">
               <Zap color="#02B14F" size={20} />
              </Box>
              Call to Action
            </Button>
          </Box>
          <Heading 
            as="h1" 
            fontSize={{ base: "2xl", md: "2xl", lg: "" }} 
            color="white" 
          >
            Transaction Monitoring On The Go
          </Heading>
          
          <Text 
            color="white" 
            fontSize={{ base: "md", md: "0.8rem" }}
            maxW={{ base: "100%", md: "90%" }}
          >
            With our mobile responsive platform, you can monitor transactions anywhere and anytime, regardless of the screen size
          </Text>
          
        </Stack>
        
        <Box 
          display="flex" 
          justifyContent="center" 
          w={{ base: "100%", md: "40%" }} 
          mt={{ base: 4, md: 0 }}
        >
          <Image
            src={mobile}
            maxH="280px"
            objectFit="fit"
            alt="Mobile app dashboard"
          />
        </Box>
      </Flex>
    </Box>
  )
}

export default Banner