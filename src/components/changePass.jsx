
import "../styles/warningModal.css";


function ChangePass(props) {

    return (
        <div className="WarnContainer" >
            <div className="warn-modal" >
                <div className="war">
                    <input type="password" className="current-pass" placeholder="your current password" />
                    <input type="password" className="new-pass" placeholder="new password" />
                    <input type="password" className="new-pass" placeholder="repeat new password" />

                </div>
                <div className="modal-actions">
                    <div className="delet-btn" style={{ backgroundColor: "#41e359" }}>change</div>
                    <div className="cancel-btn" onClick={() => props.close()}>cancel</div>
                </div>
            </div>
        </div>
    );
}


export default ChangePass;