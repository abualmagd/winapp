import ReviewCard from "../views/reviewCard";
import '../styles/appPage.css';
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { getAppReviews, getMoreReviews } from "../services/appServices";
import { useEffect } from "react";
import { useState } from "react";
import { useCallback } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { getLocalUser } from "../services/userServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function ReviewsPart(props) {
    const [state, updateState] = useState('loading');
    const [reviews, updateReviews] = useState(null);
    const [copied, updateCopied] = useState(false);
    const appId = props.id;
    const { plan } = getLocalUser() ?? 'free';

    const isDashBoard = props.isDash ?? false;

    const loadMoreReview = async () => {

        const { error, data } = await getMoreReviews(appId, reviews.length);
        if (error) {
            console.log(error.message)
        } if (data && data.length > 0) {
            console.log('new reviews', data);
            updateReviews([...reviews, data]);
        }
    }
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



    }, [getReviews, props.build]);

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
            {isDashBoard & plan === 'free' ? <CopyToClipboard className={'float-right'} text={JSON.stringify(reviews.map(({ user_id, ...rest }) => rest))} onCopy={() => updateCopied(true)}>
                <button>{copied ? 'copied to clipBoard' : 'export reviews'}</button>
            </CopyToClipboard> : ''}
            {revCards}
            {props.count > reviews.length && <div className="showMore" onClick={loadMoreReview}>show more replays ⇩</div>}
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