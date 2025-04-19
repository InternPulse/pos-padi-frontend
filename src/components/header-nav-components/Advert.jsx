import { Image, Box } from "@chakra-ui/react"
import advertImage from '../../assets/pos-advert-bg.png'

function Advert() {
  return (
    <Box mt='auto' p={3}>

      <Image src={advertImage} rounded='2xl' />
    </Box>
  )
}

export default Advert