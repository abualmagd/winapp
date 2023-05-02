import { useCallback, useEffect, useState } from 'react';
import '../styles/newSection.css';
import NewCard from "./newCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { getNewApps } from '../services/appServices';
function NewPart() {
    const [lista, updateLista] = useState([]);
    const [loading, updateLoading] = useState(false)




    const fetchData = useCallback(async () => {
        updateLoading(true);
        const { data, error } = await getNewApps();
        if (error) {
            console.log(error.message);
            updateLoading(false);
        } else {
            console.log(data);
            updateLista(data);
            updateLoading(false);
        }


    }, [])

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    var cards = lista.map((item, index) => {
        return <NewCard key={index} data={item} />
    });
    return (
        <div className="newContainer">
            <div className="topTitle"> Find New Featured Apps </div>
            {loading ? <div className='center_progress'><FontAwesomeIcon icon={faSpinner} pulse size="lg" /> </div> : <section className="newSection">
                {cards}
            </section>}
            <div className="newBtn">Add Your App Now</div>
        </div>

    );
}


export default NewPart;