import { IoPeopleOutline } from "react-icons/io5";
import GenericPage from "@/components/alt/transactions/generic-table/GenericPage";
import { useEffect, useState } from "react";
import { transformAgents } from "../components/transactions/agentsMockData";
import { percentageDiff } from "@/utils/percentageDifference";
import ErrorMsg from "@/components/error-and-loading/ErrorMsg";
import LoadingSpinner from "@/components/error-and-loading/LoadingSpinner";
import { getAllAgents } from "@/backend-functions/agents-api";
import { useOutletContext } from "react-router-dom";
import { getNotifications } from "@/backend-functions/notifications";
import { transformNotifications } from "@/components/transactions/notificationsMockData";

export default function Agents() {
  const { user, notifications, setNotifications } = useOutletContext()

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [ agentsData, setAgentsData ] = useState([])

  useEffect(() => {
    window.scrollTo(0, 0);

    let ignore = false;

    async function fetchAgentsData(){
      try {
        setLoading(true)

        const agentsData = await getAllAgents();
        const notificationsData = await getNotifications();

        if(!ignore && agentsData && notificationsData){
          setAgentsData(agentsData.results)
          setNotifications(transformNotifications(notificationsData.data.notifications))
        }

      }catch(error){
        if(!ignore){
          setError(error.message)
          setAgentsData(null)
          setNotifications([])
        }
      }finally{
        if(!ignore){
          setLoading(false)
        }
      }

    }

    fetchAgentsData()

    return () => {
      ignore = true;
    }

  }, []);

  if(error){ return <ErrorMsg error={error} />}
  if(loading){ return <LoadingSpinner />}

  const rawAgents = transformAgents(agentsData).rawAgents
  const agentsList = transformAgents(agentsData).agentsList

  const agentsSummary = [
    {
      title: "Total Agents",
      amount: rawAgents.length,
      icon: <IoPeopleOutline />,
      iconColor: { base: "blue.600", _dark: "blue.300" },
      iconBgColor: { base: "blue.50", _dark: "blue.800" },
      percent: percentageDiff(rawAgents, "agents", "length", "month")
        .percentageChange,
      period: "month",
    },
    {
      title: "Active Agents",
      amount: rawAgents.filter((agent) => agent.isActive).length,
      icon: <IoPeopleOutline />,
      iconColor: { base: "green.600", _dark: "green.300" },
      iconBgColor: { base: "green.50", _dark: "green.800" },
      percent: percentageDiff(
        rawAgents.filter((agent) => agent.isActive),
        "agents",
        "length",
        "month"
      ).percentageChange,
      period: "month",
    },
    {
      title: "Inactive Agents",
      amount: rawAgents.filter((agent) => !agent.isActive).length,
      icon: <IoPeopleOutline />,
      iconColor: { base: "red.600", _dark: "red.300" },
      iconBgColor: { base: "red.50", _dark: "red.800" },
      percent: percentageDiff(
        rawAgents.filter((agent) => !agent.isActive),
        "agents",
        "length",
        "month"
      ).percentageChange,
      period: "month",
    },
  ];

  return (
    <>
      <GenericPage
        pageSummary={agentsSummary}
        pageTitle={"Agents"}
        pageTable={agentsList}
      />
    </>
  );
}
