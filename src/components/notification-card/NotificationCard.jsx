import { HStack, Box, Text, Image, VStack, useBreakpointValue } from "@chakra-ui/react";
import dotIcon from "../../assets/dotIcon.png";

const NotificationCard = ({
  icon: Icon,
  title,
  subtitle,
  color,
  isRead,
  time = " ",
  performer = " ",
  onClick,
}) => {
  // Responsive design for mobile and desktop
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <HStack
      width="100%"
      bg="white"
      borderRadius="10px"
      spacing="16px"
      p="12px"
      boxShadow="sm"
      align={isMobile ? "flex-start" : "center"}
      onClick={onClick}
      cursor="pointer"
      _hover={{ bg: "gray.50" }}
      flexDirection={isMobile ? "column" : "row"}
      alignItems={isMobile ? "flex-start" : "center"}
    >
      {/* Icon */}
      <Box
        bg={`${color}.100`}
        color={`${color}.500`}
        boxSize="50px"
        borderRadius="12.5px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        mt={isMobile ? "0" : "2px"}
        mb={isMobile ? "8px" : "0"}
      >
        <Icon size="24px" />
      </Box>

      {/* Text */}
      <Box flex="1">
        <VStack align="start" spacing="4px">
          <Text
            fontWeight={isRead ? "normal" : "bold"}
            fontSize="14px"
            fontFamily="Poppins"
            color="#000000"
            lineHeight="21px"
          >
            {title}
          </Text>

          <Text
            fontSize="14px"
            fontFamily="Poppins"
            color="#626C7A"
            lineHeight="21px"
            whiteSpace="normal"
            wordBreak="break-word"
          >
            {subtitle}
          </Text>

          <HStack spacing="6px" mt="4px" flexWrap="wrap">
            <Text fontSize="12px" fontFamily="Poppins" color="#626C7A">
              {time}
            </Text>

            <Image
              src={dotIcon}
              boxSize="10px"
              borderRadius="full"
              alt="dot"
            />

            <Text
              fontSize="12px"
              fontFamily="Poppins"
              color="#626C7A"
              whiteSpace="nowrap"
              overflow="hidden"
              textOverflow="ellipsis"
              maxWidth="120px"
              title={performer}
            >
              {performer}
            </Text>
          </HStack>
        </VStack>
      </Box>
    </HStack>
  );
};

export default NotificationCard;
