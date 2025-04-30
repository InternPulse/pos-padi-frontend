import {
  Button,
  Box,
  CloseButton,
  Dialog,
  Portal,
  Image,
  Flex,
} from "@chakra-ui/react";
import TransactionDetailsCard from "../TransactionDetailsCard";
import logo from "../../../../assets/logo-lg.png";

function TransactionDialog({ children, data }) {
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
              <Flex justify="center" width="100%">
                <Image src={logo} height="66px" width="220px" fit="contain" />
              </Flex>
            </Dialog.Header>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" variant={"ghost"} />
            </Dialog.CloseTrigger>
            <Dialog.Body>
              <TransactionDetailsCard data={data} />
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}

export default TransactionDialog;
