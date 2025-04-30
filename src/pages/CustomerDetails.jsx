import EntityDetails from "@/components/agent-details/EntityDetails";
import { transactions } from "@/components/transactions/transactionsMockData";
import { rawCustomers } from "@/components/transactions/customersMockData";
import { processCustomers } from "./Customers";
import { useParams } from "react-router-dom";

function CustomerDetails() {
  const customerID = useParams().id
  const customer = processCustomers(rawCustomers, transactions).find(customer => customer.customerId == customerID);
  
  const customerFullName  = `${customer.firstName} ${customer.lastName}`

  customer.loyaltyPoints = transactions.filter(tx => tx.customer == customerFullName).reduce((acc, item) => acc + item.loyaltyPoints, 0)

  return (
    <EntityDetails entity={customer} entityType={'customer'} />
  )
}

export default CustomerDetails