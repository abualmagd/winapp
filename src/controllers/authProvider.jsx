import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import React from "react";

export const AuthContext = React.createContext(null);
const AuthProvider = ({ children }) => {
    const [token, setToken] = useState("llll");
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = (t) => {
        setToken(t);
        navigate(location.state?.from?.pathname || '/');

    }


    const handleLogout = () => {
        setToken(null);
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