import {
    Box,
    Flex,
    Spacer,
    Button,
    HStack,
    Link,
    Text,
    IconButton,
    VStack,
    Collapse,
    useDisclosure,
  } from '@chakra-ui/react';
  import { FiMenu, FiX } from 'react-icons/fi'; // Import icons from react-icons
  
  function Navbar() {
    const { isOpen, onToggle } = useDisclosure();
  
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
        px={4}
        py={2}
      >
        <Flex align="center" maxW="1280px" mx="auto">
          {/* Logo */}
          <Text fontSize="xl" fontWeight="bold">
            Logo
          </Text>
  
          <Spacer />
  
          {/* Desktop Navigation Links */}
          <HStack
            as="ul"
            listStyleType="none"
            spacing={8}
            display={{ base: 'none', md: 'flex' }}
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
          <HStack spacing={4} display={{ base: 'none', md: 'flex' }}>
            <Button variant="outline" colorScheme="blue">
              Log In
            </Button>
            <Button colorScheme="blue">Sign Up</Button>
          </HStack>
  
          {/* Hamburger Menu for Mobile */}
          <IconButton
            aria-label="Open Menu"
            icon={isOpen ? <FiX /> : <FiMenu />} // Use react-icons for menu icons
            display={{ base: 'flex', md: 'none' }}
            onClick={onToggle}
          />
        </Flex>
  
        {/* Mobile Menu */}
        <Collapse in={isOpen} animateOpacity>
          <VStack
            as="ul"
            listStyleType="none"
            spacing={4}
            bg="white"
            py={4}
            display={{ md: 'none' }}
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
            <Button variant="outline" colorScheme="blue" width="100%">
              Log In
            </Button>
            <Button colorScheme="blue" width="100%">
              Sign Up
            </Button>
          </VStack>
        </Collapse>
      </Box>
    );
  }
  
  export default Navbar;