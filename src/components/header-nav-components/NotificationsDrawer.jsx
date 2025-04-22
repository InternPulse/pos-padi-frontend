import {
  Button,
  CloseButton,
  Drawer,
  For,
  HStack,
  Portal,
} from "@chakra-ui/react"
import NotificationButton from "./NotificationButton"
import NotificationsPage from "../notification-card/NotificationsPage"

function NotificationsDrawer({ count }) {
  return (
    <HStack wrap="wrap">
      <For each={["end"]}>
        {(placement) => (
          <Drawer.Root key={placement} placement={placement} >
            <Drawer.Trigger asChild>
              <Button variant="ghost" size="md">
                <NotificationButton count={count} />
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
                    <Drawer.Title>Notifications</Drawer.Title>
                  </Drawer.Header>
                  <Drawer.Body p={0}>
                    <NotificationsPage />
                  </Drawer.Body>
                  {/* <Drawer.Footer>
                    <Drawer.ActionTrigger asChild>
                      <Button variant="outline">Cancel</Button>
                    </Drawer.ActionTrigger>
                    <Button>Save</Button>
                  </Drawer.Footer> */}
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
  )
}

export default NotificationsDrawer