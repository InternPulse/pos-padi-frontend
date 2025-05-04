import { Box, HStack, VStack, Text, Flex, Icon, Image } from "@chakra-ui/react";
import moment from "moment";
import { BsEnvelopeCheck } from "react-icons/bs";
import { BiTask } from "react-icons/bi";
import { LuWallet } from "react-icons/lu";
import { TiUserAddOutline } from "react-icons/ti";
import { GiSwipeCard } from "react-icons/gi";
import { FaBell } from "react-icons/fa";
import dotIcon from "../../assets/dotIcon.png";
import { addEllipsis } from "../header-nav-components/UserAvatar";

//  Switch case to get the icon based on the icon name

// const getIcon = (iconName, size) => {
//   const iconProps = { size };

//   switch (iconName) {
//     case "message":
//       return <BsEnvelopeCheck {...iconProps} color="#805AD5" />;
//     case "task":
//       return <BiTask {...iconProps} color="#38A169" />;
//     case "transaction":
//       return <LuWallet {...iconProps} color="#E53E3E" />;
//     case "user-add":
//       return <TiUserAddOutline {...iconProps} color="#38A169" />;
//     case "terminal":
//       return <GiSwipeCard {...iconProps} color="#E53E3E" />;
//     default:
//       return <FaBell {...iconProps} color="#38A169" />;
//   }
// };

const getIcon = (iconName, size) => {
  const iconProps = { size };

  switch (iconName) {
    case "message":
      return (
        <Box
          bg={{ base: "purple.50", _dark: "purple.800" }}
          p={3}
          rounded={'xl'}
        >
          <Icon color={{base: 'purple.600', _dark:'purple.300'}} size={'xl'} ><BsEnvelopeCheck  /></Icon>
        </Box>
      );
    case "task":
      return (
        <Box
          bg={{ base: "green.50", _dark: "green.800" }}
          p={3}
          rounded={'xl'}
        >
          <Icon color={{base: 'green.600', _dark:'green.300'}} size={'xl'} ><BiTask  /></Icon>
        </Box>
      );
    case "transaction":
      return (
        <Box
          bg={{ base: "red.50", _dark: "red.800" }}
          p={3}
          rounded={'xl'}
        >
          <Icon color={{base: 'red.600', _dark:'red.300'}} size={'xl'} ><LuWallet  /></Icon>
        </Box>
      );
    case "user-add":
      return (
        <Box
          bg={{ base: "blue.50", _dark: "blue.800" }}
          p={3}
          rounded={'xl'}
        >
          <Icon color={{base: 'blue.600', _dark:'blue.300'}} size={'xl'} ><TiUserAddOutline  /></Icon>
        </Box>
      );
    case "terminal":
      return (
        <Box
          bg={{ base: "red.50", _dark: "red.800" }}
          p={3}
          rounded={'xl'}
        >
          <Icon color={{base: 'red.600', _dark:'red.300'}} size={'xl'} ><GiSwipeCard  /></Icon>
        </Box>
      );
    default:
      return (
        <Box
          bg={{ base: "yellow.50", _dark: "yellow.800" }}
          p={3}
          rounded={'xl'}
        >
          <Icon color={{base: 'yellow.600', _dark:'yellow.300'}} size={'xl'} ><FaBell  /></Icon>
        </Box>
      );
  }
};

// Format time to relative time
// const formatRelativeTime = (time) => {
//   const now = moment();
//   const duration = moment.duration(now.diff(moment(time)));

//   const days = Math.floor(duration.asDays());
//   const hours = Math.floor(duration.asHours());

//   if (days >= 7) return "1 Week ago";
//   if (days >= 2) return `${days} Days ago`;
//   if (days === 1) return "1 Day ago";
//   if (hours >= 2) return `${hours} hours ago`;
//   if (hours === 1) return "1 hour ago";
//   return "Just now";
// };

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
    <Flex
      borderBottom="1px solid #EDF2F7"
      // p={{ base: "12px", md: "16px" }}
      // bg={isRead ? "#F9F9F9" : "#FFFFFF"}
      align={'center'}
      py={4}
      cursor="pointer"
      onClick={onClick}
      _hover={{ bg: { base: "#F1F5F9", _dark: "gray.700" } }}
    >
      <HStack gap={4} align="flex-start">
        
          {getIcon(icon, "18px")}
        

        <VStack spacing="4px" align="start">
          <Text
            fontWeight={isRead ? "500" : "700"}
            fontSize="14px"
            color={{ base: "#1A202C", _dark: "gray.200" }}
          >
            {title}
          </Text>
          <Text fontSize="12px" color={{ base: "#718096", _dark: "gray.400" }}>
            {subtitle}
          </Text>
          <HStack spacing="8px">
            <Text
              fontSize="12px"
              color={{ base: "#A0AEC0", _dark: "gray.300" }}
              textTransform={'capitalize'}
            >
              {/* {formatRelativeTime(time)} */} {moment(time).fromNow()}
            </Text>
            <Image src={dotIcon} boxSize="10px" />
            {name && (
              <Text
                fontSize="12px"
                color={{ base: "#4A5568", _dark: "gray.300" }}
                fontWeight="500"
              >
                {addEllipsis(name,15)}
              </Text>
            )}
          </HStack>
        </VStack>
      </HStack>
    </Flex>
  );
};

export default NotificationCard;
