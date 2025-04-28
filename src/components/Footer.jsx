import { Box, Flex, Link, Text, Icon, Stack, Image } from "@chakra-ui/react";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import pospadilogo from "../assets/logo-lg.png";

const Footer = () => {
  return (
    <Box bg="black" color="white" py={10} px={5}>
      <Flex
        direction={{ base: "column", lg: "row" }}
        justify="space-between"
        align={{ base: "flex-start", lg: "center" }}
        maxW="1200px"
        mx="auto"
        
        gap={10}
      >

        <Box flex="1" minHeight="200px" textAlign={{ base: "center", lg: "left" }}>
          <Image 
            src={pospadilogo}
            htmlWidth="200px"
            htmlHeight="200px"
          />
          <Text mt={2}>
            Empowering financial freedom through easy, secure, and accessible payment solutions.
          </Text>
          <Stack
            direction="row"
            spacing={4}
            mt={4}
            justify={{ base: "center", lg: "flex-start" }}
          >
            <Link href="https://www.facebook.com/profile.php?id=61575342099995" isExternal>
              <Icon as={FaFacebook} boxSize={6} color="#1877F2" />
            </Link>
            <Link href="https://www.linkedin.com/company/pos-padi/" isExternal>
              <Icon as={FaLinkedin} boxSize={6} color="#0A66C2" />
            </Link>
            <Link href="https://x.com/pospadi" isExternal>
              <Icon as={FaTwitter} boxSize={6} color="#1DA1F2" />
            </Link>
            <Link href="https://youtube.com" isExternal>
              <Icon as={FaYoutube} boxSize={6} color="#FF0000" />
            </Link>
          </Stack>
        </Box>

        <Box flex="2">
          <Flex
            direction="row"
            justify="space-between"
            wrap="wrap" 
            gap={8}
          >

            <Box textAlign={{ base: "center", lg: "left" }} flex="1">
              <Text fontSize="lg" fontWeight="bold" mb={2}>
                Quick Links
              </Text>
              <Stack spacing={2} align={{ base: "center", lg: "flex-start" }}>
                <Link href="#">About Us</Link>
                <Link href="#">Features</Link>
                <Link href="#">Pricing</Link>
                <Link href="#">Blog</Link>
                <Link href="#">Contact Us</Link>
              </Stack>
            </Box>


            <Box textAlign={{ base: "center", lg: "left" }} flex="1">
              <Text fontSize="lg" fontWeight="bold" mb={2}>
                Products
              </Text>
              <Stack spacing={2} align={{ base: "center", lg: "flex-start" }}>
                <Link href="#">Personal</Link>
                <Link href="#">Business</Link>
                <Link href="#">Merchant Service</Link>
                <Link href="#">Developers API</Link>
                <Link href="#">Partners</Link>
              </Stack>
            </Box>
          </Flex>
        </Box>

        <Box flex="1" textAlign={{ base: "center", lg: "left" }} minHeight="200px">
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Contact Us
          </Text>
          <Stack spacing={2} align={{ base: "center", lg: "flex-start" }}>
            <Flex align="center" justify={{ base: "center", lg: "flex-start" }}>
              <Icon as={FaEnvelope} mr={2} color="green" />
              <Link href="mailto:Support@pospade.com">Support@pospade.com</Link>
            </Flex>
            <Flex align="center" justify={{ base: "center", lg: "flex-start" }}>
              <Icon as={FaPhoneAlt} mr={2} color="green" />
              <Text>+234 800 CALL POSPADI</Text>
            </Flex>
            <Flex align="center" justify={{ base: "center", lg: "flex-start" }}>
              <Icon as={FaMapMarkerAlt} mr={2} color="green" />
              <Text>10 Bendel Close, Lagos, Nigeria</Text>
            </Flex>
          </Stack>
        </Box>
      </Flex>

      <Box borderTop="1px solid gray" mt={10} pt={5}>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
          textAlign="center"
          gap={4}
        >
          <Text>© 2025 POS-Padi. All rights reserved.</Text>
          <Stack direction="row" spacing={4}>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Cookie Policy</Link>
          </Stack>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;