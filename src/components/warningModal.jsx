
import "../styles/warningModal.css";


function WariningModal(props) {

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