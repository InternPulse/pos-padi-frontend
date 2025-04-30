"use client";

import { Box, Flex, Heading, HStack, Image, Text } from "@chakra-ui/react";
import podImage from "../../src/assets/POD.png";
import logoImage from "../../src/assets/logo.svg";
// import AdminSignUp from "@/components/form/AdminSignUp";
// import BizInfoForm from "@/components/form/BizInfoForm";
// import Login from "@/components/form/Login";
// import Forgot from "@/components/form/Forgot";
import CompleteSignUp from "@/components/form/CompleteSignUp";



export default function HomePage() {

 

  return (
    <Box maxW="100%" p={0}>
      <Flex direction={{ base: "column", md: "row" }} minH="100vh">
        {/* Left - Image + Info */}
        <Box
          w={{ base: "100%", md: "50%" }}
          position="relative"
          bg="gray.800"
          color="white"
        >
          <Image
            src={podImage}
            alt="POS Terminal"
            objectFit="cover"
            w="100%"
            h="100%"
            position="absolute"
            opacity={0.8}
          />
          <Flex
            direction="column"
            justify="space-between"
            h="full"
            position="relative"
            p={{ base: 8, md: 12 }}
          >
            <HStack mb={4}>
              <Flex
                bg="green.400"
                p={2}
                borderRadius="md"
                alignItems="center"
                gap={2}
              >
                <Box bg="white" borderRadius="md">
                  <Image src={logoImage} alt="Logo" p={2} objectFit="cover" />
                </Box>

                <Text fontWeight="bold" textStyle="2xl">
                  POS-Padi
                </Text>
              </Flex>
            </HStack>
            <Box
              px={6}
              py={12}
              borderRadius="md"
              bg="rgba(255, 255, 255, 0.2)"
              backdropFilter="blur(10px)"
            >
              <Heading size="xl" mb={4}>
                Run Your POS Business Smarter with POS-Padi
              </Heading>
              <Text fontSize="md">
                Get full control over your operations — from managing agents and
                tracking transactions to monitoring performance in real time.
              </Text>
            </Box>
          </Flex>
        </Box>

        {/* Right - Form */}
        {/* <AdminSignUp /> */}
        {/* <BizInfoForm /> */}
        {/* <Login /> */}
        {/* <Forgot /> */}
        <CompleteSignUp />
      </Flex>
    </Box>
  );
}
