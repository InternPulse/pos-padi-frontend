import { IoMdStarOutline } from "react-icons/io";
import {
  Box,
  Text,
  Avatar,
  VStack,
  HStack,
  SimpleGrid,
  Badge,
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
    <Box bg="gray.100" w="full">
    <VStack
      p={4}
      // bg={{ base: "gray.100", _dark: "black" }}
      align={"center"}
      gap={4}
    >
      <Badge
        colorPalette={"green"}
        p={2}
        fontWeight={"semibold"}
        rounded={"xl"}
      >
        <IoMdStarOutline />
        Testimonials
      </Badge>

      <HStack
        gap={1}
        fontWeight={"semibold"}
        textStyle={"2xl"}
        justify={"center"}
      >
        <Text textAlign={"center"}>
          Direct Stories From POS-Padi{" "}
          <span style={{ color: "#02B14F" }}>Users</span>{" "}
        </Text>
      </HStack>
      <Text
        fontStyle={"italic"}
        textStyle={"xs"}
        color={{ base: "gray.500", _dark: "gray.300" }}
        textAlign={"center"}
      >
        Don't just take our word for it. Here's what people who use our services
        have to say.
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4} p={4}>
        {testimonials.map((testimonial, index) => (
          <Box
            key={index}
            bg="white"
            boxShadow={"0 0 3px lightgrey"}
            borderRadius="md"
            pt={6}
            pb={4}
            px={4}
            maxW="400px"
            mx="auto"
            bgColor={{ base: "white", _dark: "gray.800" }}
          >
            <Text mb={4} color={{ base: "gray.500", _dark: "gray.300" }}>
              {testimonial.text}
            </Text>
            <HStack align="center" gap={4}>
              <Avatar.Root>
                <Avatar.Fallback name={testimonial.name} />
                <Avatar.Image src={testimonial.avatar} />
              </Avatar.Root>
              <VStack align="start" spacing={0}>
                <Text fontWeight="bold">{testimonial.name}</Text>
                <Text
                  fontSize="sm"
                  color={{ base: "gray.500", _dark: "gray.300" }}
                >
                  {testimonial.title}
                </Text>
              </VStack>
            </HStack>
          </Box>
        ))}
      </SimpleGrid>
    </VStack>
    </Box>
  );
}
