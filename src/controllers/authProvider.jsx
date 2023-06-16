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
        saveToken(t);
        setToken(t);
        const backToUrl = localStorage.getItem('beforeJoin');
        if (backToUrl) {
            localStorage.removeItem('beforeJoin');
            navigate(backToUrl);
        } else {
            navigate(location.state?.from?.pathname || '/');
        }


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