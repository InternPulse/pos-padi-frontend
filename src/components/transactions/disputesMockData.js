
// initial Disputes
const initialDisputes = [
  {
    reference: "DEFAULT001",
    reason: "Default dispute reason",
    disputeStatus: "pending",
  },
];

// existing original dispute data

export const disputes = [
  {
    reference: "TXN003",
    reason: "Declined, but customer got debited",
    disputeStatus: "resolved",
  },
  {
    reference: "TXN005",
    reason: "Transaction completed, but customer yet to be credited",
    disputeStatus: "pending",
  },
  {
    reference: "TXN008",
    reason: "Declined, but customer got debited",
    disputeStatus: "pending",
  },
  {
    reference: "TXN013",
    reason: "Transaction completed, but customer yet to be credited",
    disputeStatus: "resolved",
  },
  {
    reference: "TXN016",
    reason: "Declined, but customer got debited",
    disputeStatus: "pending",
  },
  {
    reference: "TXN020",
    reason: "Transaction completed, but customer yet to be credited",
    disputeStatus: "resolved",
  },
  {
    reference: "TXN023",
    reason: "Declined, but customer got debited",
    disputeStatus: "pending",
  },
  {
    reference: "TXN028",
    reason: "Transaction completed, but customer yet to be credited",
    disputeStatus: "pending",
  },
  {
    reference: "TXN032",
    reason: "Declined, but customer got debited",
    disputeStatus: "resolved",
  },
  {
    reference: "TXN036",
    reason: "Transaction completed, but customer yet to be credited",
    disputeStatus: "resolved",
  },
  {
    reference: "TXN043",
    reason: "Declined, but customer got debited",
    disputeStatus: "pending",
  },
  {
    reference: "TXN050",
    reason: "Transaction completed, but customer yet to be credited",
    disputeStatus: "resolved",
  },
  {
    reference: "TXN054",
    reason: "Declined, but customer got debited",
    disputeStatus: "pending",
  },
  {
    reference: "TXN060",
    reason: "Transaction completed, but customer yet to be credited",
    disputeStatus: "pending",
  },
  {
    reference: "TXN065",
    reason: "Declined, but customer got debited",
    disputeStatus: "resolved",
  },
  {
    reference: "TXN069",
    reason: "Transaction completed, but customer yet to be credited",
    disputeStatus: "pending",
  },
  {
    reference: "TXN075",
    reason: "Declined, but customer got debited",
    disputeStatus: "resolved",
  },
  {
    reference: "TXN082",
    reason: "Transaction completed, but customer yet to be credited",
    disputeStatus: "pending",
  },
  {
    reference: "TXN091",
    reason: "Declined, but customer got debited",
    disputeStatus: "resolved",
  },
];

export const rawDisputes = disputes.length === 0 ? initialDisputes : disputes;


export const disputesList = {
  headings: {
    isHeader: true,
    item1: "Reference",
    item2: "Reason",
    item3: "Dispute Status",
  },
  items: rawDisputes.map((dispute) => {
    return {
      isHeader: false,
      item1: dispute.reference,
      item2: dispute.reason,
      item3: dispute.disputeStatus,
    };
  }),
};
