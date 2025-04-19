import { useState } from "react"
import {Button} from "@chakra-ui/react"
import SuccessModal from "../components/others/SuccessModal"

const Agents = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button fontFamily="Poppins"  colorScheme="green" onClick={() => setIsOpen(true)}>
        Show Success Modal
      </Button>

      <SuccessModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}

export default Agents