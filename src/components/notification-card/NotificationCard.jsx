import { Box, HStack, VStack, Text, Image } from "@chakra-ui/react";
import moment from "moment";
import { BsEnvelopeCheck } from "react-icons/bs";
import { BiTask } from "react-icons/bi";
import { LuWallet } from "react-icons/lu";
import { TiUserAddOutline } from "react-icons/ti";
import { GiSwipeCard } from "react-icons/gi";
import { FaBell } from "react-icons/fa";
import dotIcon from "../../assets/dotIcon.png";

// Return the icon component with color
const getIcon = (iconName, size) => {
  const iconProps = { size };

  switch (iconName) {
    case "message":
      return <BsEnvelopeCheck {...iconProps} color="#805AD5" />;
    case "task":
      return <BiTask {...iconProps} color="#38A169" />;
    case "transaction":
      return <LuWallet {...iconProps} color="#E53E3E" />;
    case "user-add":
      return <TiUserAddOutline {...iconProps} color="#38A169" />;
    case "terminal":
      return <GiSwipeCard {...iconProps} color="#E53E3E" />;
    default:
      return <FaBell {...iconProps} color="#38A169" />;
  }
};

// Return the background color (muted) based on the icon
const getIconBgColor = (iconName) => {
  switch (iconName) {
    case "message":
      return "purple.50";
    case "task":
      return "green.50";
    case "transaction":
      return "red.50";
    case "user-add":
      return "green.50";
    case "terminal":
      return "red.50";
    default:
      return "green.50";
  }
};

// Format time to relative time
const formatRelativeTime = (time) => {
  const now = moment();
  const duration = moment.duration(now.diff(moment(time)));

  const days = Math.floor(duration.asDays());
  const hours = Math.floor(duration.asHours());

  if (days >= 7) return "1 Week ago";
  if (days >= 2) return `${days} Days ago`;
  if (days === 1) return "1 Day ago";
  if (hours >= 2) return `${hours} hours ago`;
  if (hours === 1) return "1 hour ago";
  return "Just now";
};

const NotificationCard = ({
  title,
  subtitle,
  icon,
  isRead,
  time,
  name,
  onClick,
}) => {
  return (
    <Box
      borderBottom="1px solid #EDF2F7"
      p={{ base: "12px", md: "16px" }}
      bg={isRead ? "#F9F9F9" : "#FFFFFF"}
      cursor="pointer"
      onClick={onClick}
      _hover={{ bg: "#F1F5F9" }}
    >
      <HStack spacing="16px" align="flex-start">
        <Box
          bg={getIconBgColor(icon)}
          borderRadius="12px"
          boxSize={{ base: "32px", md: "40px" }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {getIcon(icon, "18px")}
        </Box>

        <VStack spacing="4px" align="start">
          <Text
            fontWeight={isRead ? "500" : "700"}
            fontSize="14px"
            color="#1A202C"
          >
            {title}
          </Text>
          <Text fontSize="12px" color="#718096">
            {subtitle}
          </Text>
          <HStack spacing="8px">
            <Text fontSize="12px" color="#A0AEC0">
              {formatRelativeTime(time)}
            </Text>
            <Image src={dotIcon} boxSize="10px" />
            {name && (
              <Text fontSize="12px" color="#4A5568" fontWeight="500">
                {name}
              </Text>
            )}
          </HStack>
        </VStack>
      </HStack>
    </Box>
  );
};

export default NotificationCard;
