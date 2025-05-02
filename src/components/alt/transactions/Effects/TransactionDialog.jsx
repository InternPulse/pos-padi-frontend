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
import { useState } from "react";
import DisputesForm from "@/components/form/dispute-form/DisputesForm";

function TransactionDialog({ children, data }) {
  const [display, setDisplay] = useState("details");

  // const data = {
  //     reference: "HDKJNKR12",
  //     amount: 30000.0,
  //     customer: "John Smith",
  //     type: "Withdrawal",
  //     agent: "Quin Darlington",
  //     dateTime: "Feb 14, 2025 10:48:00 AM",
  //     status: "successful",
  //   }

  return (
    <Dialog.Root
      scrollBehavior="inside"
      size="sm"
      onOpenChange={() => {
        setDisplay("details");
      }}
    >
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
            <Dialog.Context>
              {(store) => (
                <Dialog.Body>
                  {display == "details" && (
                    <TransactionDetailsCard
                      data={data}
                      setDisplay={setDisplay}
                    />
                  )}
                  {display == "disputeForm" && (
                    <DisputesForm store={store} data={data} />
                  )}
                </Dialog.Body>
              )}
            </Dialog.Context>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}

export default TransactionDialog;
