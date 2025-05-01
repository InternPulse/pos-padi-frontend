import { Box,HStack,Text, Flex,Button,VStack} from '@chakra-ui/react'
import { FaRegThumbsUp } from "react-icons/fa6";
import { FaArrowRight } from 'react-icons/fa';
import { MdOutlineShield } from "react-icons/md";
import { IoPeopleOutline } from "react-icons/io5";
import { IoStatsChartOutline } from "react-icons/io5";

export default function WhyChooseUs() {
  const cards = [
    {
      icon: < MdOutlineShield size="24px" color="#02B14F" />,
      title: 'Secure Transaction',
      body: 'Bank-Level encryption and security protocol to keep your money safe. Transact and be happy.',
    },
    {
      icon: <IoPeopleOutline size="24px" color="#02B14F" />,
      title: 'Customer Service',
      body: 'Dedicated support team to assist you with any questions and issue.',
    },
    {
      icon: <IoStatsChartOutline size="24px" color="#02B14F" />,
      title: 'Comprehensive Reporting',
      body: 'Get the insight you need with detailed reports designed to guide better business decision.',
    },
  ];
  return (
    <Box>
     <Flex
      justify={{ base: 'center', lg: 'flex-start' }}
      align="center"
      p={4}
    >
      <Box
        bg="gray.100"
        borderRadius="4xl"
        boxShadow="sm"
        p={4}
        w={{ base: '90%', lg: 'auto' }}
      >
        <HStack spacing={4} justify="center">
          <FaRegThumbsUp size="24px" color="#02B14F" />
          <Text fontSize="lg" fontWeight="bold" color="#02B14F">
            Why Choose Pos-Padi
          </Text>
        </HStack>
      </Box>
    </Flex>

      <Box p={6}>
        <Flex
          direction={{base:'column',lg:'row'}}
          justify="space-between" // Space between the two boxes on large screens
          gap={10} // Add spacing between the two boxes
        >
          {/* First Box: Heading, Subheading, and Button */}
          <Box >
            <Text
              fontSize={{ base: '2xl', lg: '4xl' }}
              fontWeight="bold"
              mb={4}
              textAlign={{ base: 'center', lg: 'left' }}
            >
              Your NO 1 Web App To Boost Business Goals
            </Text>
            <Text
              fontSize="sm"
              color="gray.600"
              maxW="600px"
              mx={{ base: 'auto', lg: '0' }}
              textAlign={{ base: 'center', lg: 'left' }}
              mb={6}
            >
              POS-Padi isn’t just another POS, it’s your reliable partner with top-notch uptime, fast settlement, support, and competitive commissions.
            </Text>
            <Button
              bg="#02B14F"
              color="white"
              p={4}
              borderRadius={"4xl"}
              textAlign={"left"}
            >
              Learn More
              <FaArrowRight/>
            </Button>
          </Box>
           {/* Second Box: Statistics */}
          <Box textAlign={{ base: 'center', lg: 'left' }}>
            <VStack spacing={2}>
              <Text fontSize="4xl" fontWeight="bold" >
                10.5k
              </Text>
              <Text fontSize="sm" color="gray.600">
                Users have been <br/> enjoying POS-Padi
              </Text>
            </VStack>
          </Box>
        </Flex>
      </Box>
      <Box p={6}>
        <Flex
          direction={{base:'column', lg:'row'}}
          justify="space-between" // Space between cards on large screens
         align="center"
          gap={6} // Spacing between cards
        >
           {cards.map((card, index) => (
          <Box
            key={index}
            bg="white"
            boxShadow="md"
            borderRadius="md"
            p={6}
            w={{ base: '100%', lg: '30%' }} // Full width on mobile, 30% width on large screen
            minH="200px"
          >
            <VStack align="start" spacing={4}>
              {/* Icon with background */}
              <Box
                bg="gray.100" // Light ash background
                p={3}
                borderRadius="full"
                display="inline-flex"
                mb={4} // Margin below the icon
              >
                {card.icon}
              </Box>
              {/* Title */}
              <Text fontSize="lg" fontWeight="bold">
                {card.title}
              </Text>
              {/* Body */}
              <Text fontSize="sm" color="gray.600">
                {card.body}
              </Text>
            </VStack>
          </Box>
        ))}
        </Flex>
      </Box>
    </Box>
  )
}