import React from 'react';
import {
  Box,
  Button,
  Center,
  Container,
  Text,
  VStack,
  useBreakpointValue,
  Link,
} from '@chakra-ui/react';

function AgentOnboardingPage() {
  const fontSizeHeading = useBreakpointValue({ base: 'xl', md: '2xl' });
  const fontSizeText = useBreakpointValue({ base: 'sm', md: 'sm' });
  const fontSizeLink = useBreakpointValue({ base: 'xs', md: 'sm' });

  return (
    <Center minHeight="100vh" bg="gray.50" px={{ base: 4, md: 0 }}>
      <Container
        maxW={{ base: 'full', sm: 'md', }}
        p={{ base: 6, md: 8 }}
        bg="white"
        borderRadius="lg"
        boxShadow="lg"
      >
        <VStack spacing={6} align="stretch">
          {/* Logo */}
          <Center>
            <Text
              fontSize={fontSizeHeading}
              fontWeight="bold"
              color="green.500"
            >
              POSpadi
            </Text>
          </Center>

          {/* Onboarding header button */}
          <Button
            bg="green.500"
            color="white"
            _hover={{ bg: 'green.600' }}
            size="lg"
            width="full"
          >
            Agent Onboarding
          </Button>

          {/* Welcome message */}
          <Text fontSize="sm" color="gray.600">
            Hello,
          </Text>

          <Text fontSize={fontSizeText}>
            Your account has been created. Use the link below to complete the onboarding process.
          </Text>

          {/* Instruction / Link Box */}
          <Box bg="gray.100" py={3} px={4} borderRadius="md" wordBreak="break-word">
            <Text
              fontSize={fontSizeLink}
              fontWeight="medium"
              color="gray.700"
              textAlign="center"
            >
              <Link
                href=""
                color="green.600"
                isExternal
              >
                padipos.com/design/franzor.../point-of-sales-mobile-App--ui--preview
              </Link>
            </Text>
          </Box>

          <Text fontSize="sm" color="gray.700">
            Or click the CTA below to complete your onboarding.
          </Text>

          {/* Complete Onboarding Button */}
          <Center>
            <Button
              mt={4}
              size="lg"
              width="auto" // Adjust the width based on content
              bg="green.500"
              color="white"
              _hover={{ bg: 'green.600' }}
            >
              Complete Onboarding
            </Button>
          </Center>


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

export default AgentOnboardingPage;
