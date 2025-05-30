import { AuthContext } from "../controllers/authProvider"
import { useContext } from "react";

const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;