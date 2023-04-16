import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/setting.css";
import { faGear, faHeartBroken, faLock, faSeedling, faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import WariningModal from "../components/warningModal";
import { useState } from "react";
import ChangePass from "../components/changePass";



function Settings() {
    const navigat = useNavigate();
    const [WModal, updateModal] = useState(false);
    const [changePass, updateChangePass] = useState(false);
  


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
            {changePass && <ChangePass close={hideChangePass} />}
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
                        <div className="acc-info" onClick={() => navigat("/changeplan")}>
                            <FontAwesomeIcon icon={faSeedling} style={{ marginTop: "12px" }} />
                            <div className="info-body">
                                <div className="acc-hd">
                                    Manage plans
                                </div>
                                <p className="more-details">
                                    change your subscription plan
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