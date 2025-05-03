import {
  Flex,
  Image,
  Text,
  Button,
  Dialog,
  Portal,
  Switch,
} from "@chakra-ui/react";
import confirmationEmoji from "../../../../assets/confirmation-emoji.png";
import { useState } from "react";

function AgentDeactivationContent({ displayDialog, setActive }) {
  return (
    <Flex width={"100%"} height={"100%"} justify={"center"} align={"center"}>
      <Flex
        width={"310px"}
        height={"350px"}
        gap={4}
        direction={"column"}
        align={"center"}
        justify={"space-around"}
      >
        <Image src={confirmationEmoji} alt="Please Confirm" height={"90px"} />
        <Text textStyle={"2xl"} fontWeight={"semibold"}>
          Are You Sure?
        </Text>
        <Text
          textAlign={"center"}
          textStyle={"sm"}
          color={{ base: "gray.600", _dark: "gray.300" }}
        >
          This agent will not be able to login, until reactivation.
        </Text>
        <Button width={"100%"} textAlign={"center"} colorPalette={"green"}>
          Yes, Proceed
        </Button>
        <Button
          onClick={() => {
            setActive(true)
            displayDialog(false);
          }}
          color={"gray.500"}
          width={"100%"}
          textAlign={"center"}
          colorPalette={"gray"}
          variant={"surface"}
        >
          No, Cancel
        </Button>
      </Flex>
    </Flex>
  );
}

export default function AgentDeactivation({ isActive }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(isActive)

  console.log(active)

  function handleSwitch(e) {
    setActive(e.checked)

    if (active) {
      //If agent was active when switch was flipped, open dialog

      setOpen(true);
    } else {
      // If agent was inactive when switch was flipped, activate agent
    }
  }

  return (
    <Dialog.Root open={open}>
      <Dialog.Trigger asChild>
        <Switch.Root
          colorPalette="green"
          checked={active}
          onCheckedChange={(e) => {handleSwitch(e)}}
        
        >
          <Switch.HiddenInput />
          <Switch.Control boxShadow={"0 0 2px lightgrey"} />
        </Switch.Root>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Body pt="6" spaceY="3">
              <AgentDeactivationContent setActive={setActive} displayDialog={setOpen} />
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}
