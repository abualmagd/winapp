
import { getLocalUser } from "../services/userServices";
import "../styles/warningModal.css";


function WariningModal(props) {

    const { name } = getLocalUser();
    console.log('name', name);


    return (
        <div className="WarnContainer" >
            <div className="warn-modal" >
                <div className="war">
                    Are you sure you want delete your account
                </div>
                <div className="modal-actions">
                    <div className="delet-btn">delete</div>
                    <div className="cancel-btn" onClick={() => props.close()}>cancel</div>
                </div>
            </div>
        </div>
    );
}


export default WariningModal;




export function WarnModal({ type, close, remove }) {

    return (
        <div className="WarnContaine" >
            <div className="warn-modal" >
                <div className="war">
                    Are you sure you want delete your {type}
                </div>
                <div className="modal-actions">
                    <div className="delet-btn" onClick={remove}>delete</div>
                    <div className="cancel-btn" onClick={close}>cancel</div>
                </div>
            </div>
        </div>
    );
}