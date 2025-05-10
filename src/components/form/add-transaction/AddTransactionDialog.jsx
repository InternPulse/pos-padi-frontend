import { Button, CloseButton, Dialog, Flex, Portal } from "@chakra-ui/react";
import AddTransactionBackup from "./AddTransactionBackup";
import { useOutletContext } from "react-router-dom";
import { FiPlus } from "react-icons/fi";

function AddTransactionDialog({ customers }) {
  const { user } = useOutletContext();

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button
          colorPalette={"green"}
          rounded={"lg"}
          display={user.role == "agent" ? "block" : "none"}
        >
          <Flex gap={2}>
            <FiPlus /> Add Transaction
          </Flex>
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content border={'1px solid lightgrey'}>
            <Dialog.Body>
              <AddTransactionBackup customers={customers} />
            </Dialog.Body>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}

export default AddTransactionDialog;
