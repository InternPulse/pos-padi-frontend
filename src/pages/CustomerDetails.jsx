import EntityDetails from "@/components/agent-details/EntityDetails";
import { transactions } from "@/components/transactions/transactionsMockData";
import { rawCustomers } from "@/components/transactions/customersMockData";
import { processCustomers } from "./Customers";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { getAllCustomers } from "@/backend-functions/customers-api";
import { getAllTransactions } from "@/backend-functions/transactions-api";
import { getNotifications } from "@/backend-functions/notifications";
import { getDisputes } from "@/backend-functions/dispute-api";
import { transformCustomers } from "@/components/transactions/customersMockData";
import { transformTransactions } from "@/components/transactions/transactionsMockData";
import { transformDisputes } from "@/components/transactions/disputesMockData";
import { transformNotifications } from "@/components/transactions/notificationsMockData";
import LoadingSpinner from "@/components/error-and-loading/LoadingSpinner";
import ErrorMsg from "@/components/error-and-loading/ErrorMsg";

function CustomerDetails() {
  const { user, notifications, setNotifications, newTransaction } =
    useOutletContext();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [transactionsData, setTransactionsData] = useState([]);
  const [rawCustomersData, setRawCustomersData] = useState([]);
  const [disputesData, setDisputesData] = useState([]);

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

        if (!ignore && txData && notificationsData && customersData && dpData) {
          setTransactionsData(txData.data);
          setRawCustomersData(customersData.results);
          setNotifications(
            transformNotifications(notificationsData.data.notifications)
          );
          setDisputesData(transformDisputes(dpData.disputes));
        }
      } catch (error) {
        if (!ignore) {
          setTransactionsData(null);
          setNotifications([]);
          setRawCustomersData(null);
          setDisputesData(null);
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
  const disputedTransactions = disputesData;

  const customerID = useParams().id;
  const customer = processCustomers(rawCustomers, transactions).find(
    (customer) => customer.id == customerID
  );

  const customerFullName = `${customer.firstName} ${customer.lastName}`;

  customer.loyaltyPoints = transactions
    .filter(
      (tx) => tx.customer == customerFullName && tx.status == "successful"
    )
    .reduce((acc, item) => acc + item.loyaltyPoints, 0);

  return (
    <EntityDetails
      entity={customer}
      disputedTransactions={disputedTransactions}
      transactions={transactions}
      entityType={"customer"}
    />
  );
}

export default CustomerDetails;
