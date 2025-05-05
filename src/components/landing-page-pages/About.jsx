import React from 'react';
import { 
  Box, 
  Flex, 
  Heading, 
  Text, 
  Grid, 
  VStack,
  Image,
  Stack,
  Container,
  Button
} from '@chakra-ui/react';
import { 
  Zap, 
  Shield, 
  Smartphone, 
  BarChart2, 
  Cloud, 
  ShoppingBag,
  CreditCard,
  Utensils,
  Building,
  Headphones,
  Cpu,
  Users,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FeatureCard = ({ icon, title, description }) => {
  const Icon = icon;
  return (
    <Stack 
      direction={{ base: 'column', md: 'row' }}
      spacing={4}
      p={6}
      bg={{base:"gray.50",_dark:"gray.900"}}
      borderRadius="lg"
      align="flex-start"
    >
      <Box color="green.500" pt={1}>
        <Icon size={24} />
      </Box>
      <Box>
        <Heading size="md" mb={2}>{title}</Heading>
        <Text color={{base:"gray.600", _dark: "gray.300"}}>{description}</Text>
      </Box>
    </Stack>
  );
};

const StatItem = ({ value, label }) => (
  <VStack>
    <Heading size="xl" color="green.500">{value}</Heading>
    <Text fontSize="sm"color={{base:"gray.600", _dark:"gray.400"}}>{label}</Text>
  </VStack>
);

export const About = () => {
  const navigate = useNavigate();
  return (
    <Box py={{ base: 10, md: 20 }}>
      <Container maxW="7xl">
        {/* Hero Section */}
        <VStack spacing={6} textAlign="center" mb={16}>
          <Text fontWeight="semibold" color="green.600">ABOUT POS-PADi</Text>
          <Heading size="2xl" lineHeight="1.2">
            Revolutionizing Business Payments
          </Heading>
          <Text fontSize="xl" maxW="2xl" color={{base:"gray.600", _dark:"gray.400"}}>
            Empowering merchants with fast, secure, and intelligent point-of-sale solutions that simplify transactions and drive growth.
          </Text>
        </VStack>

        {/* Mission Section */}
        <Flex 
          direction={{ base: 'column', lg: 'row' }} 
          gap={10} 
          mb={20}
          align="center"
        >
          <Box flex={1}>
            <Heading size="xl" mb={6}>
              Our <Box as="span" color="green.600">Mission</Box>
            </Heading>
          <Text fontSize="lg" mb={6} color={{base:"gray.600", _dark:"gray.400"}}>
              At POS-PADi, we're transforming how businesses handle payments. From small shops to large enterprises, we provide the tools you need to succeed in today's digital economy.
            </Text>
            <Stack spacing={4}>
              {[
                "Fast, secure payment processing",
                "Intuitive business management tools",
                "Seamless omnichannel experiences",
                "Enterprise-grade reliability"
              ].map((item) => (
                <Flex key={item} align="center">
                  <CheckCircle size={18} color="#38A169" />
                  <Text ml={2}>{item}</Text>
                </Flex>
              ))}
            </Stack>
          </Box>
          <Box flex={1} bg="gray.100" h="max-content" borderRadius="xl">
            {/* Placeholder for image or illustration */}
            <Image
            src='https://media.licdn.com/dms/image/v2/D4D22AQG7CWuy2BsthQ/feedshare-shrink_2048_1536/B4DZaIa3H_GgAo-/0/1746045469668?e=1749081600&v=beta&t=F6TwGlC7vGELfFYdDohIqyxKNRUjajxH48Yj-OzTPmU'
            />
          </Box>
        </Flex>

        {/* Future of Payments */}
        <Box mb={20}>
          <VStack spacing={2} mb={10} textAlign="center">
            <Text fontWeight="semibold" color="green.600">THE FUTURE OF PAYMENTS</Text>
            <Heading size="xl">Built for Today's Businesses</Heading>
          </VStack>
          
          <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={6}>
            <FeatureCard 
              icon={Zap} 
              title="Seamless Transactions" 
              description="Contactless, mobile, and in-person payments in one unified system."
            />
            <FeatureCard 
              icon={BarChart2} 
              title="Smart Business Tools" 
              description="Real-time analytics, inventory management, and customer insights."
            />
            <FeatureCard 
              icon={Cloud} 
              title="Cloud Reliability" 
              description="99.9% uptime with enterprise-grade security and fraud protection."
            />
          </Grid>
        </Box>

        {/* Who We Serve */}
        <Box mb={20}>
          <VStack spacing={2} mb={10} textAlign="center">
            <Text fontWeight="semibold" color="green.600">OUR CUSTOMERS</Text>
            <Heading size="xl">Who We Serve</Heading>
          </VStack>
          
          <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }} gap={6}>
            <FeatureCard 
              icon={ShoppingBag} 
              title="Retailers" 
              description="Streamline checkout and reduce customer wait times."
            />
            <FeatureCard 
              icon={CreditCard} 
              title="E-commerce" 
              description="Integrate online and in-store sales effortlessly."
            />
            <FeatureCard 
              icon={Utensils} 
              title="Restaurants" 
              description="Tableside ordering, split bills, and tip management."
            />
            <FeatureCard 
              icon={Building} 
              title="Enterprise" 
              description="Scalable solutions with centralized control."
            />
          </Grid>
        </Box>

        {/* Stats */}
        <Flex 
          justify="space-around" 
          direction={{ base: 'column', sm: 'row' }} 
          gap={6} 
          mb={20}
          textAlign="center"
        >
          <StatItem value="99.9%" label="Uptime" />
          <StatItem value="24/7" label="Support" />
          <StatItem value="1000+" label="Businesses" />
          <StatItem value="1M+" label="Transactions" />
        </Flex>

        {/* CTA */}
        <Box 
          bg={{base:"green.50",_dark:"gray.900"}}
          borderRadius="xl"
          p={10}
          textAlign="center"
        >
          <Heading size="xl" mb={4}>Ready to Transform Your Business?</Heading>
          <Text fontSize="xl" mb={8} maxW="2xl" mx="auto" color={{base:"gray.600", _dark:"gray.400"}}>
            Join thousands of businesses trusting POS-PADi for their payment solutions.
          </Text>
          <Button 
           onClick={() => navigate('/admin-signup')}
            colorScheme="green" 
            size="lg" 
          >
            Get Started Today
            <ArrowRight size={15} />
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default About;