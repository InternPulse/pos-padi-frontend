import { Button, Text } from "@chakra-ui/react";
import { IoCloudDownloadOutline } from "react-icons/io5";

function ExportButton() {
  return (
    <Button
      fontFamily={"inherit"}
      rounded="lg"
      variant={"outline"}
      bg={{ base: "white", _dark: "gray.800" }}
      display={"flex"}
      justifyContent={"space-around"}
      gap={2}
      width={"100%"}
      height={"100%"}
      p={2}
      boxShadow={'0 0 2px lightgrey'}
    >
      <IoCloudDownloadOutline />{" "}
      <Text fontFamily={"inherit"} display={{ base: "none", md: "block" }}>
        Export report
      </Text>
    </Button>
  );
}

export default ExportButton;
