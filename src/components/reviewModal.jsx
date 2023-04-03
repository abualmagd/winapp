import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/reviewModal.css"
import Rating from "./starRating";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";



function ReviewModal(props) {
    const [userRat, updateUserRat] = useState(0);

    function handleChange(value) {
        updateUserRat(value);
    }


    return <div className="alertContainer" >
        <div className="revModal" >
            <div className="modalCloser" onClick={() => props.close()}>
                <FontAwesomeIcon icon={faClose} />
            </div>
            <h3>Reviewing Figma Ai : </h3>
            <Rating onChange={handleChange} />
            <textarea className="areaRev" maxLength={255} name="replayTo" id="repTo" cols="35" rows="7"></textarea>

            <div className="submitRev" onClick={() => console.log(userRat)}>
                Send my review
            </div>


        </div>
    </div>
}


export default ReviewModal;