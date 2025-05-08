const token = localStorage.getItem('POSPadiaccess')
const tokenRefresh = localStorage.getItem('POSPadirefresh')

export async function createAgent(agentData) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(agentData),
    redirect: 'follow'
  };

  try {
    const response = await fetch("https://pos-padi-django-backend.onrender.com/api/v1/agents/", requestOptions);

    // console.log(response)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const agent = await response.json();
    console.log("Agent created:", agent);
    
  } catch (error) {
    console.error("Error creating agent:", error);
    throw error;
  }
}

export async function onboardAgent(passwordData) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);
  
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(passwordData),
      redirect: 'follow'
    };
  
    try {
      const response = await fetch("https://pos-padi-django-backend.onrender.com/api/v1/agents/", requestOptions);
  
    //   console.log(response)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const message = await response.json();
      console.log("Feedback:", message);
      return message;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }


export async function getAllAgents(search = "", ordering = "", page = 1) {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`); 
  
    // Construct the URL dynamically based on provided parameters
    let url = `https://pos-padi-django-backend.onrender.com/api/v1/agents/?page=${page}`;
    
    if (search) url += `&search=${encodeURIComponent(search)}`;
    if (ordering) url += `&ordering=${encodeURIComponent(ordering)}`;
  
    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
  
    try {
      const response = await fetch(url, requestOptions);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const agents = await response.json(); 
      console.log("Agents:", agents);
      return agents
    } catch (error) {
      console.error("Error fetching agents:", error);
    }
  }
  
  export async function getAgent(id) {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`); 
  
    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
  
    try {
      const response = await fetch(`https://pos-padi-django-backend.onrender.com/api/v1/agents/${id}/`, requestOptions);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const agent = await response.json(); 
      console.log("Agent:", result);
      return agent
    } catch (error) {
      console.error("Error fetching agents:", error);
    }
  }
   