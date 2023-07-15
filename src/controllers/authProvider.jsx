import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import React from "react";
import { getToken, removeToken, saveToken } from "../services/global";
import { getLocalUser, getUserData, removeUserLocal, saveUserLocal } from "../services/userServices";
export const AuthContext = React.createContext(null);
const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(() => getToken());
    const [currentUser, updateCurrent] = useState(() => getLocalUser() ?? '');
    const navigate = useNavigate();
    const location = useLocation();

    const getDetailsOfUser = async (id) => {
        const { data } = await getUserData(id);
        if (data) {
            console.log('frome on getdetalais');
            console.log(data[0]);
            updateCurrent(data[0]);
            saveUserLocal(data[0]);
        }
    }

    const handleLogin = async (t) => {
        saveToken(t);
        setToken(t);
        const backToUrl = localStorage.getItem('beforeJoin');
        await getDetailsOfUser(t);
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
        removeUserLocal();
        navigate("/");
    }


    const updateUser = async () => {
        await getDetailsOfUser(token);
    }


    const value = {
        token,
        currentUser,
        onLogin: handleLogin,
        onLogout: handleLogout,
        onUpdate: updateUser

    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )

}




export default AuthProvider;