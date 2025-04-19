import { useLocation } from "react-router-dom";
import { Text } from "@chakra-ui/react";

function PageTitle() {
  const currentLocation = useLocation().pathname;

  const pagesList = [
    "Dashboard",
    "Transactions",
    "Agents",
    "Customers",
    "Terminals",
    "Dispute",
    "Settings",
  ];

  const currentPage = pagesList.find((page) =>
    currentLocation.includes(page.toLowerCase())
  );
  return (
    <Text textStyle={"xl"} color={{base: "gray.500", _dark: 'gray.300'}} fontWeight={"semibold"}>
      {currentPage}
    </Text>
  );
}

export default PageTitle;
