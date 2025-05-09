import {
  rawCustomers,
  listCustomers,
  transformCustomers,
} from "@/components/transactions/customersMockData";
import { transactions } from "@/components/transactions/transactionsMockData";
import { GrGroup } from "react-icons/gr";
import GenericPage from "@/components/alt/transactions/generic-table/GenericPage";
import { useEffect, useState } from "react";
import { percentageDiff } from "@/utils/percentageDifference";
import { RailSymbol } from "lucide-react";
import { transform } from "framer-motion";
import { useOutletContext } from "react-router-dom";
import { getAllCustomers } from "@/backend-functions/customers-api";
import { getNotifications } from "@/backend-functions/notifications";
import LoadingSpinner from "@/components/error-and-loading/LoadingSpinner";
import ErrorMsg from "@/components/error-and-loading/ErrorMsg";
import { transformNotifications } from "@/components/transactions/notificationsMockData";

export function processCustomers(rawCustomers, transactions) {
  const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000; // 30 days in milliseconds
  const now = new Date();

  // Create a map to track the most recent transaction date per customer
  const customerLastTransaction = {};

  transactions.forEach((tx) => {
    const customerName = tx.customer;
    const txDate = new Date(tx.dateTime);

    if (
      !customerLastTransaction[customerName] ||
      txDate > customerLastTransaction[customerName]
    ) {
      customerLastTransaction[customerName] = txDate;
    }
  });

  const processedCustomers = rawCustomers.map((customer) => {
    const fullName = `${customer.firstName} ${customer.lastName}`;
    const lastTxDate = customerLastTransaction[fullName];

    const isActive = lastTxDate ? now - lastTxDate <= THIRTY_DAYS_MS : false;

    return {
      ...customer,
      isActive,
    };
  });

  return processedCustomers;
}

function Customers() {
  const { user, notifications, setNotifications } = useOutletContext();

  const [rawCustomersData, setRawCustomersData] = useState(() => {
    return transformCustomers([]).rawCustomers;
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

        let ignore = false;
    
        async function fetchCustomerData() {
          try {
            setLoading(true);
    
            const customersData = await getAllCustomers();
            const notificationsData = await getNotifications();
    
            if (!ignore && customersData && notificationsData) {
              
              setRawCustomersData(customersData.results);
              setNotifications(transformNotifications(notificationsData.data.notifications))
            }
    
    
          } catch (err) {
            if (!ignore) {
              setError(err.message);
              setRawCustomersData(null);
              setNotifications(null)
            }
          } finally {
            if (!ignore) {
              setLoading(false);
            }
          }
        }
    
        fetchCustomerData();
    
        return () => {
          ignore = true;
        };

  }, []);

  if(error){ return <ErrorMsg error={error} />}
  if(loading){ return <LoadingSpinner /> }


  const rawCustomers = transformCustomers(rawCustomersData).rawCustomers
  const customersList = transformCustomers(rawCustomersData).customersList

  const customersSummary = [
    {
      title: "Total Customers",
      amount: rawCustomers.length,
      icon: <GrGroup />,
      iconColor: { base: "blue.600", _dark: "blue.300" },
      iconBgColor: { base: "blue.50", _dark: "blue.800" },
      percent: percentageDiff(rawCustomers, "customers", "length", "month")
        .percentageChange,
      period: "month",
    },
    {
      title: "Active Customers",
      amount: processCustomers(rawCustomers, transactions).filter(
        (customer) => customer.isActive
      ).length,
      icon: <GrGroup />,
      iconColor: { base: "green.600", _dark: "green.300" },
      iconBgColor: { base: "green.50", _dark: "green.800" },
      percent: percentageDiff(
        rawCustomers.filter((c) => c.isActive),
        "customers",
        "length",
        "month"
      ).percentageChange,
      period: "month",
    },
    {
      title: "Inactive Customers",
      amount: processCustomers(rawCustomers, transactions).filter(
        (customer) => !customer.isActive
      ).length,
      icon: <GrGroup />,
      iconColor: { base: "red.600", _dark: "red.300" },
      iconBgColor: { base: "red.50", _dark: "red.800" },
      percent: percentageDiff(
        rawCustomers.filter((c) => !c.isActive),
        "customers",
        "length",
        "month"
      ).percentageChange,
      period: "month",
    },
  ];

  return (
    <GenericPage
      pageSummary={customersSummary}
      pageTitle={"Customers"}
      pageTable={customersList}
    />
  );
}

export default Customers;
