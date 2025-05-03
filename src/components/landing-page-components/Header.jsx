import React, { useState } from 'react';
import { 
  Box, 
  Flex, 
  Text, 
  IconButton, 
  Stack, 
  Link,
  HStack,
  Button
} from '@chakra-ui/react';
import { Menu } from 'lucide-react';
import { Drawer, CloseButton, Portal } from '@chakra-ui/react';

const Header = () => {
  const [activeLink, setActiveLink] = useState('Home');

  const navItems = [
    { name: 'Home', path: '/home' },
    { name: 'Solution', path: '/solution' },
    { name: 'Product', path: '/product' },
    { name: 'Blog', path: '/blog' },
    { name: 'About Us', path: '/about' },
  ];

  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      zIndex="sticky"
      w="full"
      _dark={{
        bg:'black',
      }}
      _light={{
        bg:'white',
      }}
      borderBottom="1px"
      borderColor="gray.200"
    >
      <Flex
        maxW="7xl"
        mx="auto"
        px={{ base: 4, sm: 6 }}
        h="16"
        justify="space-between"
        align="center"
      >
        {/* Logo - Reduced size */}
        <Flex shrink="0">
          <Link href="/" display="flex" alignItems="center">
            <Flex
              h="8"
              w="8"
              bg="green.500"
              borderRadius="md"
              align="center"
              justify="center"
            >
              <Text color="white" fontWeight="bold" fontSize="sm">
                P
              </Text>
            </Flex>
            <Text ml="2" color="green.500" fontWeight="bold" fontSize="xl">
              POS-Padi
            </Text>
          </Link>
        </Flex>

        {/* Desktop Navigation */}
        <Flex
          display={{ base: 'none', md: 'flex' }}
          align="center"
          justify="center"
          flex="1"
          mx="8"
        >
          <HStack as="nav" spacing="8">
            {navItems.map((item) => (
              <Link
              key={item.name}
              href={item.path}
              onClick={() => setActiveLink(item.name)}
              fontSize="md"
              p={1}
              color={activeLink === item.name ? 'green.500' : 'gray.500'}
              fontWeight={activeLink === item.name ? 'semibold' : 'medium'}
              _hover={{ color: 'green.500', bg: 'gray.50' }} // Hover effect
              _active={{ color: 'green.600' }} // When clicked
            
              >
                {item.name}
              </Link>
            ))}
          </HStack>
        </Flex>

        {/* Desktop Auth Buttons */}
        <HStack display={{ base: 'none', md: 'flex' }} spacing="2">
          <Link
            href="/login"
            px="4"
            py="2"
            fontSize="md"
            fontWeight="medium"
            color="gray.600"
            _hover={{ color: 'green.500' }}
          >
            Log In
          </Link>
          <Link
            href="/signup"
            px="4"
            py="2"
            bg="green.500"
            color="white"
            fontSize="sm"
            fontWeight="medium"
            borderRadius="md"
            _hover={{ bg: 'green.600' }}
          >
            Sign Up
          </Link>
        </HStack>

        {/* Mobile menu button */}
        <Box display={{ md: 'none' }}>
          <Drawer.Root>
            <Drawer.Trigger asChild>
              <Menu aria-label="Toggle menu"
                icon={<Menu size={24} />}
                variant="ghost"  
                _dark={{
                    color:"gray.200"
                }}
                 // This will apply to the icon
                _hover={{ color: 'green.500', bg: 'gray.100' }} />
            </Drawer.Trigger>
            <Portal>
              <Drawer.Backdrop />
              <Drawer.Positioner>
                <Drawer.Content>
                  <Drawer.Header>
                    <Drawer.Title>Menu</Drawer.Title>
                    <Drawer.CloseTrigger asChild>
                      <CloseButton size="sm" />
                    </Drawer.CloseTrigger>
                  </Drawer.Header>
                  <Drawer.Body>
                    <Stack spacing="5">
                      {navItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.path}
                          onClick={() => {
                            setActiveLink(item.name);
                          }}
                          display="block"
                          px="4"
                          py="3"
                          margin={2}
                          borderRadius="md"
                          fontSize="lg"
                          color={activeLink === item.name ? 'green.500' : 'gray.300'}
                          fontWeight={activeLink === item.name ? 'semibold' : 'medium'}
                          _hover={{ color: 'green.500', bg: 'gray.50' }}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </Stack>
                  </Drawer.Body>
                  <Drawer.Footer>
                    <Stack w="full" spacing="2">
                      <Button
                        as="a"
                        href="/login"
                        variant="outline"
                        w="full"
                      >
                        Log In
                      </Button>
                      <Button
                        as="a"
                        href="/admin-signup"
                        bg="green.500"
                        color="white"
                        _hover={{ bg: 'green.600' }}
                        w="full"
                      >
                        Sign Up
                      </Button>
                    </Stack>
                  </Drawer.Footer>
                </Drawer.Content>
              </Drawer.Positioner>
            </Portal>
          </Drawer.Root>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;