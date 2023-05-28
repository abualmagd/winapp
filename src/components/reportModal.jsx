import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/reviewModal.css"
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import { reportApp } from "../services/appServices";



function ReportModal(props) {

    const areaRef = useRef();
    const [state, updateState] = useState('ok');

    function closeAlert() {
        setTimeout(function () {
            return props.close();
        }, 1000); // Delay of 1 second (1000 milliseconds)

    }


    const addReport = async () => {
        if (areaRef.current.value) {
            updateState('sending');
            console.log('id', props.appId);
            console.log('ref', areaRef.current.value);

            const content = areaRef.current.value;
            const { error, data } = await reportApp(props.appId, content)
            if (error) {

                updateState('error');
            }
            console.log(data);
            updateState('data');
            closeAlert();

        }


    }
    if (state === 'ok') {
        return <div className="alertContainer" >
            <div className="revModal" >
                <div className="modalCloser" onClick={() => props.close()}>
                    <FontAwesomeIcon icon={faClose} />
                </div>
                <h3>Report This app : </h3>

                <textarea className="areaRev" ref={areaRef} maxLength={255} name="replayTo" id="repTo" cols="35" rows="7"></textarea>

                <div className="submitRev" onClick={addReport} style={{ backgroundColor: "red" }}>
                    send my report
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

    if (state === 'data') {
        return <div className="alertContainer" >
            <div className="revModal" >
                <div className="modalCloser" onClick={() => props.close()}>
                    <FontAwesomeIcon icon={faClose} />
                </div>
                <div className="center-send">your report sent succefully  </div>
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


export default ReportModal;