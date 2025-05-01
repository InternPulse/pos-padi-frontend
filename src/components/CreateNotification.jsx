const API_URL = "https://pos-padi-express-backend.onrender.com";

/**
 * Sends a notification to the backend
 * @param {Object} params - Notification details
 * @param {string} params.title - Title of the notification
 * @param {string} params.message - Message content
 * @param {string} params.userType - Either 'agent' or 'user'
 * @param {string} params.userTypeAccess - Comma-separated user types
 * @param {string} params.agentTypeAccess - Comma-separated agent types
 */
const createNotification = async ({
  title,
  message,
  userType = "agent",
  userTypeAccess,
  agentTypeAccess,
}) => {
  // Validate inputs
  const userTypes = userTypeAccess
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
  const agentTypes = agentTypeAccess
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  if (userTypes.length === 0 || agentTypes.length === 0) {
    throw new Error(
      "Please provide at least one type for both user and agent access."
    );
  }

  // Get token from localStorage or cookies
  const token =
    localStorage.getItem("accessToken") ||
    document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1];

  if (!token) {
    throw new Error("Authentication required. Please log in.");
  }

  // Payload
  const payload = {
    title,
    message,
    user_type: userType,
    user_type_access: userTypes,
    agent_type_access: agentTypes,
  };

  // API call
  const res = await fetch(`${API_URL}/api/v1/notifications/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  if (res.status === 401) {
    throw new Error("Session expired. Please log in again.");
  }

  if (!res.ok) {
    throw new Error(data.message || "Failed to create notification");
  }

  return data;
};

export default createNotification;
