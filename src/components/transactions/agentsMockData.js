export const rawAgents = [
  {
    imageURL: 'https://i.pravatar.cc/150?u=timiojuromi',
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
    imageURL: 'https://i.pravatar.cc/150?u=amakaokoro',
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
  items: rawAgents.map(agent => {  // changed from RawAagents to workingAgents
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

// working agents 

const initialAgents = [
  {
    imageURL: 'https://i.pravatar.cc/150?u=default1',
    firstName: "Default",
    lastName: "Agent",
    email: "default.agent@example.com",
    phone: "0000000000",
    dateCreated: "January 1, 2025",
    agentId: "DEFAULT1",
    terminalId: "DEFAULTT1",
    isActive: false,
    performanceSummary: [],
  }
];

export const workingAgents = (rawAgents.length === 0) ? initialAgents : rawAgents;
