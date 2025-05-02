import { getUserSummary } from "@/backend-functions/useractions-api";
import React from "react";
import { createContext, useState, useEffect } from "react";

const User = createContext();

function UserContext({ children }) {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUserSummary()
      .then((data) => {
        setUser(data);
        // console.log(user);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return !isLoading && <User.Provider value={user}>{children}</User.Provider>;
}

export default UserContext;

export { User };
