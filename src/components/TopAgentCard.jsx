import React from "react";
import { Box, Text, Flex, Image } from "@chakra-ui/react";
import { LuWallet } from "react-icons/lu";
import { LuUsers } from "react-icons/lu";
import ProfileImage from "../assets/agents/ellipse34.png";
import starBanner from "../assets/star-banner.png";

const formatAmount = (amount) => {
  const num = parseFloat(amount);
  return `₦${num.toLocaleString("en-NG", { minimumFractionDigits: 2 })}`;
};

const TopAgentCard = ({
  userImageURL = ProfileImage,
  userFullName,
  amount,
  clients,
}) => {
  return (
    <Box
      width={{ base: "330px", sm: "360px" }}
      height="284px"
      borderRadius="10px"
      // border="1px solid #E5E7EB"
      bg="#FFFFFF"
      p="24px"
      boxShadow="xs"
      position="relative"
    >
      {/* Heading */}
      <Text
        // fontFamily="Poppins" (removed as adviced to allow global font family to take effect)
        fontWeight="500"
        fontSize="18px"
        lineHeight="100%"
        color="#626C7A"
        mb="16px"
      >
        Our Top Agent
      </Text>

      {/* Star Icon */}
      <Box position="absolute" top="0" right="0" width={"100px"}>
        <Image src={starBanner} alt="star-agent" />
      </Box>
      <Flex direction={"column"} justify={"start"} align={"center"}>
        {/* Profile Image */}
        <Flex justify="center" mt={"1rem"} mb="2rem">
          <Image
            src={userImageURL}
            alt="Top Agent"
            boxSize="100px"
            borderRadius="full"
          />
        </Flex>

        {/* Agent Name */}

        <Text
          // fontFamily="Poppins" (removed as adviced to allow global font family to take effect)
          fontWeight="500"
          fontSize="16px"
          lineHeight="100%"
          textAlign="center"
          color="#1A1A1A"
          mb="14px"
        >
          {userFullName}
        </Text>

        {/* Amount and Clients Section */}
        <Flex justify="space-between" width={"173px"} align="center" color="#626C7A" gap="16px">
          {/* Wallet + Amount */}
          <Flex align="center" gap="8px">
            <LuWallet size="14px" />
            <Text fontSize="14px" fontWeight="500" color="#626C7A">
              {formatAmount(amount)}
            </Text>
          </Flex>

          {/* Users + Count */}
          <Flex align="center" gap="8px">
            <LuUsers size="14px" />
            <Text fontSize="14px" fontWeight="500" color="#626C7A">
              {clients}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default TopAgentCard;
