

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzQ2MTgyNDE5LCJpYXQiOjE3NDU1Nzc2MTksImp0aSI6IjFhZWE5MWU1NDI0YjQ3ZGRiYTE2YWQ2NmJlNjY1MWY5IiwidXNlcl9pZCI6ImM3NGQ0OWM2LWUwZDItNDJlZC1iMmFlLTk5ODdhNjA5NTA2YiIsInJvbGUiOiJvd25lciJ9.P9cc9qboyC3oUBp0DBX_MKcwB3SS_RaZICYXR3QDpl0"


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

export async function onboardAgent(password = "Jonathan1@", confirmPassword = "Jonathan1@", token) {
  const url = 'https://pos-padi-django-backend.onrender.com/api/v1/agents/onboard/';  const body = {
    password: password,
    confirm_password: confirmPassword
  };  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': Bearer ${token}, // Replace with your actual token
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    });    const data = await response.json();    if (!response.ok) {
      throw new Error(data.message || 'Failed to onboard agent');
    }    return data;
  } catch (error) {
    console.error('Error onboarding agent:', error);
    throw error;
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
  
  