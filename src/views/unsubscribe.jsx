import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { unSubscribe } from "../services/userServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";


export default function Unsubscribe() {

    const [state, updateState] = useState('loading');

    const { email } = useParams();


    const unsub = useCallback(async () => {
        try {

            await unSubscribe(email);
            updateState('data');
        } catch (error) {
            updateState('error');
        }

    }, [email]);

    useEffect(() => {
        unsub();
    }, [unsub]);


    if (state === 'loading') {
        return <div>
            <div className="appPageContainer" >
                <div className="centerCircular">
                    <FontAwesomeIcon icon={faSpinner} spin size="lg" />
                </div>
            </div>
        </div>
    }

    if (state === 'error') {
        return <div>
            <div className="appPageContainer" >
                <div className="centerCircular">
                    <p className="error">
                        Sorry something error happened, try again later
                    </p>
                </div>
            </div>
        </div>
    }

    return (
        <div className="appPageContainer" >
            <div className="centerCircular">
                <p className="error">
                    UnSubscribed successfuly , wish to see you again
                </p>
            </div>
        </div>

    );
}