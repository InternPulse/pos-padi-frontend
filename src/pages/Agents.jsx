import { agentsList } from "../components/transactions/agentsMockData";
import { IoPeopleOutline } from "react-icons/io5";
import GenericPage from "@/components/alt/transactions/generic-table/GenericPage";
import { useEffect } from "react";

const agentsSummary = [
  {
    title: "Total Agents",
    // amount: rawAgents.length,
    icon: <IoPeopleOutline />,
    iconColor: { base: "blue.600", _dark: "blue.300" },
    iconBgColor: { base: "blue.50", _dark: "blue.800" },
    percent: -10,
    period: "month",
  },
  {
    title: "Active Agents",
    amount: 42,
    icon: <IoPeopleOutline />,
    iconColor: { base: "green.600", _dark: "green.300" },
    iconBgColor: { base: "green.50", _dark: "green.800" },
    percent: -10,
    period: "month",
  },
  {
    title: "Inactive Agents",
    amount: 5,
    icon: <IoPeopleOutline />,
    iconColor: { base: "red.600", _dark: "red.300" },
    iconBgColor: { base: "red.50", _dark: "red.800" },
    percent: 10,
    period: "month",
  },
];

export default function Agents() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <GenericPage
      pageSummary={agentsSummary}
      pageTitle={"Agents"}
      pageTable={agentsList}
    />
  );
}
