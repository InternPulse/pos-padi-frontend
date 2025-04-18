import React from "react";
import { Circle, Float, Icon, Flex, Center } from "@chakra-ui/react";
import { LuBell } from "react-icons/lu";

function NotificationButton({ count }) {

  // This function receives a count prop that is displayed top-right of a notification bell icon

  const limitExceeded = count > 99;

  return (
    <Flex
      position="relative"
      justify="center"
      align={"center"}
      cursor={"pointer"}
      w="20px"
      h="20px"
    >
      <Icon size={"xl"} aria-label="Notifications List" variant={"ghost"}>
        <LuBell />
      </Icon>
      <Float>
        <Circle size={limitExceeded ? 6 : 5} bg="#02B14F" color="white">
          <Center fontSize={"xs"}>{limitExceeded ? "99+" : count}</Center>
        </Circle>
      </Float>
    </Flex>
  );
}

export default NotificationButton;
