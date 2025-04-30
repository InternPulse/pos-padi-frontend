import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";
import { RiArrowRightLine } from "react-icons/ri"
import POSPadiWeb from "../../assets/POSpadiWebView.png";
import POSPadiMobile from "../../assets/POSpadiMobileView.png";

const HeroSection = () => {
  return (
    <Box bg="gray.50" w="full">
    <Box py={{ base: 20, md: 40 }} px={{ base: 4, md: 10 }}>
      <Flex
        direction="column"
        align="center"
        textAlign="center"
        maxW="7xl"
        mx="auto"
        gap={{ base: 4, md: 6 }}
      >
        <Button
          bg="green.100"  
          _hover={{ bg: "green.400", color: 'white' }}
          color="green.600"
          size="sm"
          rounded="full"
          variant="ghost"
          rightIcon={<FiArrowRight />}
          mb={2}
          px={4}
        >
          Top Rated POS App For Agency Banking <RiArrowRightLine />
        </Button>

        <Heading
          fontSize={{ base: "3xl", md: "5xl" }}
          fontWeight="bold"
          color="gray.800"
          lineHeight="1.2"
        >
          Powering Reliable <br /> Transactions, Anywhere
        </Heading>

        <Text
          fontSize={{ base: "md", md: "lg" }}
          color="gray.600"
          maxW="2xl"
        >
          POS-Padi platform is fast, secure, and designed for growth.
          Manage transfers, withdrawals, bill payments, and more, all from one device.
        </Text>

        <Flex
          mt={4}
          gap={4}
          flexWrap="wrap"
          justify="center"
        >
          <Button 
            colorPalette="green" 
            size="lg" 
            minW="140px"
            rounded="full"
          >
            Get Started
          </Button>
          <Button 
            colorPalette="green" 
            variant="outline" 
            size="lg" 
            color="green.600"
            rounded="full"
            minW="140px" 
            bg="green.50"
            _hover={{ bg: "green.400", color: 'white' }}
            borderWidth="3px"
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
    </Box>
  );
};

export default HeroSection;

