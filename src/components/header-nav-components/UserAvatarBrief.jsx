import { Avatar, HStack, Stack, Text } from "@chakra-ui/react";

function UserAvatarBrief({ user }) {
  return (
    <Avatar.Root>
      <Avatar.Fallback name={user.name} />
      <Avatar.Image src={user.avatar} />
    </Avatar.Root>
  );
}

export default UserAvatarBrief;
