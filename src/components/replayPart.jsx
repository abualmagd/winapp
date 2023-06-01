import "../styles/replayPart.css"
import ReplayCard from "./replayCard";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useCallback } from "react";
import { createReplay, getReplaysforReview } from "../services/appServices";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";




function ReplayPart(props) {

    const reviewId = props.id;
    const [state, updateState] = useState('loading');
    const [replays, updateReplays] = useState(null);
    const [newContent, updateContent] = useState(null);
    const [sendReplay, updateSending] = useState(false);

    const replay = async () => {
        console.log(newContent)
        if (newContent !== null && newContent.trim() !== '') {
            const { data, error } = await createReplay(reviewId, newContent.trim());

            if (error) {
                console.log('error', error.message);
            }
            if (data) {
                console.log('resukt data : ', data);
                updateReplays([...replays, data[0]]);
            }
        }

    }

    const removeData = (id) => {
        const newData = replays.filter((review) => review['id'] !== id);
        updateReplays(newData);
    }

    const getReplays = useCallback(async () => {
        const { data, error } = await getReplaysforReview(reviewId);
        if (error) {
            updateState('error');
        }
        if (data) {
            console.log('replays : ', data)
            updateState('data');
            updateReplays(data);
        }
    }, [reviewId])



    useEffect(() => {
        getReplays();
    }, [getReplays]);



    if (state === 'error') {
        return (
            <div className="centerCircular" style={{ height: "100px", color: "red" }}>
                <p className="error">
                    Sorry error  in loading replays
                </p>
            </div>
        );
    }
    if (state === 'loading') {
        let myHeight = props.expand ? "100%" : "0%";
        return (<div className="replayContainer" style={{ height: myHeight }}>
            <div className="divider"></div>
            <FontAwesomeIcon icon={faSpinner} spin size="lg" />
            <textarea className="replayTo" maxLength={255} name="replayTo" id="repTo" cols="35" rows="7" onChange={(e) => updateContent(e.target.value)}></textarea>
            <div className="replayToBtn" onClick={() => {
                updateSending(true)
                replay().then(() => {
                    document.getElementById("repTo").value = ''; updateSending(false)
                });

            }} >
                {sendReplay ? <FontAwesomeIcon icon={faSpinner} spin size="lg" /> : <FontAwesomeIcon icon={faPaperPlane} />
                }            </div>
        </div>);
    }



    const reps = replays.map((r, index) => {
        return <ReplayCard replay={r} key={index} removeOne={removeData} />
    })

    let myHeight = props.expand ? "100%" : "0%";

    return (<div className="replayContainer" style={{ height: myHeight }}>
        <div className="divider"></div>
        {reps}
        <textarea className="replayTo" maxLength={255} name="replayTo" id="repTo" cols="35" rows="7" onChange={(e) => {
            updateContent(e.target.value);

        }}></textarea>
        <div className="replayToBtn" onClick={() => {
            updateSending(true)
            replay().then(() => {
                document.getElementById("repTo").value = ''; updateSending(false);
            });

        }}>
            {sendReplay ? <FontAwesomeIcon icon={faSpinner} spin size="lg" /> : <FontAwesomeIcon icon={faPaperPlane} />
            }
        </div>
    </div>);
}


export default ReplayPart;