import React from 'react'
import { Box, Text, Avatar, VStack, HStack,SimpleGrid } from '@chakra-ui/react';

export default function TestimonialCard() {
    const testimonials = [
        {
            text: '"As someone who regularly send money to family, this platform has been a life saver, The web app is intuitive and secure."',
            title: "Product Designer",
            avatar: "https://via.placeholder.com/150",
            name: "Bola oluwatito",
          },
          {
            text: '"Ive been using this service for my business transactions, and it has simplified everything. The fees are reasonable and transfer are instance."',
            title: "Business Owner",
            avatar: "https://via.placeholder.com/150",
            name: "Quin Darlington",
          },
          {
            text: '" The customer service are exceptional. When i had issue with a transaction, they resole it in a minute", Highly recommend',
            title: "Tech Enthusiast",
            avatar: "https://via.placeholder.com/150",
            name: "Augustina Adika",
          },
          {
            text: '"Pos-padi change the game for my business. I started with one tarminal, nw i manage three locations with steady daily earnings!.',
            title: "Business Owner",
            avatar: "https://via.placeholder.com/150",
            name: "Chris okafor",
          },
          {
            text: '"I love how easy it is to track my transaction and monitor my performance with the reports. It helps me work better".',
            title: "Agency Banker",
            avatar: "https://via.placeholder.com/150",
            name: "Rachel Murabula",
          },
          {
            text: '"Customer service is always on point anytime, Anytime i need support, they are quick to respond and resolve".',
            title: "Product Manager",
            avatar: "https://via.placeholder.com/150",
            name: "Mayowa Uche ",
          },
    ]
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
{testimonials.map((testimonial, index) => (
  <Box
    key={index}
    bg="white"
    boxShadow="md"
    borderRadius="md"
    p={4}
    maxW="400px"
    mx="auto"
  >
    <Text mb={4} color={"gray.500"}>{testimonial.text}</Text>
    <HStack align="center">
    <Avatar.Root>
             <Avatar.Fallback name={testimonial.name} />
             <Avatar.Image src={testimonial.avatar} />
           </Avatar.Root>
      <VStack align="start" spacing={0}>
        <Text fontWeight="bold">{testimonial.name}</Text>
        <Text fontSize="sm" color="gray.500">
          {testimonial.title}
        </Text>
      </VStack>
    </HStack>
  </Box>
))}
</SimpleGrid>
  )
}
