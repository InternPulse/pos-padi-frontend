export function createAgent(agentData) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(agentData),
      redirect: 'follow'
    };
  
    fetch("https://pos-padi-django-backend.onrender.com/api/v1/agents/", requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(result => console.log("Agent created:", result))
      .catch(error => console.error("Error creating agent:", error));
  }
  

export function getUserSummary(basicAuthUsername, basicAuthPassword) {
    // Base64 encode the username:password
    // const credentials = btoa(`${basicAuthUsername}:${basicAuthPassword}`);
  
    // Set up the request headers
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzQ2MDg5MTgzLCJpYXQiOjE3NDU0ODQzODMsImp0aSI6IjRhOGMyYmU2YmU3MzQxODhiNGY4NDMyM2ZjODBjNWE3IiwidXNlcl9pZCI6IjQ4NTBmZmFkLWExMWYtNGFiNS1iOGNkLTQ4N2QyODMzZWFlNCIsInJvbGUiOiJvd25lciJ9.OykCJ18tHyLGefRPQyTTXqJK5CZw39PEj3HiVFAFN-8`);  // Add Base64-encoded username:password
  
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
  
  