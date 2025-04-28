import {
  Box,
  Flex,
  Link,
  Text,
  Icon,
  Stack,
  Image,
  VStack,
  StackSeparator,
} from "@chakra-ui/react";
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

function FooterLink({ text, destination }) {
  return (
    <Link color={"white"} textStyle={"sm"} href={destination}>
      {text}
    </Link>
  );
}

const Footer = () => {
  const quickLinks = [
    {
      text: "About Us",
      destination: "#",
    },
    {
      text: "Features",
      destination: "#",
    },
    {
      text: "Pricing",
      destination: "#",
    },
    {
      text: "Blog",
      destination: "#",
    },
    {
      text: "Contact Us",
      destination: "#",
    },
  ];

  const products = [
    {
      text: "Personal",
      destination: "#",
    },
    {
      text: "Business",
      destination: "#",
    },
    {
      text: "Merchant Service",
      destination: "#",
    },
    {
      text: "Developers API",
      destination: "#",
    },
    {
      text: "Partners",
      destination: "#",
    },
  ];

  return (
    <Flex width={"100%"} p={4} bg="black" color="white">
      <VStack separator={<StackSeparator />} width={"100%"} gap={4}>
        <Flex
          py={{base: 4, lg: 8}}
          width={"100%"}
          px={5}
          direction={{ base: "column", lg: "row" }}
          gap={{ base: 12, lg: 6 }}
    
        >
          <Flex width={{ base: "100%", lg: "25%" }}>
            <Flex direction={"column"} textAlign={{ base: "left", lg: "left" }}>
              <Image src={pospadilogo} htmlWidth="200px" htmlHeight="200px" />
              <Text mt={2} textStyle={"sm"}>
                Empowering financial freedom through easy, secure, and
                accessible payment solutions.
              </Text>
              <Stack
                direction="row"
                gap={6}
                mt={4}
                justify={{ base: "start", lg: "flex-start" }}
              >
                <Link
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=61575342099995"
                  isExternal
                >
                  <Icon as={FaFacebook} boxSize={6} color="#1877F2" />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/company/pos-padi/"
                  isExternal
                >
                  <Icon as={FaLinkedin} boxSize={6} color="#0A66C2" />
                </Link>
                <Link target="_blank" href="https://x.com/pospadi" isExternal>
                  <Icon as={FaTwitter} boxSize={6} color="#1DA1F2" />
                </Link>
                <Link target="_blank" href="https://youtube.com" isExternal>
                  <Icon as={FaYoutube} boxSize={6} color="#FF0000" />
                </Link>
              </Stack>
            </Flex>
          </Flex>
          <Flex width={{ base: "100%", lg: "50%" }}>
            <Flex direction={"column"} width={"50%"}>
              <Text fontSize="md" fontWeight="medium" mb={2}>
                Quick Links
              </Text>
              <Stack spacing={2} align={{ base: "start", lg: "flex-start" }}>
                {quickLinks.map((link) => {
                  return <FooterLink {...link} />;
                })}
              </Stack>
            </Flex>
            <Flex direction={"column"} width={"50%"}>
              <Text fontSize="md" fontWeight="medium" mb={2}>
                Products
              </Text>
              <Stack spacing={2} align={{ base: "start", lg: "flex-start" }}>
                {products.map((link) => {
                  return <FooterLink {...link} />;
                })}
              </Stack>
            </Flex>
          </Flex>
          <Flex width={{ base: "100%", lg: "25%" }}>
            <Flex
              direction={"column"}
              textAlign={{ base: "left", md: "left" }}
            >
              <Text fontSize="md" fontWeight="medium" mb={2}>
                Contact Us
              </Text>
              <Stack gap={2} align={{ base: "start", lg: "flex-start" }}>
                <Flex
                  align="center"
                  justify={{ base: "center", lg: "flex-start" }}
                  textStyle={"sm"}
                >
                  <Icon as={FaEnvelope} mr={2} color="green" />
                  <Link color={"white"} href="mailto:Support@pospade.com">
                    Support@pospade.com
                  </Link>
                </Flex>
                <Flex
                  align="center"
                  justify={{ base: "center", lg: "flex-start" }}
                  textStyle={"sm"}
                >
                  <Icon as={FaPhoneAlt} mr={2} color="green" />
                  <Text>+234 800 CALL POSPADI</Text>
                </Flex>
                <Flex
                  align="center"
                  justify={{ base: "center", lg: "flex-start" }}
                  textStyle={"sm"}
                >
                  <Icon as={FaMapMarkerAlt} mr={2} color="green" />
                  <Text>10 Bendel Close, Lagos, Nigeria</Text>
                </Flex>
              </Stack>
            </Flex>
          </Flex>
        </Flex>
        <Flex width={"100%"} justify={"space-between"} px={4} gap={4} direction={{base: 'column', md: 'row'}}>
          <Text textStyle={"sm"}>© 2025 POS-Padi. All rights reserved.</Text>
          <Flex>
            <Stack direction={{base: 'column', md: 'row'}} gap={3}>
              <Link color={"white"} textStyle={"sm"} href="#">
                Privacy Policy
              </Link>
              <Link color={"white"} textStyle={"sm"} href="#">
                Terms of Service
              </Link>
              <Link color={"white"} textStyle={"sm"} href="#">
                Cookie Policy
              </Link>
            </Stack>
          </Flex>
        </Flex>
      </VStack>
    </Flex>
  );
};

export default Footer;
