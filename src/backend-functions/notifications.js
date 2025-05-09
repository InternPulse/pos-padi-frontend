const token = localStorage.getItem('POSPadiaccess')
const tokenRefresh = localStorage.getItem('POSPadirefresh')


export async function createNotification(notificationData) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");
  
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(notificationData),
      redirect: 'follow'
    };
  
    try {
      const response = await fetch("https://pos-padi-express-backend.onrender.com/api/v1/notifications", requestOptions); 

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const result = await response.json();
      console.log("Notification created:", result);
      return result;
  
    } catch (error) {
      console.error("Error creating notification:", error);
      throw error;
    }
  }


  export async function getNotificationById(notificationId) {
    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
  
    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
  
    try {
      const response = await fetch(`https://pos-padi-express-backend.onrender.com/api/v1/notifications/${notificationId}`, requestOptions); 
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const result = await response.json();
      console.log("Notification fetched:", result);
      return result;
  
    } catch (error) {
      console.error("Error fetching notification:", error);
      throw error;
    }
  }
  
  export async function getNotifications({ page = 1, limit = 1000 } = {}) {
    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append('Authorization', `Bearer ${localStorage.getItem('POSPadiaccess')}`)
  
    const url = new URL("https://pos-padi-express-backend.onrender.com/api/v1/notifications"); // Replace with actual base URL
    url.searchParams.append("page", page);
    url.searchParams.append("limit", limit);
  
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
      console.log("Notifications fetched:", result);
      return result;
  
    } catch (error) {
      console.error("Error fetching notifications:", error);
      throw error;
    }
  }


  export async function markNotificationAsRead(notificationId) {
  const myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");

  const requestOptions = {
    method: 'PATCH',
    headers: myHeaders,
    redirect: 'follow'
  };

  try {
    const response = await fetch(`https://pos-padi-express-backend.onrender.com/api/v1/notifications/${notificationId}/read`, requestOptions); // Replace with actual base URL

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log("Notification marked as read:", result);
    return result;

  } catch (error) {
    console.error("Error marking notification as read:", error);
    throw error;
  }
}
