const token = import.meta.env.BEARER_TOKEN

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
    const response = await fetch("https://pos-padi-django-backend.onrender.com/api/v1/users/verify/", requestOptions);

    // console.log(response)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const company = await response.json();
    console.log("Company created:", company);
    return res;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function companyDetails(search = "", ordering = "", page = 1) {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`); 

  // Construct the URL dynamically based on provided parameters
  let url = `https://pos-padi-django-backend.onrender.com/api/v1/companies/?page=${page}`;
  
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

    const companies = await response.json(); 
    console.log("Companies:", companies);
  } catch (error) {
    console.error("Error fetching companies:", error);
  }
}

export async function getCompanyMetrics() {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`); 
  
    // Construct the URL dynamically based on provided parameters
    let url = `https://pos-padi-django-backend.onrender.com/api/v1/companies/dashboard/`;
    
   
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
  
      const companyData = await response.json(); 
      console.log("Companies:", companyData);
    } catch (error) {
      console.error("Error:", error);
    }
  }


export async function deleteCompany(Id) {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`); 
    
   
    const requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      redirect: 'follow'
    };
  
    try {
      const response = await fetch("https://pos-padi-django-backend.onrender.com/api/v1/companies/:id/", requestOptions);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const message = await response.json(); 
      console.log("Success:", message);
    } catch (error) {
      console.error("Error:", error);
    }
  }


  export async function updateCompanyInfo(companyData) {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`); 
    
   
    const requestOptions = {
      method: 'PUT',
      body: JSON.stringify(companyData),
      headers: myHeaders,
      redirect: 'follow'
    };
  
    try {
      const response = await fetch("https://pos-padi-django-backend.onrender.com/api/v1/companies/:id/", requestOptions);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const companyData = await response.json(); 
      console.log("Company Data:", companyData);
    } catch (error) {
      console.error("Error:", error);
    }
  }