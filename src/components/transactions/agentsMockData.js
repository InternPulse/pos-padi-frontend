export const rawAgents = [
  {
    imageURL: "https://i.pravatar.cc/150?u=timiojuromi",
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
    imageURL: "https://i.pravatar.cc/150?u=amakaokoro",
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

export function listAgents(arr) {
  return {
    headings: {
      isHeader: true,
      item1: "ID",
      item2: "First Name",
      item3: "Last Name",
      item5: "Email",
      item6: "Phone Number",
    },
    items: arr.map((agent) => {
      return {
        isHeader: false,
        item1: agent.agentId,
        item2: agent.firstName,
        item3: agent.lastName,
        item5: agent.email,
        item6: agent.phone,
      };
    }),
  };
}

{
  /**
  [
        {
            "user_id": {
                "id": "9e6042de-d90d-475e-a7cb-cb9f2dfa24a3",
                "email": "sheriff@deen.com",
                "first_name": "Sheriff",
                "last_name": "Deen",
                "phone": "+234000000001",
                "role": "agent",
                "photo": null
            },
            "created_at": "2025-05-07T12:45:58.902596Z",
            "updated_at": "2025-05-07T12:45:59.537390Z",
            "is_active": true,
            "agent_id": "392682",
            "commission": null,
            "rating": "0.0",
            "status": "active",
            "company": "d8ef24ce-d7bb-41d8-84a2-be7469bc8cbf"
        }
    ]


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
  }

  */
}

function transformAgentData(agent) {
  return {
    id: agent.user_id.id,
    imageURL: null,
    firstName: agent.user_id.first_name,
    lastName: agent.user_id.last_name,
    email: agent.user_id.email || "unavailable",
    phone: agent.user_id.phone,
    dateCreated: agent.created_at,
    agentId: agent.agent_id,
    isActive: agent.is_active,
    company: agent.company,
    performanceSummary: [],
  };
}

export function transformAgents(arr) {
  let agentsData;
  let agentsDataList;

  const initialState = [
    {
      id: "",
      imageURL: null,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      dateCreated: "",
      agentId: "",
      isActive: false,
      company: "",
      performanceSummary: [],
    },
  ];

  if (arr.length > 0) {
    agentsData = arr.map((item) => transformAgentData(item));
  } else {
    agentsData = [];
  }

  if (arr.length > 0) {
    agentsDataList = listAgents(agentsData);

  } else {

    agentsDataList = listAgents(initialState);
  }


  return {
    rawAgents: agentsData,
    agentsList: agentsDataList
  }

}
