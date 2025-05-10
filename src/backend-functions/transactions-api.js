const token = localStorage.getItem('POSPadiaccess')
const tokenRefresh = localStorage.getItem('POSPadirefresh')

export async function createTransaction(transactionDetails) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(transactionDetails),
    redirect: 'follow'
  };

  try {
    const response = await fetch("https://pos-padi-express-backend.onrender.com/api/v1/transactions", requestOptions);

    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const res = await response.json();
    console.log("Success:", res);

    return res
    // return agent;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function updateTransaction(id, transactionDetails) {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`); 
  myHeaders.append("Content-Type", "application/json");
  
  
  const requestOptions = {
    method: 'PUT',
    body: JSON.stringify(transactionDetails),
    headers: myHeaders,
    redirect: 'follow'
  };

  try {
    const response = await fetch(`https://pos-padi-express-backend.onrender.com//api/v1/transactions/${id}`, requestOptions);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const res = await response.json(); 
    console.log("Updated Details:", res);
  } catch (error) {
    console.error("Error:", error);
  }
}


export async function getTransactionById(id) {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`); 

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  try {
    const response = await fetch(`https://pos-padi-express-backend.onrender.com/api/v1/transactions/${id}`, requestOptions);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const transaction = await response.json(); 
    console.log("Transaction:", transaction);
    return transaction
  } catch (error) {
    console.error("Error:", error);
  }
}


export async function getAllTransactions() {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('POSPadiaccess')}`,
      'Content-Type': 'application/json'
    },
    redirect: 'follow'
  };

  try {
    const response = await fetch("https://pos-padi-express-backend.onrender.com/api/v1/transactions", requestOptions);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log("Transactions fetched:", result);
    return result;

  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw error;
  }
}


export async function getTransactionStats() {
  const myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  try {
    const response = await fetch("https://your-api-base-url.com/api/v1/transactions/stats", requestOptions); // Replace with your actual base URL

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log("Transaction stats:", result);
    return result;

  } catch (error) {
    console.error("Error fetching transaction stats:", error);
    throw error;
  }
}


export async function getAgentTransactionStats(agentId) {
  const myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  try {
    const response = await fetch(`https://your-api-base-url.com/api/v1/transactions/agent/${agentId}/stats`, requestOptions); // Replace with your actual base URL

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log(`Transaction stats for agent ${agentId}:`, result);
    return result;

  } catch (error) {
    console.error("Error fetching agent transaction stats:", error);
    throw error;
  }
}

