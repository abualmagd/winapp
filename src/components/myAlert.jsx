import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/myAlert.css"
import { subscribe } from "../services/userServices";
import { useRef } from "react";



function MyAlert(props) {

    const emailRef = useRef();

    const subscribeUser = async () => {
        if (emailRef.current.value) {
            try {

                await subscribe(emailRef.current.value);
                props.close();
            } catch (error) {
                console.log(error)
            }
        }

    }

    return <div className="alertContainer" >
        <div className="myAlert" >
            <div className="alertCloser" onClick={() => props.close()}>
                <FontAwesomeIcon icon={faXmark} size="lg" />
            </div>
            <img src="assets/images/emails.png" alt="/" className="imgEmail" />
            <h3>Subscribe to our newsletter and stay updated</h3>
            <div className="inputSubmit">
                <input type="email" placeholder=" your email" ref={emailRef} required />
                <div className="submit" onClick={subscribeUser}>
                    Submit
                </div>

            </div>
        </div>
    </div>
}


export default MyAlert;