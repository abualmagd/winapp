import { faCheck, faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/toastContainer.css";
import { useState } from "react";


export function ErrorToastContainer(props) {

    return (
        <div className="toast-container" style={{ display: props.display, backgroundColor: "red" }}>
            <FontAwesomeIcon icon={faCircleExclamation} shake size="xl" />
            <p className="message">{props.message}</p>
        </div>
    )
}



export function ToastContainer(props) {
    const myError = props.error;
    const bgColor = myError ? "red" : 'var(--notifyColor)';
    return (
        <div className="toast-container" style={{ display: props.display, backgroundColor: bgColor }}>
            {myError ? <FontAwesomeIcon icon={faCircleExclamation} shake size="xl" style={{ marginLeft: "20px" }} /> : <FontAwesomeIcon icon={faCheck} shake style={{ marginLeft: "20px" }} />}
            <p className="message">{props.message}</p>
        </div>
    )
}





export function EasyToastContainer(props) {

    const [message, updateMessage] = useState();
    const [display, updateDisplay] = useState("none");
    const [error, updateError] = useState(true);

    props.notify = (mesg, error) => {
        updateMessage(mesg);
        updateError(error);
        updateDisplay("flex");
        setTimeout(() => {
            updateDisplay("none");
            console.log('close')
        }, 3000);
        console.log('nottttttttttttt')
    }

    const bgColor = error ? "red" : 'var(--notifyColor)';
    return (
        <div className="toast-container" style={{ display: display, backgroundColor: bgColor }}>
            {error ? <FontAwesomeIcon icon={faCircleExclamation} shake size="xl" style={{ marginLeft: "20px" }} /> : <FontAwesomeIcon icon={faCheck} shake style={{ marginLeft: "20px" }} />}
            <p className="message">{message}</p>
        </div>
    )
}