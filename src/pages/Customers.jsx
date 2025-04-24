import { customersList } from "@/components/transactions/customersMockData";
import { GrGroup } from "react-icons/gr";
import GenericPage from "@/components/alt/transactions/generic-table/GenericPage";

const customersSummary = [
  {
    title: "Total Customers",
    amount: 8000,
    icon: <GrGroup />,
    iconColor: { base: "blue.600", _dark: "blue.300" },
    iconBgColor: { base: "blue.50", _dark: "blue.800" },
    percent: 1,
    period: "month",
  },
  {
    title: "Active Customers",
    amount: 7000,
    icon: <GrGroup />,
    iconColor: { base: "green.600", _dark: "green.300" },
    iconBgColor: { base: "green.50", _dark: "green.800" },
    percent: 5,
    period: "month",
  },
  {
    title: "Inactive Customers",
    amount: 1000,
    icon: <GrGroup />,
    iconColor: { base: "red.600", _dark: "red.300" },
    iconBgColor: { base: "red.50", _dark: "red.800" },
    percent: -0.5,
    period: "month",
  },
];

function Customers() {
  return (
    <GenericPage
      pageSummary={customersSummary}
      pageTitle={"Customers"}
      pageTable={customersList}
    />
  );
}

export default Customers;
