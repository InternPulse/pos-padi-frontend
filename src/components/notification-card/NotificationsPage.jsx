import { VStack, Box, Heading, HStack, Button } from "@chakra-ui/react";
import { useState } from "react";
import NotificationCard from "./NotificationCard";  


const NotificationsPage = ({ notifications, setNotifications }) => {
  const [filter, setFilter] = useState("all");

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
