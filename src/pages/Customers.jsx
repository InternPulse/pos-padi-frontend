import { rawCustomers, listCustomers, transformCustomers } from "@/components/transactions/customersMockData";
import { transactions } from "@/components/transactions/transactionsMockData";
import { GrGroup } from "react-icons/gr";
import GenericPage from "@/components/alt/transactions/generic-table/GenericPage";
import { useEffect } from "react";
import { percentageDiff } from "@/utils/percentageDifference";
import { RailSymbol } from "lucide-react";
import { transform } from "framer-motion";

export function processCustomers(rawCustomers, transactions) {
  const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000; // 30 days in milliseconds
  const now = new Date();

  // Create a map to track the most recent transaction date per customer
  const customerLastTransaction = {};

  transactions.forEach((tx) => {
    const customerName = tx.customer;
    const txDate = new Date(tx.dateTime);

    if (!customerLastTransaction[customerName] || txDate > customerLastTransaction[customerName]) {
      customerLastTransaction[customerName] = txDate;
    }
  });

  const processedCustomers = rawCustomers.map((customer) => {
    const fullName = `${customer.firstName} ${customer.lastName}`;
    const lastTxDate = customerLastTransaction[fullName];

    const isActive = lastTxDate ? (now - lastTxDate <= THIRTY_DAYS_MS) : false;

    return {
      ...customer,
      isActive,
    };
  });

  return processedCustomers;
}



function Customers() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const customersSummary = [
    {
      title: "Total Customers",
      amount: rawCustomers.length,
      icon: <GrGroup />,
      iconColor: { base: "blue.600", _dark: "blue.300" },
      iconBgColor: { base: "blue.50", _dark: "blue.800" },
      percent: percentageDiff(rawCustomers, 'customers', 'length', 'month').percentageChange,
      period: "month",
    },
    {
      title: "Active Customers",
      amount: processCustomers(rawCustomers,transactions).filter(customer => customer.isActive).length,
      icon: <GrGroup />,
      iconColor: { base: "green.600", _dark: "green.300" },
      iconBgColor: { base: "green.50", _dark: "green.800" },
      percent: percentageDiff(rawCustomers.filter(c => c.isActive), 'customers', 'length', 'month').percentageChange,
      period: "month",
    },
    {
      title: "Inactive Customers",
      amount: processCustomers(rawCustomers,transactions).filter(customer => !customer.isActive).length,
      icon: <GrGroup />,
      iconColor: { base: "red.600", _dark: "red.300" },
      iconBgColor: { base: "red.50", _dark: "red.800" },
      percent: percentageDiff(rawCustomers.filter(c => !c.isActive), 'customers', 'length', 'month').percentageChange,
      period: "month",
    },
  ];

  return (
    <GenericPage
      pageSummary={customersSummary}
      pageTitle={"Customers"}
      pageTable={listCustomers(rawCustomers)}
    />
  );
}

export default Customers;
