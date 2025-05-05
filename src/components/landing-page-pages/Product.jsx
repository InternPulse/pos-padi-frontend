import React from 'react';
import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  Flex,
  SimpleGrid, 
  VStack,
  Stack,
  Button,
  Badge
} from '@chakra-ui/react';
import { 
  CheckCircle, 
  CreditCard, 
  Smartphone, 
  PieChart,
  Cloud
} from 'lucide-react';

const ProductCard = ({ title, price, features, popular }) => (
  <Box 
    borderWidth="1px" 
    borderRadius="lg" 
    p={8}
    position="relative"
    bg="white"
    boxShadow="sm"
  >
    {popular && (
      <Badge 
        colorScheme="green" 
        position="absolute" 
        top={-3} 
        right={4}
        px={2}
        py={1}
        borderRadius="full"
      >
        Most Popular
      </Badge>
    )}
    <VStack spacing={4} align="flex-start">
      <Heading size="lg">{title}</Heading>
      <Box>
        <Text fontSize="3xl" fontWeight="bold">
          {price}
        </Text>
        <Text color="gray.500">per month</Text>
      </Box>
      
      <VStack spacing={2} align="flex-start">
        {features.slice(0, -1).map((feature, index) => (
          <Flex key={index} align="center">
            <Box as={CheckCircle} color="green.500" mr={2} />
            <Text>{feature}</Text>
          </Flex>
        ))}
      </VStack>
      
      <Button 
        colorScheme={popular ? "green" : "gray"} 
        size="lg" 
        w="full"
        mt={4}
      >
        Get Started
      </Button>
    </VStack>
  </Box>
);

export const Product = () => {
  const products = [
    {
      title: "Starter",
      price: "$29",
      features: [
        "Basic payment processing",
        "Mobile POS app"
      ],
      icon: Smartphone
    },
    {
      title: "Professional",
      price: "$79",
      features: [
        "All Starter features",
        "Advanced analytics",
        "Inventory management"
      ],
      popular: true,
      icon: PieChart
    },
    {
      title: "Enterprise",
      price: "Custom",
      features: [
        "All Professional features",
        "Dedicated account manager"
      ],
      icon: Cloud
    }
  ];

  const features = [
    {
      icon: CreditCard,
      title: "Omnichannel Payments",
      description: "Accept all payment types anywhere"
    }
  ];

  return (
    <Box py={16} >
      <Container maxW="7xl">
        <VStack spacing={4} textAlign="center" mb={16}>
          <Text fontWeight="semibold" color="green.500">OUR PRODUCTS</Text>
          <Heading size="2xl">POS-PADi Solutions</Heading>
          <Text fontSize="xl" color={{base:"gray.600", _dark:"gray.400"}} maxW="2xl">
            Simple pricing for businesses of all sizes
          </Text>
        </VStack>

        
      </Container>
    </Box>
  );
};

export default Product;