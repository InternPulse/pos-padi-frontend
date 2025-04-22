import { Button, Box, CloseButton, Dialog, Portal, Image } from "@chakra-ui/react"
import TransactionDetailsCard from "../TransactionDetailsCard"
import logo from "../../../../assets/logo-lg.png"

function TransactionDialog({ children }) {
  return (
    <Dialog.Root scrollBehavior="inside" size="sm">
      <Dialog.Trigger asChild>
        <Box>{children}</Box>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>
                <Image src={logo} height="66px" width="100%" />
              </Dialog.Title>
            </Dialog.Header>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
            <Dialog.Body>
             
              <TransactionDetailsCard />
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}

export default TransactionDialog