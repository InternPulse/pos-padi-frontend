export default function calculatePercentageDifference(currentValue, previousValue) {
    if (!previousValue || previousValue === 0) {
      return 0;
    }
    const difference = currentValue - previousValue;
    const percentageDifference = (difference / previousValue) * 100;
    return percentageDifference;
  }
  
  export function calculateTransactionKPI(transactions, periodStart, periodEnd) {
    const currentTransactions = transactions.filter(tx => {
      const txDate = new Date(tx.dateTime);
      return txDate >= periodStart && txDate <= periodEnd;
    });
  
    return currentTransactions.length;
  }

  export function calculateAgentKPI(agents, periodStart, periodEnd) {
    const currentAgentActions = agents.filter(agent => {
      const actionDate = new Date(agent.actionDate);
      return actionDate >= periodStart && actionDate <= periodEnd;
    });
  
    return currentAgentActions.length;
  }

  export function calculateCustomerKPI(customers, periodStart, periodEnd) {
    const currentCustomerInteractions = customers.filter(customer => {
      const interactionDate = new Date(customer.interactionDate);
      return interactionDate >= periodStart && interactionDate <= periodEnd;
    });
  
    return currentCustomerInteractions.length;
  }

  export function calculateDisputeKPI(disputes, periodStart, periodEnd) {
    const currentDisputes = disputes.filter(dispute => {
      const disputeDate = new Date(dispute.dateRaised);
      return disputeDate >= periodStart && disputeDate <= periodEnd;
    });
  
    return currentDisputes.length;
  }