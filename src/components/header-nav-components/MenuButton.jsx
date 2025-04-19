import { Icon, IconButton } from "@chakra-ui/react";
import { LuMenu } from "react-icons/lu";

function MenuButton() {
  return (
    <IconButton variant={"ghost"}>
      <Icon variant={"ghost"} size={"xl"} cursor={"pointer"}>
        <LuMenu />
      </Icon>
    </IconButton>
  );
}

export default MenuButton;
