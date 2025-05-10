export const disputes = [
  {
    reference: "TXN003",
    reason: "Declined, but customer got debited",
    disputeStatus: "resolved"
  },
  {
    reference: "TXN005",
    reason: "Transaction completed, but customer yet to be credited",
    disputeStatus: "pending"
  },
  {
    reference: "TXN008",
    reason: "Declined, but customer got debited",
    disputeStatus: "pending"
  },
  {
    reference: "TXN013",
    reason: "Transaction completed, but customer yet to be credited",
    disputeStatus: "resolved"
  },
  {
    reference: "TXN016",
    reason: "Declined, but customer got debited",
    disputeStatus: "pending"
  },
  {
    reference: "TXN020",
    reason: "Transaction completed, but customer yet to be credited",
    disputeStatus: "resolved"
  },
  {
    reference: "TXN023",
    reason: "Declined, but customer got debited",
    disputeStatus: "pending"
  },
  {
    reference: "TXN028",
    reason: "Transaction completed, but customer yet to be credited",
    disputeStatus: "pending"
  },
  {
    reference: "TXN032",
    reason: "Declined, but customer got debited",
    disputeStatus: "resolved"
  },
  {
    reference: "TXN036",
    reason: "Transaction completed, but customer yet to be credited",
    disputeStatus: "resolved"
  },
  {
    reference: "TXN043",
    reason: "Declined, but customer got debited",
    disputeStatus: "pending"
  },
  {
    reference: "TXN050",
    reason: "Transaction completed, but customer yet to be credited",
    disputeStatus: "resolved"
  },
  {
    reference: "TXN054",
    reason: "Declined, but customer got debited",
    disputeStatus: "pending"
  },
  {
    reference: "TXN060",
    reason: "Transaction completed, but customer yet to be credited",
    disputeStatus: "pending"
  },
  {
    reference: "TXN065",
    reason: "Declined, but customer got debited",
    disputeStatus: "resolved"
  },
  {
    reference: "TXN069",
    reason: "Transaction completed, but customer yet to be credited",
    disputeStatus: "pending"
  },
  {
    reference: "TXN075",
    reason: "Declined, but customer got debited",
    disputeStatus: "resolved"
  },
  {
    reference: "TXN082",
    reason: "Transaction completed, but customer yet to be credited",
    disputeStatus: "pending"
  },
  {
    reference: "TXN091",
    reason: "Declined, but customer got debited",
    disputeStatus: "resolved"
  }
]

export function transformDispute(dispute){
  return {
    id: dispute.id,
    reference: dispute.transaction.reference,
    reason: dispute.reason,
    disputeStatus: dispute.status,
    agent: (dispute.transaction.agent.first_name + ' ' + dispute.transaction.agent.last_name),
    amount: dispute.transaction.amount,
    customer: (dispute.transaction.customer.first_name + ' ' + dispute.transaction.customer.last_name),
    dateTime: dispute.transaction.created_at,
    fee: dispute.transaction.fee,
    loyaltyPoints: dispute.transaction.fee * 0.1,
    status: dispute.transaction.status,
    type: dispute.transaction.type
    //transaction: dispute.transaction

  }
}

export function transformDisputes(arr){
  let disputesData;

  if(arr.length > 0){
    disputesData = arr.map(item => transformDispute(item))
  }else{
    disputesData = []
  }

  return disputesData
}