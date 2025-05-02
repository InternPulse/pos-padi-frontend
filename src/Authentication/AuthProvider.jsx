import { createContext, useContext, useEffect, useState } from "react";
import UserContext from "@/context/UserContext";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // const [auth, setAuth] = useState(false);
  const [auth, setAuth] = useState(() => {
    return !!localStorage.getItem("POSPadiaccess");
  });
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //     const token = localStorage.getItem("access");
  //     if (token) {
  //         setAuth(true)
  //     }
  //     setLoading(false)

  // }, [])

  return (
    <AuthContext.Provider value={{ auth, setAuth, loading }}>
      <UserContext>{children}</UserContext>
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
