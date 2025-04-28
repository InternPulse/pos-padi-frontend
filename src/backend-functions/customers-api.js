export async function createCustomer(customerData) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(customerData),
    redirect: 'follow'
  };

  try {
    const response = await fetch("https://pos-padi-django-backend.onrender.com/api/v1/customers/", requestOptions);

    // console.log(response)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const customer = await response.json();
 
    return customer;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function getAllCustomers(search = "", ordering = "", page = 1) {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`); 
  
    // Construct the URL dynamically based on provided parameters
    let url = `https://pos-padi-django-backend.onrender.com/api/v1/customers/?page=${page}`;
    
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
      console.log("Customers:", agents);
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
    } catch (error) {
      console.error("Error fetching agents:", error);
    }
  }
   