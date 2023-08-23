import { useCallback, useEffect, useState } from "react";
import NewCard from "../views/newCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { getSuggestions } from "../services/appServices";

export default function Suggestion(props) {
    const categoryId = props.id;
    const [state, updateState] = useState('loading');
    const [suggests, updataeSuggests] = useState(null);
    const fetchData = useCallback(async () => {
        const { data, error } = await getSuggestions(props.appId, categoryId);

        if (error) {
            updateState('error');
            console.log('error', error);
        }
        if (data) {
            updataeSuggests(data);
            updateState('data');
            console.log('data');
        }

    }, [categoryId, props.appId]);

    useEffect(() => {
        fetchData();

    }, [fetchData]);

    if (state === 'error') {

        return (
            <div className="centerCircular">
                <p className="error">
                    Sorry something error happened inloading suggestions
                </p>
            </div>
        );
    }
    if (state === 'loading') {
        return (
            <div className="suggestCards">
                <FontAwesomeIcon icon={faSpinner} spin size="lg" />
            </div>

        );
    }



    const cards = suggests.map((item, index) => {
        return <NewCard key={index} data={item} />

    });


    return (
        <div>
            {suggests.length > 0 && <h4>
                Discover more :
            </h4>}

            <div className="suggestCards">
                {cards}
            </div>
        </div>);





}