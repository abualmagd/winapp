import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/setting.css";
import { faClose, faGear, faHeartBroken, faLock, faSeedling, faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import WariningModal from "../components/warningModal";
import { useState } from "react";
import ChangePass from "../components/changePass";
import { ToastContainer } from "../components/toastContainer";



function Settings() {
    const navigat = useNavigate();
    const [WModal, updateModal] = useState(false);
    const [changePass, updateChangePass] = useState(false);
    const [message, updateMessage] = useState();
    const [display, updateDisplay] = useState("none");
    const [error, updateError] = useState(true);

    const notify = (mesg, error) => {
        updateMessage(mesg);
        updateError(error);
        updateDisplay("flex");
        setTimeout(() => {
            updateDisplay("none");
            console.log('close')
        }, 3000);
        console.log('nottttttttttttt')
    }


    function showModal() {
        updateModal(true);
    }


    function hideModal() {
        updateModal(false);
    }
    function showChangePass() {
        updateChangePass(true);
    }


    function hideChangePass() {
        updateChangePass(false);
    }
    return (
        <div>
            {WModal && <WariningModal close={hideModal} />}
            {changePass && <ChangePass close={hideChangePass} notify={(mesg, ror) => notify(mesg, ror)} />}
            <div className="clossy" onClick={() => navigat(-1)}>
                <FontAwesomeIcon icon={faClose} /></div>
            <ToastContainer display={display} message={message} error={error} />
            <div className="settings">
                <div className="account-set">
                    <div className="hd-set">
                        <FontAwesomeIcon icon={faGear} /> Your Settings :
                    </div>
                    <div className="bod-set">
                        <div className="acc-info" onClick={() => navigat("/edit")}>
                            <FontAwesomeIcon icon={faUser} style={{ marginTop: "12px" }} />
                            <div className="info-body">
                                <div className="acc-hd" >
                                    Account information
                                </div>
                                <p className="more-details">
                                    See your account information like your name
                                    number and email adress
                                </p>
                            </div>
                        </div>
                        <div className="acc-info" onClick={() => showChangePass()}>
                            <FontAwesomeIcon icon={faLock} style={{ marginTop: "12px" }} />
                            <div className="info-body">
                                <div className="acc-hd">
                                    Change password
                                </div>
                                <p className="more-details">
                                    Change your password at any time
                                </p>
                            </div>
                        </div>
                        <div className="acc-info" onClick={() => navigat("/price")}>
                            <FontAwesomeIcon icon={faSeedling} style={{ marginTop: "12px" }} />
                            <div className="info-body">
                                <div className="acc-hd">
                                    Manage promotion
                                </div>
                                <p className="more-details">
                                    tool subscription plans
                                </p>
                            </div>

                        </div>


                        <div className="acc-info" onClick={() => showModal()}>
                            <FontAwesomeIcon icon={faHeartBroken} style={{ marginTop: "12px" }} />
                            <div className="info-body">
                                <div className="acc-hd">
                                    Delete account
                                </div>
                                <p className="more-details">
                                    delete your account
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}




export default Settings;