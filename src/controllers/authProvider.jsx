import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import React from "react";
import { getToken, removeToken, saveToken } from "../services/global";
export const AuthContext = React.createContext(null);
const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(() => getToken());

    const navigate = useNavigate();
    const location = useLocation();



    const handleLogin = (t) => {
        console.log("handling login")
        console.log("token :", t)
        saveToken(t);
        setToken(t);
        navigate(location.state?.from?.pathname || '/');

    }


    const handleLogout = () => {
        setToken(null);
        removeToken();
        navigate("/");
    }

    const value = {
        token,
        onLogin: handleLogin,
        onLogout: handleLogout
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )

}




export default AuthProvider;