

const token = import.meta.env.BEARER_TOKEN


export async function createOwner(ownerData) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(ownerData),
    redirect: 'follow'
  };

  try {
    const response = await fetch("https://pos-padi-django-backend.onrender.com/api/v1/users/register/", requestOptions);

    console.log(response)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const owner = await response.json();
    console.log("Owner created:", result);
    return owner;
  } catch (error) {
    console.error("Error creating agent:", error);
    throw error;
  }
}

export async function verifyOwner(ownerData) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(ownerData),
    redirect: 'follow'
  };

  try {
    const response = await fetch("https://pos-padi-django-backend.onrender.com/api/v1/users/verify/", requestOptions);

    console.log(response)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const message = await response.json();
    console.log("Owner created:", result);
    return message;
  } catch (error) {
    console.error("Error creating agent:", error);
    throw error;
  }
}

export async function createCompany(companyData) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(companyData),
    redirect: 'follow'
  };

  try {
    const response = await fetch("https://pos-padi-django-backend.onrender.com/api/v1/companies/", requestOptions);

    console.log(response)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const company = await response.json();
    console.log("Company created:", result);
    return company;
  } catch (error) {
    console.error("Error creating agent:", error);
    throw error;
  }
}


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

    console.log(response)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log("Agent created:", result);
    return result;
  } catch (error) {
    console.error("Error creating agent:", error);
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

    const allAgents = await response.json(); 
    console.log("Agents:", result);
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
    console.log("Agents:", result);
  } catch (error) {
    console.error("Error fetching agents:", error);
  }
}
 

export function getUserSummary() {
   
    // Set up the request headers
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzQ2MTg2Nzc3LCJpYXQiOjE3NDU1ODE5NzcsImp0aSI6IjdlY2FmMTg5YzVmOTRlOTNhMmY1NmMyMDIzMWI0ZDJjIiwidXNlcl9pZCI6ImM3NGQ0OWM2LWUwZDItNDJlZC1iMmFlLTk5ODdhNjA5NTA2YiIsInJvbGUiOiJvd25lciJ9.Pch8S8hsDATLaevAZYpqWSu3K5kaMagwsfswu3l2H5c`);  // Add Base64-encoded 
  
    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
  
    // Make the fetch request
    fetch("https://pos-padi-django-backend.onrender.com/api/v1/users/summary/", requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();  // Parse JSON response
      })
      .then(result => console.log("User Summary:", result))
      .catch(error => console.error("Error fetching user summary:", error));
  }
  
  