import { createContext, useContext, useState } from "react";


const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState(false);

    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}

export default AuthContext;