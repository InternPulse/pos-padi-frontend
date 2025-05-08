const token = localStorage.getItem('POSPadiaccess')
const tokenRefresh = localStorage.getItem('POSPadirefresh')

export async function createCustomer(formValues, file) {
  const myHeaders = newHeaders();
  myHeaders.append("Authorization", `Bearer ${token}`); 

  const formData = new FormData();
  formData.append("user", formValues.user);
  formData.append("name", formValues.name);
  formData.append("tag", formValues.tag);

  if (file) {
    formData.append("photo", file); 
  }

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formData,
    redirect: 'follow',
  };

  try {
    const response = await fetch("https://pos-padi-django-backend.onrender.com/api/v1/customers/", requestOptions);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const customer = await response.json();
    console.log("Customer created:", customer);
    return customer;

  } catch (error) {
    console.error("Error creating customer:", error);
    throw error;
  }
}

export async function getAllCustomers(search = "", ordering = "", page = "") {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`); 
  
  
    let url = `https://pos-padi-django-backend.onrender.com/api/v1/customers/`;
    
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
  
      const customers = await response.json(); 
      console.log("Customers:", customers);
      return customers
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  }


export async function getCustomer(id) {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`); 

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  try {
    const response = await fetch(`https://pos-padi-django-backend.onrender.com/api/v1/customers/${id}/`, requestOptions);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const customer = await response.json(); 
    console.log("Customer:", result);
    return customer
  } catch (error) {
    console.error("Error fetching agents:", error);
  }
}
   

export async function updateCustomerInfo(customerData, id) {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`); 
  myHeaders.append("Content-Type", "application/json");
  
  
  const requestOptions = {
    method: 'PUT',
    body: JSON.stringify(customerData),
    headers: myHeaders,
    redirect: 'follow'
  };

  try {
    const response = await fetch(`https://pos-padi-django-backend.onrender.com/api/v1/customers/${id}/`, requestOptions);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const res = await response.json(); 
    console.log("Customer Data:", res);
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function deleteCustomer(id) {
const myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${token}`); 


const requestOptions = {
  method: 'DELETE',
  headers: myHeaders,
  redirect: 'follow'
};

try {
  const response = await fetch(`https://pos-padi-django-backend.onrender.com/api/v1/customers/${id}/`, requestOptions);
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  if (response.status === 204) {
    console.log("Customer successfully deleted.");
    return null;
  }

  const message = response.json(); 
  console.log("Success:", message);
} catch (error) {
  console.error("Error:", error);
}
}


export async function getCustomerTransactions(id) {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`); 

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  try {
    const response = await fetch(`https://pos-padi-django-backend.onrender.com/api/v1/customers/${id}/transactions/`, requestOptions);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const transactions = await response.json(); 
    console.log("Customer Transactions:", transactions);
    return transactions
  } catch (error) {
    console.error("Error fetching agents:", error);
  }
}


export async function getTransactionSummary(id) {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`); 

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  try {
    const response = await fetch(`https://pos-padi-django-backend.onrender.com/api/v1/customers/${id}/transaction_summary/`, requestOptions);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const summary = await response.json(); 
    console.log("Transaction Summary:", summary);
    return summary
  } catch (error) {
    console.error("Error fetching agents:", error);
  }
}

