import React from 'react'
import { 
  Box, 
  Container, 
  SimpleGrid, 
  Heading, 
  Text, 
  VStack
} from '@chakra-ui/react'
import { 
  Zap, 
  ShieldCheck, 
  Smartphone, 
  BarChart2, 
  CreditCard,
  Clock,
  Package,
  UserCog
} from 'lucide-react'

const SolutionCard = ({ icon: Icon, title, description }) => (
  <VStack 
    p={6} 
    spacing={4} 
    align="flex-start" 
    bg={{base:"gray.100", _dark:"gray.900"}}
    borderRadius="lg"
    height="100%"
    border="1px solid"
    borderColor="gray.200"
  >
    <Box color="green.500">
      <Icon size={32} />
    </Box>
    <Heading size="md">{title}</Heading>
    <Text color={{base:"gray.600", _dark:"gray.400"}}>{description}</Text>
  </VStack>
)

export const Solution = () => {
  return (
    <Box py={20} >
      <Container maxW="7xl">
        <VStack spacing={4} textAlign="center" mb={16}>
          <Text fontWeight="bold" color="green.500">OUR SOLUTIONS</Text>
          <Heading size="2xl" mb={4}>
            Powering Your Business Growth
          </Heading>
          <Text fontSize="xl" maxW="2xl" color="gray.600">
            Everything you need to streamline payments and boost sales
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} gap={5}>
          <SolutionCard
            icon={Zap}
            title="Instant Payments"
            description="Process transactions in under 2 seconds with our optimized system"
          />
          <SolutionCard
            icon={ShieldCheck}
            title="Fraud Protection"
            description="Advanced security measures to protect your business"
          />
          <SolutionCard
            icon={Smartphone}
            title="Mobile POS"
            description="Turn any device into a payment terminal"
          />
          <SolutionCard
            icon={BarChart2}
            title="Sales Analytics"
            description="Real-time insights to grow your business"
          />
          <SolutionCard
            icon={Package}
            title="Inventory Management"
            description="Automated stock tracking and alerts"
          />
          <SolutionCard
            icon={UserCog}
            title="Customer Management"
            description="Build loyalty with customer profiles"
          />
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default Solution