const token = localStorage.getItem('POSPadiaccess')
const tokenRefresh = localStorage.getItem('POSPadirefresh')


export async function createDispute(disputeData) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");
  
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(disputeData),
      redirect: 'follow',
    };
  
    try {
      const response = await fetch("https://your-api-base-url.com/api/v1/disputes", requestOptions); 
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const res = await response.json();
      console.log("Dispute created:", res);
      return res;
  
    } catch (error) {
      console.error("Error creating dispute:", error);
      throw error;
    }
  }


export async function updateDispute(disputeId, updateData) {
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Accept", "application/json");

const requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: JSON.stringify(updateData),
    redirect: 'follow'
};

try {
    const response = await fetch(`https://your-api-base-url.com/api/v1/disputes/${disputeId}`, requestOptions); 

    if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
    }

    const res = await response.json();
    console.log("Dispute updated:", res);
    return res;

} catch (error) {
    console.error("Error updating dispute:", error);
    throw error;
}
}
  

export async function getDisputes(queryParams = {}) {
    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append('Authorization', `Bearer ${token}`)
  
    // const {
    //   page = '',
    //   limit = '',
    //   search = '',
    //   date_from = '',
    //   date_to = '',
    //   transaction_id = '',
    //   is_active = '',
    // } = queryParams;
  
    const url = new URL("https://pos-padi-express-backend.onrender.com/api/v1/disputes"); 
  
    // url.searchParams.append("page", page);
    // url.searchParams.append("limit", limit);
    // url.searchParams.append("sort_key", "is_active");
    // url.searchParams.append("sort_direction", "asc");
    // url.searchParams.append("search", search);
    // url.searchParams.append("date_from", date_from);
    // url.searchParams.append("date_to", date_to);
    // url.searchParams.append("transaction_id", transaction_id);
    // url.searchParams.append("status", "Rejected");
    // url.searchParams.append("is_active", is_active);
  
    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
  
    try {
      const response = await fetch(url.toString(), requestOptions);
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const result = await response.json();
      console.log("Fetched disputes:", result);
      return result;
  
    } catch (error) {
      console.error("Error fetching disputes:", error);
      throw error;
    }
  }
  
