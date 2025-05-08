import React from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Link,
  HStack,
  Button,
} from "@chakra-ui/react";
import { Menu } from "lucide-react";
import { Drawer, CloseButton, Portal } from "@chakra-ui/react";
import Logo from "../header-nav-components/Logo";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/home" },
    { name: "Solution", path: "/solution" },
    { name: "Product", path: "/product" },
    { name: "Blog", path: "/blog" },
    { name: "About Us", path: "/about" },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      zIndex="sticky"
      w="full"
      bg={{ base: "white", _dark: "gray.900" }}
      borderBottom="1px"
      borderColor={{ base: "gray.200", _dark: "gray.700" }}
    >
      <Flex
        maxW="7xl"
        mx="auto"
        px={{ base: 4, sm: 4 }}
        h="16"
        justify="space-between"
        align="center"
      >
        {/* Logo */}
        <Flex shrink="0" width={"170px"}>
          <Link href="/" display="flex" alignItems="center">
            <Logo />
          </Link>
        </Flex>

        {/* Desktop Navigation */}
        <Flex
          display={{ base: "none", md: "flex" }}
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
                fontSize={{ base: "md", md: "sm", lg: "md" }}
                p={1}
                color={
                  isActive(item.path)
                    ? { base: "green.500", _dark: "green.300" }
                    : { base: "gray.600", _dark: "gray.400" }
                }
                fontWeight={isActive(item.path) ? "semibold" : "medium"}
                _hover={{
                  color: { base: "green.500", _dark: "green.300" },
                  bg: { base: "gray.50", _dark: "gray.800" },
                }}
              >
                {item.name}
              </Link>
            ))}
          </HStack>
        </Flex>

        {/* Desktop Auth Buttons */}
        <HStack display={{ base: "none", md: "flex" }} spacing="2">
          <Link
            href="/login"
            px="4"
            py="2"
            fontSize="sm"
            fontWeight="medium"
            color={{ base: "gray.600", _dark: "gray.400" }}
            _hover={{ color: { base: "green.500", _dark: "green.300" } }}
          >
            Log In
          </Link>
          <Link
            href="/admin-signup"
            px="4"
            py="2"
            bg={{ base: "green.500", _dark: "green.500" }}
            color="white"
            fontSize="sm"
            fontWeight="medium"
            borderRadius="md"
            _hover={{ bg: { base: "green.600", _dark: "green.600" } }}
          >
            Sign Up
          </Link>
        </HStack>

        {/* Mobile menu button */}
        <Box display={{ md: "none" }}>
          <Drawer.Root>
            <Drawer.Trigger asChild>
              <Menu
                aria-label="Toggle menu"
                icon={<Menu size={24} />}
                variant="ghost"
                _dark={{
                  color: "gray.200",
                }}
                _hover={{ color: "green.500", bg: "gray.100" }}
              />
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
                          display="block"
                          px="4"
                          py="3"
                          margin={2}
                          borderRadius="md"
                          fontSize="lg"
                          color={
                            isActive(item.path)
                              ? { base: "green.500", _dark: "green.300" }
                              : { base: "gray.600", _dark: "gray.400" }
                          }
                          fontWeight={
                            isActive(item.path) ? "semibold" : "medium"
                          }
                          _hover={{
                            color: { base: "green.500", _dark: "green.300" },
                            bg: { base: "gray.50", _dark: "gray.800" },
                          }}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </Stack>
                  </Drawer.Body>
                  <Drawer.Footer>
                    <Stack w="full" spacing="2">
                      <Button as="a" href="/login" variant="outline" w="full">
                        Log In
                      </Button>
                      <Button
                        as="a"
                        href="/admin-signup"
                        bg={{ base: "green.500", _dark: "green.500" }}
                        color="white"
                        _hover={{
                          bg: { base: "green.600", _dark: "green.600" },
                        }}
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