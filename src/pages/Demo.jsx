import { Button, CloseButton, Dialog, Portal } from "@chakra-ui/react"
import DisputesForm from "@/components/form/dispute-form/DisputesForm"

export default function Demo(){
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="outline" size="sm">
          Open Dialog
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Context>
              {(store) => (
                <Dialog.Body pt="6" spaceY="3">
                  <p>Dialog is open: {store.open ? "true" : "false"}</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <DisputesForm />
                  <button onClick={() => store.setOpen(false)}>Close</button>
                </Dialog.Body>
              )}
            </Dialog.Context>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}
