import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  Stack,
} from "@chakra-ui/react";
import mobile from "../../assets/mobile.png";

import { Zap } from "lucide-react";

const Banner = () => {
  return (
    <Box
      bg={{
        base: "green.500",
        _dark: "green.900",
      }}
      width="full"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        maxW="7xl"
        mx="auto"
        gap={6}
        py={{ base: 10, md: 20 }}
        px={{ base: 4, md: 8 }}
      >
        <Stack
          spacing={4}
          maxW={{ base: "100%", md: "50%" }}
          textAlign={{ base: "center", md: "left" }}
          alignItems={{ base: "center", md: "flex-start" }}
        >
          <Box>
            <Button
              bg={{ base: "white", _dark: "gray.800" }}
              color={{ base: "green.500", _dark: "green.300" }}
              rounded="full"
              px={3}
              _hover={{ bg: { base: "gray.100", _dark: "gray.700" } }}
              size={{ base: "md", md: "8px" }}
            >
              <Box as="span" fontSize="xl">
                <Zap color="currentColor" size={20} />
              </Box>
              Call to Action
            </Button>
          </Box>
          <Heading
            as="h1"
            fontSize={{ base: "2xl", md: "2xl", lg: "" }}
            color={{ base: "white", _dark: "gray.100" }}
          >
            Transaction Monitoring On The Go
          </Heading>

          <Text
            color={{ base: "white", _dark: "gray.300" }}
            fontSize={{ base: "md", md: "0.8rem" }}
            maxW={{ base: "100%", md: "90%" }}
          >
            With our mobile responsive platform, you can monitor transactions
            anywhere and anytime, regardless of the screen size
          </Text>
        </Stack>

        <Box
          display="flex"
          justifyContent="center"
          w={{ base: "100%", md: "40%" }}
          mt={{ base: 4, md: 0 }}
        >
          <Image
            src={mobile}
            maxH="280px"
            objectFit="fit"
            alt="Mobile app dashboard"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Banner;
