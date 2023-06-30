

import { useEffect, useState } from "react"
import useAuth from "../myHooks/useAuth";
import { ErrorToastContainer } from "../components/toastContainer";
//import { login } from "../services/authServices";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { getCurrentUser } from "../services/userServices";



export function EmailConfirmed() {
    const { onLogin } = useAuth();
    const [message, updateMessage] = useState();
    const [display, updateDisplay] = useState("none");
    const navTo = useNavigate();

    const notify = (mesg) => {
        updateMessage(mesg);
        updateDisplay("flex");
        setTimeout(() => {
            updateDisplay("none");
            console.log('close')
        }, 2500);
        console.log('nottttttttttttt')
    }

    useEffect(() => {
        handleLoggedUser();
    });

    const handleLoggedUser = async () => {
        const { data, error } = await getCurrentUser();
        if (data) {
            console.log('from confirmation', data.user);
            onLogin(data.user.id);
        } else {
            console.log('error : ', error.message);

            notify(error.message, true)
            navTo('/login')

        }
    }

    return <div className="confirmation" style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        position: "absolute"
    }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
            <ErrorToastContainer display={display} message={message} />
            <p className="messa">
                cofirming your data,
            </p>
            <FontAwesomeIcon icon={faSpinner} pulse size="lg" /></div>
    </div>
}