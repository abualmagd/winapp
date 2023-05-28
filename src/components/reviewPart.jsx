import ReviewCard from "../views/reviewCard";
import '../styles/appPage.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { getAppReviews } from "../services/appServices";
import { useEffect } from "react";
import { useState } from "react";
import { useCallback } from "react";


export default function ReviewsPart(props) {
    const [state, updateState] = useState('loading');
    const [reviews, updateReviews] = useState(null);
    const appId = props.id;





    const getReviews = useCallback(async () => {
        const { data, error } = await getAppReviews(appId);
        if (error) {
            updateState('error');
            console.log(error.message);
        } else {
            console.log(data);
            updateReviews(data);
            updateState('data');

        }

    }, [appId]);


    useEffect(() => {
        getReviews();
    }, [getReviews]);

    const removeData = (id) => {
        const newData = reviews.filter((review) => review['id'] !== id);
        updateReviews(newData);
    }

    if (state === 'error') {
        return (
            <div className="centerCircular">
                <p className="error">
                    Sorry something error happened
                </p>
            </div>
        );
    }
    if (state === 'data' && reviews !== null) {
        var revCards = reviews.map((rev, index) => {
            return <ReviewCard key={index} data={rev} removeOne={removeData} />

        });

        return <>
            {revCards}
        </>

    }

    return (<div>
        <div className="appPageContainer" >
            <div className="centerCircular">
                <FontAwesomeIcon icon={faSpinner} spin size="lg" />
            </div>
        </div>
    </div>);


}