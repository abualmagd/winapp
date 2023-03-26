import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../myHooks/useAuth"

const ProtectedRoute = ({ children }) => {
    const { token } = useAuth();
    if (!token) {
        console.log(token);
        return <Navigate to="/login" replace />;
    }
    console.log("second option protected");
    return children;
}


export default ProtectedRoute;