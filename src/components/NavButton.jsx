import { Button, Icon, Text, Box } from "@chakra-ui/react"

const NavButton = ({ icon, text, isSelected = false, onClick }) => {
  return (
    <Button
      onClick={onClick}
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      width="100%"
      py={2}
      px={4}
      borderRadius="md"
      bg={isSelected ? "gray.100" : "transparent"}
      _hover={{ bg: "gray.50" }}
      _active={{ bg: "gray.100" }}
      transition="background-color 0.2s"
    >
      {icon && (
        <Box mr={2} fontSize="20px">
          <Icon as={icon} />
        </Box>
      )}
      <Text display="block" fontSize="sm">
        {text}
      </Text>
    </Button>
  )
}

export default NavButton
