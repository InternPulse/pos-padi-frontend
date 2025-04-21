import {
  Button,
  CloseButton,
  Drawer,
  For,
  HStack,
  Portal,
  Box,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import Logo from "./Logo";
import { LuLogOut } from "react-icons/lu";
import MenuButton from "./MenuButton";
import Navigation from "./Navigation";

function MobileNav() {
  return (
    <HStack wrap="wrap">
      <For each={["start"]}>
        {(placement) => (
          <Drawer.Root key={placement} placement={placement}>
            <Drawer.Trigger asChild>
              <Button variant="ghost" width={"60px"}>
                <MenuButton />
              </Button>
            </Drawer.Trigger>
            <Portal>
              <Drawer.Backdrop />
              <Drawer.Positioner>
                <Drawer.Content
                  roundedTop={placement === "bottom" ? "l3" : undefined}
                  roundedBottom={placement === "top" ? "l3" : undefined}
                >
                  <Drawer.Header>
                    <Drawer.Title>
                      <Box width={"80px"}>
                        <Logo isConcise={true} />
                      </Box>
                    </Drawer.Title>
                  </Drawer.Header>
                  <Drawer.Context>
                    {(store) => (
                      <Drawer.Body p={0} onClick={() => store.setOpen(false)}>
                        <Navigation userRole="admin" />
                      </Drawer.Body>
                    )}
                  </Drawer.Context>
                  <Drawer.Footer>
                    <Flex justify={"center"} align={"center"} gap={3}>
                      <Box width={"180px"} height={"40px"} bg="gray.400"></Box>
                      <IconButton variant={"ghost"}>
                        <LuLogOut />
                      </IconButton>
                    </Flex>
                  </Drawer.Footer>
                  <Drawer.CloseTrigger asChild>
                    <CloseButton size="sm" />
                  </Drawer.CloseTrigger>
                </Drawer.Content>
              </Drawer.Positioner>
            </Portal>
          </Drawer.Root>
        )}
      </For>
    </HStack>
  );
}

export default MobileNav;
