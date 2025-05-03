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
import pospadilogo from "../../assets/logo-lg.png";

function FooterLink({ text, destination }) {
  return (
    <Link
      color={{ base: "gray.300", _dark: "gray.400" }}
      textStyle={"sm"}
      href={destination}
      _hover={{ color: { base: "white", _dark: "gray.100" } }}
    >
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
    <Flex
      width={"100%"}
      p={4}
      bg={{ base: "black", _dark: "gray.900" }}
      color={{ base: "white", _dark: "gray.100" }}
    >
      <VStack separator={<StackSeparator />} width={"100%"} gap={4}>
        <Flex
          py={{ base: 4, lg: 8 }}
          width={"100%"}
          px={5}
          direction={{ base: "column", lg: "row" }}
          gap={{ base: 12, lg: 6 }}
        >
          <Flex width={{ base: "100%", lg: "25%" }}>
            <Flex direction={"column"} textAlign={{ base: "left", lg: "left" }}>
              <Image src={pospadilogo} htmlWidth="200px" htmlHeight="200px" />
              <Text
                mt={2}
                textStyle={"sm"}
                color={{ base: "gray.300", _dark: "gray.400" }}
              >
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
                  _hover={{ opacity: 0.8 }}
                >
                  <Icon as={FaFacebook} boxSize={6} color="#1877F2" />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/company/pos-padi/"
                  isExternal
                  _hover={{ opacity: 0.8 }}
                >
                  <Icon as={FaLinkedin} boxSize={6} color="#0A66C2" />
                </Link>
                <Link
                  target="_blank"
                  href="https://x.com/pospadi"
                  isExternal
                  _hover={{ opacity: 0.8 }}
                >
                  <Icon as={FaTwitter} boxSize={6} color="#1DA1F2" />
                </Link>
                <Link
                  target="_blank"
                  href="https://youtube.com"
                  isExternal
                  _hover={{ opacity: 0.8 }}
                >
                  <Icon as={FaYoutube} boxSize={6} color="#FF0000" />
                </Link>
              </Stack>
            </Flex>
          </Flex>
          <Flex width={{ base: "100%", lg: "50%" }}>
            <Flex direction={"column"} width={"50%"}>
              <Text
                fontSize="md"
                fontWeight="medium"
                mb={2}
                color={{ base: "white", _dark: "gray.100" }}
              >
                Quick Links
              </Text>
              <Stack spacing={2} align={{ base: "start", lg: "flex-start" }}>
                {quickLinks.map((link) => {
                  return <FooterLink {...link} />;
                })}
              </Stack>
            </Flex>
            <Flex direction={"column"} width={"50%"}>
              <Text
                fontSize="md"
                fontWeight="medium"
                mb={2}
                color={{ base: "white", _dark: "gray.100" }}
              >
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
            <Flex direction={"column"} textAlign={{ base: "left", md: "left" }}>
              <Text
                fontSize="md"
                fontWeight="medium"
                mb={2}
                color={{ base: "white", _dark: "gray.100" }}
              >
                Contact Us
              </Text>
              <Stack gap={2} align={{ base: "start", lg: "flex-start" }}>
                <Flex
                  align="center"
                  justify={{ base: "center", lg: "flex-start" }}
                  textStyle={"sm"}
                >
                  <Icon
                    as={FaEnvelope}
                    mr={2}
                    color={{ base: "green.500", _dark: "green.300" }}
                  />
                  <Link
                    color={{ base: "gray.300", _dark: "gray.400" }}
                    href="mailto:Support@pospade.com"
                    _hover={{ color: { base: "white", _dark: "gray.100" } }}
                  >
                    Support@pospade.com
                  </Link>
                </Flex>
                <Flex
                  align="center"
                  justify={{ base: "center", lg: "flex-start" }}
                  textStyle={"sm"}
                >
                  <Icon
                    as={FaPhoneAlt}
                    mr={2}
                    color={{ base: "green.500", _dark: "green.300" }}
                  />
                  <Text color={{ base: "gray.300", _dark: "gray.400" }}>
                    +234 800 CALL POSPADI
                  </Text>
                </Flex>
                <Flex
                  align="center"
                  justify={{ base: "center", lg: "flex-start" }}
                  textStyle={"sm"}
                >
                  <Icon
                    as={FaMapMarkerAlt}
                    mr={2}
                    color={{ base: "green.500", _dark: "green.300" }}
                  />
                  <Text color={{ base: "gray.300", _dark: "gray.400" }}>
                    10 Bendel Close, Lagos, Nigeria
                  </Text>
                </Flex>
              </Stack>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          width={"100%"}
          justify={"space-between"}
          px={4}
          gap={4}
          direction={{ base: "column", md: "row" }}
        >
          <Text
            textStyle={"sm"}
            color={{ base: "gray.400", _dark: "gray.500" }}
          >
            © 2025 POS-Padi. All rights reserved.
          </Text>
          <Flex>
            <Stack direction={{ base: "column", md: "row" }} gap={3}>
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (text) => (
                  <Link
                    key={text}
                    color={{ base: "gray.300", _dark: "gray.400" }}
                    textStyle={"sm"}
                    href="#"
                    _hover={{ color: { base: "white", _dark: "gray.100" } }}
                  >
                    {text}
                  </Link>
                )
              )}
            </Stack>
          </Flex>
        </Flex>
      </VStack>
    </Flex>
  );
};

export default Footer;
