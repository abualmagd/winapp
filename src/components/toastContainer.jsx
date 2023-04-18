import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/toastContainer.css";


export function ErrorToastContainer(props) {

    return (
        <div className="toast-container" style={{ display: props.display, backgroundColor: "red" }}>
            <FontAwesomeIcon icon={faCircleExclamation} shake size="xl" />
            <p className="message">{props.message}</p>
        </div>
    )
}