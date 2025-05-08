import { IoPeopleOutline } from "react-icons/io5";
import GenericPage from "@/components/alt/transactions/generic-table/GenericPage";
import { useEffect } from "react";
import { rawAgents, listAgents, transformAgents } from "../components/transactions/agentsMockData";
import { percentageDiff } from "@/utils/percentageDifference";



export default function Agents() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const agentsSummary = [
    {
      title: "Total Agents",
      amount: rawAgents.length,
      icon: <IoPeopleOutline />,
      iconColor: { base: "blue.600", _dark: "blue.300" },
      iconBgColor: { base: "blue.50", _dark: "blue.800" },
      percent: percentageDiff(rawAgents, 'agents', 'length', 'month').percentageChange,
      period: "month",
    },
    {
      title: "Active Agents",
      amount: rawAgents.filter(agent => agent.isActive).length,
      icon: <IoPeopleOutline />,
      iconColor: { base: "green.600", _dark: "green.300" },
      iconBgColor: { base: "green.50", _dark: "green.800" },
      percent: percentageDiff(rawAgents.filter(agent => agent.isActive), 'agents', 'length', 'month').percentageChange,
      period: "month",
    },
    {
      title: "Inactive Agents",
      amount: rawAgents.filter(agent => !agent.isActive).length,
      icon: <IoPeopleOutline />,
      iconColor: { base: "red.600", _dark: "red.300" },
      iconBgColor: { base: "red.50", _dark: "red.800" },
      percent: percentageDiff(rawAgents.filter(agent => !agent.isActive), 'agents', 'length', 'month').percentageChange,
      period: "month",
    },
  ];

  return (
    <>
      <GenericPage
        pageSummary={agentsSummary}
        pageTitle={"Agents"}
        pageTable={listAgents(rawAgents)}
      />
    </>
  );
}
