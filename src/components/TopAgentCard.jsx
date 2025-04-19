import React from 'react';
import { Box, Text, Flex, Image } from '@chakra-ui/react';
import { IoStar } from 'react-icons/io5'; // TODO: Change to png to match design 
import { LuWallet } from 'react-icons/lu';
import { LuUsers } from 'react-icons/lu';
import ProfileImage from '../assets/agents/ellipse34.png';  

const formatAmount = (amount) => {
  const num = parseFloat(amount);
  return `₦${num.toLocaleString('en-NG', { minimumFractionDigits: 2 })}`;
};

const TopAgentCard = ({ userImageURL = ProfileImage, userFullName, amount, clients }) => {
  return (
    <Box
      width="360px"
      height="284px"
      borderRadius="10px"
      border="1px solid #E5E7EB"
      bg="#FFFFFF"
      p="24px"
      boxShadow="sm"
      position="relative"
    >
      {/* Heading */}
      <Text
        // fontFamily="Poppins" (removed as adviced to allow global font family to take effect)
        fontWeight="500"
        fontSize="14px"
        lineHeight="100%"
        color="#626C7A"
        mb="16px"
      >
        Our Top Agent
      </Text>

      {/* Star Icon */}
      <Box position="absolute" top="-32.5px" left="238.5px">
        <IoStar size="150px" color="#FFA34D" />
      </Box>

      {/* Profile Image */}
      <Flex justify="center" mt="32px" mb="16px">
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
      <Flex justify="center" align="center" gap="16px">
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
    </Box>
  );
};

export default TopAgentCard;
