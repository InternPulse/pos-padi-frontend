import AuthContext from "@/Authentication/AuthProvider";

const token = localStorage.getItem('POSPadiaccess')
const tokenRefresh = localStorage.getItem('POSPadirefresh')


// Authentication


export async function registerUser(userData) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(userData),
    redirect: 'follow'
  };

  try {
    const response = await fetch("https://pos-padi-django-backend.onrender.com/api/v1/users/register/", requestOptions);

    // console.log(response)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const newUser = await response.json();
    console.log("User created:", newUser);
    return newUser;
  } catch (error) {
    console.error("Error creating new user:", error);
    throw error;
  }
}

export async function loginUser(userData) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  // myHeaders.append("Authorization", `Bearer ${token}`);
  
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(userData),
    redirect: 'follow'
  };

  try {
    const response = await fetch("https://pos-padi-django-backend.onrender.com/api/v1/users/login/", requestOptions);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    localStorage.setItem('POSPadiaccess', data.access)
    localStorage.setItem('POSPadirefresh', data.refresh)
    // console.log("Login successful:", newUser);
    return response;
  } catch (error) {
    console.error("Error logging in", error);
    throw error;
  }
}

export async function logoutUser() {
  
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(tokenRefresh),
    redirect: 'follow'
  };

  try {
    const response = await fetch("https://pos-padi-django-backend.onrender.com/api/v1/users/logout/", requestOptions);

    // console.log(response)

    localStorage.removeItem("POSPadiaccess")
    localStorage.removeItem("POSPadirefresh")
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const newUser = await response.json();
    console.log("Logout Successful:", newUser);
    return newUser;
  } catch (error) {
    console.error("Error logging out", error);
    throw error;
  }
}

export async function forgotPassword(email) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(email),
    redirect: 'follow'
  };

  try {
    const response = await fetch("https://pos-padi-django-backend.onrender.com/api/v1/users/forgot-password/", requestOptions);

    // console.log(response)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const message = await response.json();
    console.log(message)
    // console.log("Logout Successful:", newUser);
    return message;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function resetPassword(userData) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(userData),
    redirect: 'follow'
  };

  try {
    const response = await fetch("https://pos-padi-django-backend.onrender.com/api/v1/users/reset-password/", requestOptions);

    // console.log(response)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const message = await response.json();
    console.log(message)
    // console.log("Logout Successful:", newUser);
    return message;
  } catch (error) {
    console.error("Error:", error);
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

    // console.log(response)
    
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

// VERIFICATION


export async function verifyEmail(emailandOTP) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  // myHeaders.append("Authorization", `Bearer ${token}`);

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(emailandOTP),
    redirect: 'follow'
  };

  try {
    const response = await fetch("https://pos-padi-django-backend.onrender.com/api/v1/users/verify/", requestOptions);

    // const res = await response.json()
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    console.log(response)
    return response
    // const res = await response.json();
    // console.log("Owner created:", result);
    // console.log(response)
    return res;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function generateOTP(email) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  // myHeaders.append("Authorization", `Bearer ${token}`);

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(email),
    redirect: 'follow'
  };

  try {
    const response = await fetch("https://pos-padi-django-backend.onrender.com/api/v1/users/verify/otp/", requestOptions);

    // console.log(response)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const res = await response.json();
    // console.log("Owner created:", result);
    return res;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

// USER DATA SUMMARY

export async function getUserSummary() {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  try {
    const response = await fetch("https://pos-padi-django-backend.onrender.com/api/v1/users/summary/", requestOptions);

    // console.log(response)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const userSummary = await response.json();
    console.log("User Summary:", userSummary);
    return userSummary;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}






  