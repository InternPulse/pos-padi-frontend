import React from "react";
import { Box, Flex, Text, Button, VStack } from "@chakra-ui/react";

const SuccessDialog = ({ onClose, variant}) => {
  // messages for different variants
  // const messages = {
  //   customer: "You have successfully added a new customer",
  //   terminal: "You have successfully added a new terminal",
  //   transaction: "You have successfully added a new transaction",
  // };

  // variant description based on the passed variant prop
  const description = `You have successfully added a new ${variant}`

  return (
    <Flex
      position="fixed"
      top="0"
      left="0"
      right="0"
      bottom="0"
      bg="rgba(0,0,0,0.5)"
      Index="1000"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        bg="white"
        borderRadius="12px"
        p={{ base: 6, md: "90px" }}
        width={{ base: "90%", sm: "350px", md: "500px" }}
        height={{ base: "auto", md: "500px" }}
        textAlign="center"
        boxShadow="xl"
      >
        {/* Concentric circles */}
        <Box
          position="relative"
          width="130px"
          height="130px"
          mx="auto"
          mb="7.65px"
        >
          <Box
            position="absolute"
            top="0"
            left="0"
            width="130px"
            height="130px"
            bg="rgba(2, 177, 79, 0.1)"
            borderRadius="full"
          />
          <Box
            position="absolute"
            top="15px"
            left="15px"
            width="100px"
            height="100px"
            bg="rgba(2, 177, 79, 0.3)"
            borderRadius="full"
          />
          <Box
            position="absolute"
            top="30px"
            left="30px"
            width="70px"
            height="70px"
            bg="#02B14F"
            borderRadius="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text fontSize="32px" color="white">
              ✓
            </Text>
          </Box>
        </Box>

        <VStack spacing="7.65px" mb="30px">
          <Text
            fontFamily="Poppins"
            fontWeight={600}
            fontSize="24px"
            color="#000000"
          >
            Successful
          </Text>
          <Text
            fontFamily="Poppins"
            fontWeight={400}
            fontSize="14px"
            color="#626C7A"
          >
            {description}
          </Text>
        </VStack>

        <Button
          bg="#02B14F"
          color="white"
          width="100%"
          height="48px"
          borderRadius="8px"
          fontFamily="Poppins"
          fontWeight={600}
          fontSize="16px"
          _hover={{ bg: "#028a3f" }}
          onClick={onClose}
        >
          OK
        </Button>
      </Box>
    </Flex>
  );
};

export default SuccessDialog;
