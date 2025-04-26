import AgentCard from "@/components/agent-details/AgentCard";
import Card from "@/components/alt/dashboard-components/Card";
import { Flex, Button } from "@chakra-ui/react";
import { IoIosArrowBack } from "react-icons/io";
import { GrGroup } from "react-icons/gr";
import { LuWallet } from "react-icons/lu";
import { GiSwipeCard } from "react-icons/gi";
import { useLocation, useNavigate } from "react-router-dom";
import { formatCurrency } from "@/components/alt/transactions/AltTransactions";

function AgentDetails() {
  const currentPath = useLocation().pathname;
  const navigate = useNavigate();

  const previousPage = currentPath.includes("agent") ? "/agents" : "/customers";

  function returnToPreviousPage() {
    navigate(previousPage);
  }

  const agent = {
    imageURL: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04",
    firstName: "Quin",
    lastName: "Darlington",
    email: "meetdarlingono@gmail.com",
    phone: "09155334727",
    dateCreated: "April 18, 2025",
    agentId: "PADI48305",
    terminalId: "VDKJNKR12",
    isActive: true,
    performanceSummary: [
      {
        title: "Total Transaction",
        amount: formatCurrency(536000),
        icon: <LuWallet />,
        iconColor: { base: "blue.600", _dark: "blue.300" },
        iconBgColor: { base: "blue.50", _dark: "blue.800" },
        percent: -30,
        period: "month",
      },
      {
        title: "Transaction Count",
        amount: 7214,
        icon: <GiSwipeCard />,
        iconColor: { base: "purple.600", _dark: "purple.300" },
        iconBgColor: { base: "purple.50", _dark: "purple.800" },
        percent: 23,
        period: "month",
      },
      {
        title: "Successful",
        amount: formatCurrency(132394.05),
        icon: <LuWallet />,
        iconColor: { base: "green.600", _dark: "green.300" },
        iconBgColor: { base: "green.50", _dark: "green.800" },
        percent: 30,
        period: "month",
      },
      {
        title: "Failed",
        amount: formatCurrency(357304.26),
        icon: <LuWallet />,
        iconColor: { base: "red.600", _dark: "red.300" },
        iconBgColor: { base: "red.50", _dark: "red.800" },
        percent: 10,
        period: "month",
      },
      {
        title: "Customers",
        amount: 352,
        icon: <GrGroup />,
        iconColor: { base: "yellow.600", _dark: "yellow.300" },
        iconBgColor: { base: "yellow.50", _dark: "yellow.800" },
        percent: -5,
        period: "month",
      },
    ],
  };

  return (
    <Flex
      width={"100%"}
      direction={"column"}
      gap={4}
      p={4}
      border={"3px solid red"}
    >
      <Button
        onClick={returnToPreviousPage}
        colorPalette="gray"
        variant="ghost"
        alignSelf={"start"}
      >
        <IoIosArrowBack />{" "}
        {previousPage.includes("agent")
          ? "Back to Agents List"
          : "Back to Customers List"}
      </Button>
      <Flex gap={4} direction={{ base: "column", '2xl': "row" }} align={{base:'start'}}>
        <AgentCard agent={agent} />
        <Flex width={"100%"} border={"3px solid blue"} wrap={'wrap'} p={{base: 0, '2xl': 4}} justify={{base: 'center', md: 'start'}} gap={{base: 4, xl: 3}}>
          {agent.performanceSummary.map(item => <Card {...item}  />)}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default AgentDetails;
