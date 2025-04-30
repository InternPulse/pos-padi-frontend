import { Box, Button, Flex, HStack, Image, Link } from "@chakra-ui/react";
import React from "react";

import logo from "@/assets/logo-lg.png";

const Navbar = () => {
  return (
    <Box
      as="nav"
      position="fixed"
      top="0"
      left="0"
      width="100%"
      bg="white"
      boxShadow="sm"
      zIndex="1000"
      px={{ base: 8, md: 20 }}
      py={{ base: 4, md: 8 }}
    >
      <Flex maxW={"1440px"} mx="auto" justifyContent="space-between">
        {/* Logo */}
        <Image src={logo} alt="Logo" w={100} />

        {/* Desktop Navigation Links */}
        <HStack
          as="ul"
          listStyleType="none"
          spacing={8}
          display={{ base: "none", md: "flex" }}
        >
          <Link href="#home" fontWeight="medium">
            Home
          </Link>
          <Link href="#about" fontWeight="medium">
            About
          </Link>
          <Link href="#services" fontWeight="medium">
            Services
          </Link>
          <Link href="#contact" fontWeight="medium">
            Contact
          </Link>
        </HStack>

        {/* Desktop Buttons */}
        <HStack spacing={4} display={{ base: "none", md: "flex" }}>
          <Button variant="outline" colorScheme="blue">
            Log In
          </Button>
          <Button colorScheme="blue">Sign Up</Button>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
