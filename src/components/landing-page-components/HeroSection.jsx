import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";
import { RiArrowRightLine } from "react-icons/ri";
import POSPadiWeb from "../../assets/POSpadiWebView.png";
import POSPadiMobile from "../../assets/POSpadiMobileView.png";
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <Box bg={{ base: "gray.50", _dark: "gray.900" }} width="full">
      <Flex
        direction="column"
        align="center"
        textAlign="center"
        maxW="7xl"
        mx="auto"
        gap={{ base: 4, md: 6 }}
        px={{ base: 4, md: 8 }}
        py={{ base: 10, md: 20 }}
      >
        <Button
          bg={{ base: "green.100", _dark: "green.900" }}
          color={{ base: "green.600", _dark: "green.300" }}
          size="sm"
          rounded="full"
          variant="ghost"
          rightIcon={<FiArrowRight />}
          _hover={{
            bg: { base: "green.400", _dark: "green.700" },
            color: "white",
          }}
          mb={2}
          px={4}
        >
          Top Rated POS App For Agency Banking <RiArrowRightLine />
        </Button>

        <Heading
          fontSize={{ base: "3xl", md: "5xl" }}
          fontWeight="bold"
          color={{ base: "gray.800", _dark: "gray.100" }}
          lineHeight="1.2"
        >
          Powering Reliable <br /> Transactions, Anywhere
        </Heading>

        <Text
          fontSize={{ base: "md", md: "lg" }}
          color={{ base: "gray.600", _dark: "gray.400" }}
          maxW="2xl"
        >
          POS-Padi platform is fast, secure, and designed for growth. Manage
          transfers, withdrawals, bill payments, and more, all from one device.
        </Text>

        <Flex mt={4} gap={4} flexWrap="wrap" justify="center">
          <Button
            onClick={() => navigate('/admin-signup')}
            bg={{ base: "green.500", _dark: "green.500" }}
            color="white"
            size="lg"
            minW="140px"
            rounded="full"
            _hover={{ bg: { base: "green.600", _dark: "green.600" } }}
          >
            Get Started
          </Button>
          <Button
            color={{ base: "green.600", _dark: "green.300" }}
            variant="outline"
            size="lg"
            rounded="full"
            minW="140px"
            bg={{ base: "green.50", _dark: "transparent" }}
            borderWidth="3px"
            borderColor={{ base: "green.500", _dark: "green.300" }}
            _hover={{
              bg: { base: "green.100", _dark: "green.900" },
              borderColor: { base: "green.600", _dark: "green.400" },
            }}
          >
            Book a Demo
          </Button>
        </Flex>

        <Flex
          mt={10}
          w="100%"
          maxW="600px"
          justify="center"
          align="center"
          gap={2}
          flexWrap="nowrap"
        >
          <Box flex="1" maxW="75%">
            <Image
              src={POSPadiWeb}
              alt="Dashboard Preview"
              w="100%"
              h="auto"
              objectFit="contain"
            />
          </Box>

          <Box flex="1" maxW="25%">
            <Image
              src={POSPadiMobile}
              alt="Mobile Preview"
              w="100%"
              h="auto"
              objectFit="contain"
            />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default HeroSection;
