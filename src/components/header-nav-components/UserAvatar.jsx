import { Avatar, HStack, Stack, Text } from "@chakra-ui/react"

export function addEllipsis(text, num){
  if(text.length > num){
    return text.slice(0,(num-4)) + '...'
  }else{
    return text
  }
}

function UserAvatar({ user }) {

  return (
    <Stack gap="8" border={'1px solid lightgrey'} p={1} rounded={'lg'}>
 
        <HStack key={user.email} gap="4">
          <Avatar.Root >
            <Avatar.Fallback name={user.name} />
            <Avatar.Image src={user.avatar} />
          </Avatar.Root>
          <Stack gap="0" >
            <Text textTransform={'capitalize'} fontWeight="semibold" textStyle={'xs'} width={'80px'}>{addEllipsis(user.name,10)}</Text>
            <Text overflow={'hidden'} whiteSpace={'nowrap'} textOverflow={'ellipsis'} color="fg.muted" textStyle="xs" textTransform={'capitalize'}>
              {user.role}
            </Text>
          </Stack>
        </HStack>
 
    </Stack>
  )
}

export default UserAvatar



