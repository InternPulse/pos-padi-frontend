import { Button, CloseButton, Dialog, Flex, Portal } from "@chakra-ui/react";
import AddCustomerForm from "./AddCustomerForm";
import { useOutletContext, useLocation } from "react-router-dom";
import { FiPlus } from "react-icons/fi";

function AddCustomerDialog() {
  const { user } = useOutletContext()
  const currentPath = useLocation().pathname;

  return (
    <Dialog.Root size={"sm"}>
      <Dialog.Trigger asChild>
        <Button
          colorPalette={"green"}
          rounded={"lg"}
          display={
            currentPath.includes("agent") ||
            (currentPath.includes("customer") && user.role == "agent")
              ? "block"
              : "none"
          }
        >
          <Flex gap={2}>
            <FiPlus /> Add{" "}
            {currentPath.includes("agent") ? "Agent" : "Customer"}{" "}
          </Flex>
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Body>
              <AddCustomerForm />
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

export default AddCustomerDialog;
