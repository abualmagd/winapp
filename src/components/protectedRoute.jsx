import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../myHooks/useAuth"
import { getLocalUser } from "../services/userServices";

export const ProtectedRoute = ({ children }) => {
    const { token } = useAuth();
    if (!token) {
        console.log(token);
        console.log("no token")
        return <Navigate to="/login" replace />;
    }
    console.log("second option protected");
    return children;
}





export const AdminProtectedRoute=({children})=>{
const user=getLocalUser();
if(!user){
    return <Navigate to="/login" replace />;
}else{
    if(user['user_type']==='admin'){
        return children;
    }else{
        return <Navigate to="/" replace />; 
    }
}


}