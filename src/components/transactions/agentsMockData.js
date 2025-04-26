export const rawAgents = [
  {
    imageURL: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04",
    firstName: "Timi",
    lastName: "Ojuromi",
    email: "Timivibesojuromi@gmail.com",
    phone: "07055334567",
    dateCreated: "April 18, 2025",
    agentId: "VDKJNKR12",
    terminalId: "TKKJNKR12",
    isActive: true,
    performanceSummary: [],
  },
  {
    imageURL: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04",
    firstName: "Amaka",
    lastName: "Okoro",
    email: "amaka.okoro@example.com",
    phone: "08123456789",
    dateCreated: "April 18, 2025",
    agentId: "HDKLPQX34",
    terminalId: "TKKJNKR13",
    isActive: false,
    performanceSummary: [],
  },
];

export const agentsList = {
  headings: {
    isHeader: true,
    item1: "ID",
    item2: "First Name",
    item3: "Last Name",
    item5: "Email",
    item6: "Phone Number",
  },
  items: rawAgents.map(agent => {
    return {
      isHeader: false,
      item1: agent.agentId,
      item2: agent.firstName,
      item3: agent.lastName,
      item5: agent.email,
      item6: agent.phone
    }
  })
};
