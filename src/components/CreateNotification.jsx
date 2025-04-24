import React, { useState } from "react";
import axios from "axios";

const CreateNotification = () => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [userType, setUserType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://pos-padi-express-backend.onrender.com/api/v1/notifications",
        {
          title,
          message,
          userType,
        }
      );

      console.log("Notification Created:", res.data);
      alert("Notification created successfully!");
    } catch (err) {
      console.error(err);
      alert("Error creating notification");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Create Notification</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border px-3 py-2 rounded mb-4"
        required
      />

      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full border px-3 py-2 rounded mb-4"
        required
      />

      <input
        type="text"
        placeholder="User Type (e.g. agent)"
        value={userType}
        onChange={(e) => setUserType(e.target.value)}
        className="w-full border px-3 py-2 rounded mb-4"
        required
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
        Send Notification
      </button>
    </form>
  );
};

export default CreateNotification;
