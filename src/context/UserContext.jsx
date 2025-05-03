import React from "react";
import { createContext } from "react";

const User = createContext();

function UserContext({ children, user }) {

  return (
    <User.Provider value={user}>
      {children}
    </User.Provider>
  );
}

export default UserContext;

export { User };
