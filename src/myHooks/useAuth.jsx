import AuthProvider from "../controllers/authProvider"

import React from "react";

const useAuth = () => {
    React.useContext(AuthProvider);
}

export default useAuth;