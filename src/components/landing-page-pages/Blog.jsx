import React from 'react';
import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  SimpleGrid, 
  VStack,
  Image,
  Button,
  Flex
} from '@chakra-ui/react';
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight 
} from 'lucide-react';

const BlogCard = ({ title, excerpt, date, readTime, author, imageUrl }) => (
  <Box 
    borderWidth="1px" 
    borderRadius="lg" 
    overflow="hidden"
    boxShadow="sm"
    _hover={{ boxShadow: 'md' }}
  >
    <Image src={imageUrl} alt={title} h="200px" w="full" objectFit="cover" />
    <Box p={6}>
      <Flex align="center" mb={2} color="gray.500" fontSize="sm">
        <Flex align="center" mr={4}>
          <Calendar size={16} style={{ marginRight: '6px' }} />
          {date}
        </Flex>
        <Flex align="center">
          <Clock size={16} style={{ marginRight: '6px' }} />
          {readTime}
        </Flex>
      </Flex>
      <Heading size="md" mb={2}>{title}</Heading>
      <Text color="gray.600" mb={4}>{excerpt}</Text>
      <Flex justify="space-between" align="center">
        <Flex align="center" color="gray.500">
          <User size={16} style={{ marginRight: '6px' }} />
          {author}
        </Flex>
        <Button 
          rightIcon={<ArrowRight size={16} />} 
          variant="ghost" 
          colorScheme="green"
          size="sm"
        >
          Read More
        </Button>
      </Flex>
    </Box>
  </Box>
);

export const Blog = () => {
  const blogPosts = [
    {
      title: "5 Ways to Optimize Your Payment Processing",
      excerpt: "Learn how to streamline your checkout process and increase sales.",
      date: "May 15, 2023",
      readTime: "5 min read",
      author: "Sarah Johnson",
      imageUrl: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "The Future of Contactless Payments",
      excerpt: "How NFC technology is changing the retail landscape.",
      date: "April 28, 2023",
      readTime: "4 min read",
      author: "Michael Chen",
      imageUrl: "https://images.unsplash.com/photo-1604594849809-dfedbc827105?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Inventory Management Tips for Small Businesses",
      excerpt: "Keep your stock organized with these simple strategies.",
      date: "April 10, 2023",
      readTime: "6 min read",
      author: "David Wilson",
      imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
  ];

  return (
    <Box py={16} >
      <Container maxW="7xl">
        <VStack spacing={4} textAlign="center" mb={12}>
          <Text fontWeight="semibold" color="green.500">LATEST ARTICLES</Text>
          <Heading size="xl">POS-PADi Blog</Heading>
          <Text fontSize="lg" color="gray.600" maxW="2xl">
            Insights and tips to help grow your business
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} gap={5}>
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </SimpleGrid>

        <Flex justify="center" mt={12}>
          <Button 
            colorScheme="green" 
            rightIcon={<ArrowRight size={18} />}
            size="lg"
          >
            View All Articles
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};

export default Blog;