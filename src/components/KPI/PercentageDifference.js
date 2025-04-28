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