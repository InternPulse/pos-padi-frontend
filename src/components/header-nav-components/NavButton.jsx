import { Icon, Text, Box } from "@chakra-ui/react"

const NavButton = ({ icon, text, isSelected = false }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      width="100%"
      height='64px'
      fontWeight={isSelected ? 'semibold' : ''}
      color={isSelected ? '#02B14F' : 'gray.500'}
      borderLeft={isSelected ? '4px solid #02B14F' : ''}
      py={'20px'}
      px={'30px'}
      bg={isSelected ? "rgba(2,177,79,0.05)" : "transparent"}
      _hover={{ color: '#02B14F', fontWeight: 'semibold' }}
      _active={{ bg: "gray.100" }}
      transition="background-color 0.2s"  
    >
      {icon && (
        <Box mr={5} fontSize="20px">
          {/* <Icon as={icon} /> */}
          {icon}
        </Box>
      )}
      <Text display="block" fontSize="1.0rem">
        {text}
      </Text>
    </Box>
  )
}

export default NavButton
