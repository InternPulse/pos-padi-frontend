import { getUserSummary } from "@/backend-functions/useractions-api";
import React from "react";
import { createContext, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

const User = createContext();

function UserContext({ children }) {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const loadingStyles = {
    color: "green",
    fontWeight: "bold",
    fontSize: "1.2rem",
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  useEffect(() => {
    getUserSummary()
      .then((data) => {
        setUser(data);
        // console.log(user);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return isLoading ? (
    <em style={loadingStyles}>Loading POS-Padi...</em>
  ) : (
    <User.Provider value={user}>
      <Outlet />
    </User.Provider>
  );
}

export default UserContext;

export { User };
