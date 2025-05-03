import { IoMdStarOutline } from "react-icons/io";
import {
  Box,
  Text,
  Avatar,
  VStack,
  HStack,
  SimpleGrid,
  Badge,
  Flex,
  Heading,
} from "@chakra-ui/react";

export default function TestimonialCard() {
  const testimonials = [
    {
      text: '"As someone who regularly send money to family, this platform has been a life saver, The web app is intuitive and secure."',
      title: "Product Designer",
      avatar: "https://i.pravatar.cc/150?u=bo",
      name: "Bola oluwatito",
    },
    {
      text: '"I\'ve been using this service for my business transactions, and it has simplified everything. The fees are reasonable and transfer are instance."',
      title: "Business Owner",
      avatar: "https://i.pravatar.cc/150?u=qd",
      name: "Quin Darlington",
    },
    {
      text: '"The customer service are exceptional. When I had issue with a transaction, they resole it in a minute", Highly recommend',
      title: "Tech Enthusiast",
      avatar: "https://i.pravatar.cc/150?u=aa",
      name: "Augustina Adika",
    },
    {
      text: '"Pos-padi change the game for my business. I started with one tarminal, nw i manage three locations with steady daily earnings!.',
      title: "Business Owner",
      avatar: "https://i.pravatar.cc/150?u=co",
      name: "Chris okafor",
    },
    {
      text: '"I love how easy it is to track my transaction and monitor my performance with the reports. It helps me work better".',
      title: "Agency Banker",
      avatar: "https://i.pravatar.cc/150?u=rm",
      name: "Rachel Murabula",
    },
    {
      text: '"Customer service is always on point anytime, Anytime i need support, they are quick to respond and resolve".',
      title: "Product Manager",
      avatar: "https://i.pravatar.cc/150?u=mu",
      name: "Mayowa Uche ",
    },
  ];

  return (
    <Box bg={{ base: "gray.50", _dark: "gray.900" }} width="full">
      <VStack
        maxW="7xl"
        mx="auto"
        px={{ base: 4, md: 8 }}
        py={{ base: 10, md: 20 }}
        align={"center"}
        gap={4}
      >
        <Box
          p={2}
          bg={{ base: "green.50", _dark: "green.900" }}
          borderRadius={20}
          border="1px solid"
          borderColor={{ base: "green.200", _dark: "green.700" }}
        >
          <Flex alignItems="center" gap={2}>
            <IoMdStarOutline color="currentColor" size={20} />
            <Text
              color={{ base: "green.500", _dark: "green.300" }}
              fontWeight="medium"
            >
              Testimonials
            </Text>
          </Flex>
        </Box>

        <Heading
          as="h1"
          fontSize="3xl"
          mb={3}
          color={{ base: "gray.800", _dark: "gray.100" }}
        >
          Direct Stories From POS-Padi Users
        </Heading>

        <Text
          color={{ base: "gray.600", _dark: "gray.400" }}
          textAlign="center"
          maxW="2xl"
          mb={8}
        >
          Don't just take our word for it. Here's what people who use our
          services have to say.
        </Text>

        <Box
          width="100%"
          overflowX={{ base: "auto", md: "visible" }}
          pb={{ base: 4, md: 0 }}
        >
          <SimpleGrid
            columns={{ base: 6, md: 2, lg: 3 }}
            gap={6}
            width={{ base: "max-content", md: "100%" }}
            px={{ base: 4, md: 0 }}
          >
            {testimonials.map((testimonial, index) => (
              <Box
                key={index}
                bg={{ base: "white", _dark: "gray.800" }}
                p={6}
                borderRadius="lg"
                boxShadow="sm"
                width={{ base: "300px", md: "auto" }}
                transition="all 0.3s ease"
                _hover={{
                  transform: "translateY(-5px)",
                  boxShadow: "lg",
                  borderColor: { base: "green.200", _dark: "green.700" },
                  border: "1px solid",
                }}
              >
                <Text
                  color={{ base: "gray.600", _dark: "gray.300" }}
                  mb={4}
                  fontSize="md"
                >
                  {testimonial.text}
                </Text>
                <HStack spacing={4}>
                  <Avatar.Root>
                    <Avatar.Fallback name={testimonial.name} />
                    <Avatar.Image src={testimonial.avatar} />
                  </Avatar.Root>
                  <VStack align="start" spacing={0}>
                    <Text
                      fontWeight="bold"
                      color={{ base: "gray.800", _dark: "gray.100" }}
                    >
                      {testimonial.name}
                    </Text>
                    <Text
                      fontSize="sm"
                      color={{ base: "gray.500", _dark: "gray.400" }}
                    >
                      {testimonial.title}
                    </Text>
                  </VStack>
                </HStack>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </VStack>
    </Box>
  );
}
