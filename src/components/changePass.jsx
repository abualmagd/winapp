
import { useState } from "react";
import { changePassword } from "../services/authServices";
import "../styles/warningModal.css";


function ChangePass(props) {
    const [oldPass, updateOldPass] = useState(null);
    const [newPass, updateNewPass] = useState(null);
    const [reptPass, updateReptPass] = useState(null);

    const changePass = async () => {
        if (oldPass !== null & newPass !== null & reptPass !== null) {
            if (reptPass !== newPass) {
                return props.notify("repeated password must be identical to new password ", true);
            } else {
                const { error } = await changePassword(newPass, oldPass);
                if (error) {
                    return props.notify(error.message, true);
                } else {
                    props.close();
                    return props.notify("your password changed succfully", false);

                }
            }
        }
        return props.notify("enter all data please ", true);


    }

    return (
        <div className="WarnContainer" >
            <div className="warn-modal" >
                <div className="war">
                    <input type="password" onChange={(e) => updateOldPass(e.target.value)} className="current-pass" placeholder="your current password" />
                    <input type="password" onChange={(e) => { updateNewPass(e.target.value) }} className="new-pass" placeholder="new password" />
                    <input type="password" onChange={(e) => { updateReptPass(e.target.value) }} className="new-pass" placeholder="repeat new password" />

                </div>
                <div className="modal-actions">
                    <div className="delet-btn" style={{ backgroundColor: "#41e359" }} onClick={changePass}>change</div>
                    <div className="cancel-btn" onClick={() => props.close()}>cancel</div>
                </div>
            </div>
        </div>
    );
}


export default ChangePass;