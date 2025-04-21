import { VStack, Box, Heading, HStack, Button } from "@chakra-ui/react";
import { useState } from "react";
import NotificationCard from "../components/notification-card/NotificationCard";
import { BsEnvelopeCheck } from "react-icons/bs";
import { BiTask } from "react-icons/bi";
import { LuWallet } from "react-icons/lu";
import { TiUserAddOutline } from "react-icons/ti";
import { GiSwipeCard } from "react-icons/gi";

const allNotifications = [
  {
    id: 1,
    title: "New Message From Support",
    subtitle: "Ticket #58402 Has Been Updated",
    icon: BsEnvelopeCheck,
    color: "purple",
    isRead: false,
    time: "2 Days ago",
    performer: "Fombe Fri Eukeria",
  },
  {
    id: 2,
    title: "Daily Settlement Complete",
    subtitle: "₦350,000 credited to your business account.",
    icon: BiTask,
    color: "green",
    isRead: false,
    time: "10 hours ago"
  },
  {
    id: 3,
    title: "Transaction Failed",
    subtitle: "Card Declined for 5,000 At Terminal GH39532 (Reasons Insufficient Funds).",
    icon: LuWallet,
    color: "red",
    isRead: false,
    time: "2 hours ago",
    performer: "Quin Darlington",
  },
  {
    id: 4,
    title: "New User Added",
    subtitle: "Agent Ochei Funmilayo Has Been Added To Terminal LSJH525",
    icon: TiUserAddOutline,
    color: "green",
    isRead: true,
    time: "1 Week ago",
    performer: "Ochei Funmilayo",
  },
  {
    id: 5,
    title: "Terminal Disconnected",
    subtitle: "Terminal 3GSL303 Went Offline",
    icon: GiSwipeCard,
    color: "red",
    isRead: false,
    time: "1 Week ago",
    performer: "Egbagbe Damilola",
  },
  {
    id: 6,
    title: "New User Added",
    subtitle: "Agent Ochei Funmilayo Has Been Added To Terminal LSJH525",
    icon: TiUserAddOutline,
    color: "green",
    isRead: true,
    time: "1 Week ago",
    performer: "Ochei Funmilayo",
  },
  {
    id: 7,
    title: "New User Added",
    subtitle: "Agent Ochei Funmilayo Has Been Added To Terminal LSJH525",
    icon: TiUserAddOutline,
    color: "green",
    isRead: true,
    time: "1 Week ago",
    performer: "Ochei Funmilayo",
  },
];

const NotificationsPage = () => {
  const [filter, setFilter] = useState("all");
  const [notifications, setNotifications] = useState(allNotifications);

  const filteredNotifications =
    filter === "unread"
      ? notifications.filter((n) => !n.isRead)
      : notifications;

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, isRead: true } : n
      )
    );
  };

  const handleCardClick = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.id === id ? { ...notification, isRead: true } : notification
      )
    );
  };

  return (
    <Box
      width="500px"
      maxHeight="1024px"
      bg="#FFFFFF"
      borderRadius="10px"
      boxShadow="0 0 4px rgba(0, 0, 0, 0.1)"
      p="20px"
    >
      {/* Header */}
      <Heading
        fontSize="20px"
        fontWeight="600"
        fontFamily="Poppins"
        mb="36px"
      >
        Notifications
      </Heading>

      {/* Toggle Filter */}
      <HStack spacing="10px" mb="20px" ml="4px">
        <Box
          borderBottom={filter === "all" ? "1px solid #02B14F" : "none"}
          pb="1px"
        >
          <Button
            onClick={() => setFilter("all")}
            variant="unstyled"
            color={filter === "all" ? "#02B14F" : "#626C7A"}
            fontWeight="500"
            fontSize="16px"
            fontFamily="Poppins"
            textTransform="capitalize"
            height="24px"
            width="34px"
          >
            All
          </Button>
        </Box>

        <Box
          borderBottom={filter === "unread" ? "1px solid #02B14F" : "none"}
          pb="1px"
        >
          <Button
            onClick={() => setFilter("unread")}
            variant="unstyled"
            color={filter === "unread" ? "#02B14F" : "#626C7A"}
            fontWeight="500"
            fontSize="16px"
            fontFamily="Poppins"
            textTransform="capitalize"
            height="24px"
            width="60px"
          >
            Unread
          </Button>
        </Box>
      </HStack>

      {/* Scrollable Notification List */}
      <Box maxHeight="800px" overflowY="auto" pr="4px">
        <VStack spacing="10px" align="stretch">
          {filteredNotifications.map((n) => (
            <NotificationCard
              key={n.id}
              {...n}
              onClick={() => markAsRead(n.id)}
            />
          ))}
        </VStack>
      </Box>
    </Box>
  );
};

export default NotificationsPage;
