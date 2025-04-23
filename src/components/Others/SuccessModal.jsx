import {
    Button,
    Box,
    DialogBackdrop,
    DialogPositioner,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogBody,
    DialogFooter,
    DialogActionTrigger,
    Portal,
    Text,
    VStack,
    DialogRoot,
} from "@chakra-ui/react"
import frame from '../../assets/frame 298.png'
import PropTypes from "prop-types"
  
const SuccessModal = ({ isOpen, onClose }) => {
    return (
      <DialogRoot open={isOpen} onOpenChange={onClose} m="auto">
        <Portal>
          <DialogBackdrop />
          <DialogPositioner>
            <DialogContent
              bg="white"
              my="auto"
              w={{ base: "90%", sm: "400px", md: "450px", lg: "480px", xl: "500px" }}
              h={{ base: "auto", md: "500px" }}
              py={{ base: 4 }}
              px={{ base: 4 }}
              borderRadius="lg"
              boxShadow="lg">
              <Box my={"auto"} mx={"auto"} display="flex" flexDirection="column" justifyContent="space-between" alignItems="center" >
                <DialogHeader>
                  <DialogTitle alignItems="center">
                  <img src={frame} alt="Success Icon" style={{ margin: "0 auto" }} />
                  </DialogTitle>
                </DialogHeader>
    
                <DialogBody>
                <VStack spacing={4} py={4} borderRadius="md">
                  <Text
                    fontFamily="Poppins"
                    fontSize={{ base: "lg", sm: "xl", md: "2xl" }}
                    fontWeight="bold"
                    color="black"
                    textAlign="center"
                  >
                    Successful
                  </Text>

                  <Text
                    fontFamily="Poppins"
                    fontSize={{ base: "sm", sm: "md", md: "lg" }}
                    color="blackAlpha.500"
                    textAlign="center"
                  >
                    You have added a new terminal
                  </Text>
                </VStack>

                </DialogBody>
    
                <DialogFooter>
                  <DialogActionTrigger asChild>
                    <Button  w={{ base: "100%", sm: "16rem", md: "19.375rem" }}
                      color="white"
                      bg="green.600"
                      borderRadius="md"
                      >
                        Ok
                    </Button>
                  </DialogActionTrigger>
                </DialogFooter>
              </Box>  
            </DialogContent>
          </DialogPositioner>
        </Portal>
      </DialogRoot>
    )
}
  
  SuccessModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
}
  
export default SuccessModal
  