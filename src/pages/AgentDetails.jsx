import EntityDetails from "@/components/agent-details/EntityDetails";
import { rawAgents } from "@/components/transactions/agentsMockData";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { getAllCustomers } from "@/backend-functions/customers-api";
import { getAllAgents } from "@/backend-functions/agents-api";
import { getAllTransactions } from "@/backend-functions/transactions-api";
import { getNotifications } from "@/backend-functions/notifications";
import { getDisputes } from "@/backend-functions/dispute-api";
import { transformCustomers } from "@/components/transactions/customersMockData";
import { transformTransactions } from "@/components/transactions/transactionsMockData";
import { transformDisputes } from "@/components/transactions/disputesMockData";
import { transformNotifications } from "@/components/transactions/notificationsMockData";
import LoadingSpinner from "@/components/error-and-loading/LoadingSpinner";
import ErrorMsg from "@/components/error-and-loading/ErrorMsg";
import { transformAgents } from "@/components/transactions/agentsMockData";

function AgentDetails() {
  const { user, notifications, setNotifications, newTransaction } =
    useOutletContext();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [transactionsData, setTransactionsData] = useState([]);
  const [rawCustomersData, setRawCustomersData] = useState([]);
  const [disputesData, setDisputesData] = useState([]);
  const [agentsData, setAgentsData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    let ignore = false;

    async function fetchTransactionsData() {
      try {
        setLoading(true);

        const txData = await getAllTransactions();
        const dpData = await getDisputes();
        const notificationsData = await getNotifications();
        const customersData = await getAllCustomers();
        const agentsData = await getAllAgents();

        if (
          !ignore &&
          txData &&
          notificationsData &&
          customersData &&
          dpData &&
          agentsData
        ) {
          setTransactionsData(txData.data);
          setRawCustomersData(customersData.results);
          setNotifications(
            transformNotifications(notificationsData.data.notifications)
          );
          setDisputesData(transformDisputes(dpData.disputes));
          setAgentsData(agentsData.results);
        }
      } catch (error) {
        if (!ignore) {
          setTransactionsData(null);
          setNotifications([]);
          setRawCustomersData(null);
          setDisputesData(null);
          setAgentsData(null);
          //console.log(error)
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    fetchTransactionsData();

    return () => {
      ignore = true;
    };
  }, []);

  if (error) {
    return <ErrorMsg error={error} />;
  }
  if (loading) {
    return <LoadingSpinner />;
  }

  const transactions = transformTransactions(transactionsData);
  const rawCustomers = transformCustomers(rawCustomersData).rawCustomers;
  const rawAgents = transformAgents(agentsData).rawAgents;
  const disputedTransactions = disputesData;

  const agentID = useParams().id;
  const agent = rawAgents.find((agent) => agent.id == agentID);

  return (
    <EntityDetails
      entity={agent}
      disputedTransactions={disputedTransactions}
      transactions={transactions}
      entityType={"agent"}
    />
  );
}

export default AgentDetails;
