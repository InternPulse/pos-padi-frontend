import React from 'react';
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Text,
  VStack,
} from '@chakra-ui/react';

function OTPVerificationPage() {
  return (
    <Center minHeight="100vh" bg="gray.50" px={{ base: 4, md: 0 }}>
      <Container
        maxW={{ base: 'full', sm: 'md' }}
        p={{ base: 6, md: 8 }}
        bg="white"
        borderRadius="lg"
        boxShadow="lg"
      >
        <VStack spacing={6} align="stretch">
          {/* Logo at the top */}
          <Center>
            <Text
              fontSize={{ base: 'xl', md: '2xl' }}
              fontWeight="bold"
              color="green.500"
            >
              POSpadi
            </Text>
          </Center>

          {/* Email OTP verification button */}
          <Button
            bg="green.500"
            color="white"
            _hover={{ bg: 'green.600' }}
            size="lg"
            width="full"
          >
            Email OTP Verification
          </Button>

          {/* Small hello text */}
          <Text fontSize="sm" color="gray.600">
            Hello,
          </Text>

          {/* OTP instruction text */}
          <Text fontSize={{ base: 'md', md: 'lg' }}>
            Your one-time password for email verification is
          </Text>

          {/* OTP display box */}
          <Center bg="gray.100" py={3} borderRadius="md">
            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              fontWeight="bold"
              letterSpacing="wider"
            >
              1 2 3 4 5 6
            </Text>
          </Center>

          {/* Additional text lines */}
          <Text fontSize="sm" color="gray.700">
            Use this code to confirm your email and note that this code is valid for 5 mins.
          </Text>

          <Text fontSize="sm" color="gray.700">
            If you didn't create account with{' '}
            <Text as="span" color="green.500" fontWeight="medium">
              POS-padi
            </Text>{' '}
            please ignore this message.
          </Text>

          {/* Footer */}
          <Box pt={4} borderTop="1px" borderColor="gray.200">
            <Text textAlign="center" fontSize="xs" color="gray.500">
              © 2025 POS-padi All Rights Reserved
            </Text>
          </Box>
        </VStack>
      </Container>
    </Center>
  );
}



export default OTPVerificationPage;
