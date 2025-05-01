import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthProvider";





const RequireAuth = () => {
    const {auth, loading} = useAuth();
    const location = useLocation();
    

    return (
        auth ? 
        <Outlet /> : 
        <Navigate to="/home" state={{from: location}} replace />
    )

    // if (loading) {
    //     return <div>Loading</div>
    // }

    // if (!auth) {
    //     return <Navigate to="/login" state={{ from: location }} replace />;
    //   }
    
    //   return <Outlet />;
}


export default RequireAuth