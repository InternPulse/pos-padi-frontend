import React from 'react';
import {
  Box,
  Flex,
  Text,
  Button,
  VStack,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';
import { Check } from 'lucide-react';

export default function SuccessfulTransactionScreen() {
  const bg = useColorModeValue('gray.100', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'whiteAlpha.900');
  const subTextColor = useColorModeValue('gray.500', 'gray.400');

  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bg={bg}
      px={{ base: 4, sm: 6, md: 8 }}
      py={{ base: 8, md: 12 }}
    >
      <Box
        w="full"
        maxW={{ base: 'xs', sm: 'md', md: 'lg' }}
        bg={cardBg}
        borderRadius="3xl"
        p={{ base: 6, md: 10 }}
        boxShadow="xl"
        textAlign="center"
      >
        {/* Animated Circles and Check Icon */}
        <Flex justify="center" mb={8} mt={4} position="relative">
          <Box
            position="absolute"
            w={{ base: '6rem', sm: '8rem', md: '10rem' }}
            h={{ base: '6rem', sm: '8rem', md: '10rem' }}
            bg="green.100"
            borderRadius="full"
          />
          <Box
            position="absolute"
            w={{ base: '5rem', sm: '7rem', md: '8rem' }}
            h={{ base: '5rem', sm: '7rem', md: '8rem' }}
            bg="green.200"
            borderRadius="full"
          />
          <Flex
            align="center"
            justify="center"
            w={{ base: '4rem', sm: '5rem', md: '6rem' }}
            h={{ base: '4rem', sm: '5rem', md: '6rem' }}
            bg="green.500"
            borderRadius="full"
            zIndex={1}
          >
            <Check color="white" size={28} strokeWidth={3} />
          </Flex>
        </Flex>

        {/* Text Content */}
        <VStack spacing={3} mb={{ base: 8, md: 10 }}>
          <Heading
            size={{ base: 'md', sm: 'lg' }}
            color={textColor}
          >
            Successful
          </Heading>
          <Text fontSize={{ base: 'md', sm: 'lg' }} color={subTextColor}>
            You have added a new transaction
          </Text>
        </VStack>

        {/* OK Button */}
        <Button
          colorScheme="green"
          size="lg"
          width="full"
          borderRadius="xl"
          fontSize={{ base: 'md', sm: 'lg' }}
        >
          OK
        </Button>
      </Box>
    </Flex>
  );
}
