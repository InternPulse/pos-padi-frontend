import { VStack, Box, Heading, HStack, Button } from "@chakra-ui/react";
import { useState } from "react";
import NotificationCard from "./NotificationCard";  
import moment from "moment";

const allNotifications = [
  {
    id: 1,
    title: "New Message From Support",
    subtitle: "Ticket #58402 Has Been Updated",
    type: "message",
    color: "purple",
    isRead: false,
    time: moment().subtract(2, "days").toISOString(),
    name: "Fombe Fri Eukeria",
  },
  {
    id: 2,
    title: "Daily Settlement Complete",
    subtitle: "₦350,000 credited to your business account.",
    type: "task",
    color: "green",
    isRead: false,
    time: moment().subtract(10, "hours").toISOString(),
  },
  {
    id: 3,
    title: "Transaction Failed",
    subtitle: "Card Declined for 5,000 At Terminal GH39532 (Reasons Insufficient Funds).",
    type: "transaction",
    color: "red",
    isRead: false,
    time: moment().subtract(2, "hours").toISOString(),
    name: "Quin Darlington",
  },
  {
    id: 4,
    title: "New User Added",
    subtitle: "Agent Ochei Funmilayo Has Been Added To Terminal LSJH525",
    type: "user-add",
    color: "green",
    isRead: true,
    time: moment().subtract(7, "days").toISOString(),
    name: "Ochei Funmilayo",
  },
  {
    id: 5,
    title: "Terminal Disconnected",
    subtitle: "Terminal 3GSL303 Went Offline",
    type: "terminal",
    color: "red",
    isRead: false,
    time: moment().subtract(1, "day").toISOString(),
    name: "Egbagbe Damilola",
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

  return (
    <Box
      width={{ base: "100%", md: "300px" }}
      maxHeight="1024px"
      bg="#FFFFFF"
      borderRadius="10px"
    >
      {/* Header */}
      {/* <Heading
        fontSize="20px"
        fontWeight="600"
        fontFamily="Poppins"
        mb="36px"
      >
        Notifications
      </Heading> */}

      {/* Filter Buttons */}
      <HStack spacing="10px" mb="20px" ml="4px" px='4' gap={8}>
        <Box
          borderBottom={filter === "all" ? "3px solid #02B14F" : "none"}
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
          borderBottom={filter === "unread" ? "3px solid #02B14F" : "none"}
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

      {/* Notification List */}
      <Box maxHeight="800px" overflowY="auto" pr="4px">
        <VStack spacing="0" align="stretch">
          {filteredNotifications.map((n) => (
            <NotificationCard
              key={n.id}
              title={n.title}
              subtitle={n.subtitle}
              icon={n.type}  
              color={n.color}  
              isRead={n.isRead}  
              time={n.time}  
              name={n.name}  
              onClick={() => markAsRead(n.id)}  
            />
          ))}
        </VStack>
      </Box>
    </Box>
  );
};

export default NotificationsPage;
