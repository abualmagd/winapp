import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/reviewModal.css"
import Rating from "./starRating";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import { createReview } from "../services/appServices";



function ReviewModal(props) {
    const [userRat, updateUserRat] = useState(0);
    const areaRef = useRef();
    const [state, updateState] = useState('ok');

    function handleChange(value) {
        updateUserRat(value);
    }

    function closeAlert() {
        setTimeout(function () {
            return props.close();
        }, 1000); // Delay of 1 second (1000 milliseconds)

    }

    const addReview = async () => {
        if (areaRef.current.value || userRat > 0) {
            updateState('sending');
            console.log('id', props.appId);
            console.log('ref', areaRef.current.value);
            console.log('rat', userRat);
            const content = areaRef.current.value;
            const rat = userRat === 0 ? null : userRat;
            const { error, data } = await createReview(props.appId, content, rat)

            if (error) {

                updateState('error');
            } if (data) {
                console.log(data);
                updateState('data');
                props.rebuild();
                closeAlert();
            }



        }



    }

    if (state === 'data') {
        return <div className="alertContainer" >
            <div className="revModal" >
                <div className="modalCloser" onClick={() => props.close()}>
                    <FontAwesomeIcon icon={faClose} />
                </div>
                <div className="center-send">your review sent succefully  </div>
            </div>
        </div>
    }
    if (state === 'ok') {
        return <div className="alertContainer" >
            <div className="revModal" >
                <div className="modalCloser" onClick={() => props.close()}>
                    <FontAwesomeIcon icon={faClose} />
                </div>
                <h3>Reviewing This app : </h3>
                <Rating onChange={handleChange} />
                <textarea className="areaRev" ref={areaRef} maxLength={255} name="replayTo" id="repTo" cols="35" rows="7"></textarea>

                <div className="submitRev" onClick={addReview}>
                    send my review
                </div>


            </div>
        </div>
    }
    if (state === 'error') {
        <div className="alertContainer" >
            <div className="revModal" >
                <div className="modalCloser" onClick={() => props.close()}>
                    <FontAwesomeIcon icon={faClose} />
                </div>
                <div className="center-send">sorry , error in sending your review </div>
            </div>
        </div>
    }
    return <div className="alertContainer" >
        <div className="revModal" >
            <div className="modalCloser" onClick={() => props.close()}>
                <FontAwesomeIcon icon={faClose} />
            </div>
            <div className="center-send">sending ..... </div>
        </div>
    </div>


}


export default ReviewModal;