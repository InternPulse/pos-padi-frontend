import React, { useState } from "react";

const API_URL = "https://pos-padi-express-backend.onrender.com";

const CreateNotification = () => {
  const [formData, setFormData] = useState({
    title: "",
    message: "",
    userType: "agent",
    userTypeAccess: "",
    agentTypeAccess: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // 1. Validate inputs
    const userTypes = formData.userTypeAccess
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
    const agentTypes = formData.agentTypeAccess
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);

    if (userTypes.length === 0 || agentTypes.length === 0) {
      setError(
        "Please provide at least one type for both user and agent access"
      );
      setIsLoading(false);
      return;
    }

    // 2. Get token (now checks for both localStorage and cookies)
    const token =
      localStorage.getItem("accessToken") ||
      document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="))
        ?.split("=")[1];

    if (!token) {
      setError("Authentication required. Please log in.");
      setIsLoading(false);
      return;
    }

    // 3. PrepareD payload exactly as API expects
    const payload = {
      title: formData.title,
      message: formData.message,
      user_type: formData.userType,
      user_type_access: userTypes,
      agent_type_access: agentTypes,
    };

    try {
      // 4. Made API call with proper error handling
      const res = await fetch(`${API_URL}/api/v1/notifications/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      // 5. I Handled all possible API responses
      if (res.status === 401) {
        throw new Error("Session expired. Please log in again.");
      }

      if (!res.ok) {
        throw new Error(data.message || "Failed to create notification");
      }

      // 6. THIS IS Success - reset form
      setFormData({
        title: "",
        message: "",
        userType: "agent",
        userTypeAccess: "",
        agentTypeAccess: "",
      });

      alert("Notification created successfully!");
    } catch (error) {
      console.error("API Error:", error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // MY Styles
  const styles = {
    container: {
      backgroundColor: "#f5f5f5",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
    },
    form: {
      backgroundColor: "#fff",
      padding: "30px",
      borderRadius: "10px",
      boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
      width: "100%",
      maxWidth: "400px",
    },
    input: {
      padding: "12px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      margin: "8px 0",
      width: "100%",
    },
    button: {
      padding: "12px",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      width: "100%",
      opacity: isLoading ? 0.7 : 1,
    },
  };

  return (
    <div style={styles.container}>
      <form
        onSubmit={handleSubmit}
        style={styles.form}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Create Notification
        </h2>

        {error && (
          <div
            style={{ color: "red", marginBottom: "15px", textAlign: "center" }}>
            {error}
          </div>
        )}

        <input
          style={styles.input}
          type="text"
          placeholder="Title*"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />

        <input
          style={styles.input}
          type="text"
          placeholder="Message*"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          required
        />

        <select
          style={styles.input}
          value={formData.userType}
          onChange={(e) =>
            setFormData({ ...formData, userType: e.target.value })
          }
          required>
          <option value="agent">Agent</option>
          <option value="user">User</option>
        </select>

        <input
          style={styles.input}
          type="text"
          placeholder="User Types (comma separated)*"
          value={formData.userTypeAccess}
          onChange={(e) =>
            setFormData({ ...formData, userTypeAccess: e.target.value })
          }
          required
        />

        <input
          style={styles.input}
          type="text"
          placeholder="Agent Types (comma separated)*"
          value={formData.agentTypeAccess}
          onChange={(e) =>
            setFormData({ ...formData, agentTypeAccess: e.target.value })
          }
          required
        />

        <button
          type="submit"
          style={styles.button}
          disabled={isLoading}>
          {isLoading ? "Sending..." : "Create Notification"}
        </button>
      </form>
    </div>
  );
};

export default CreateNotification;
