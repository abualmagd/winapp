import { useCallback, useEffect, useState } from 'react';
import '../styles/newSection.css';
import NewCard from "./newCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { getNewApps } from '../services/appServices';
import { Link } from 'react-router-dom';
import { getLocalUser } from '../services/userServices';
function NewPart() {
    const [lista, updateLista] = useState([]);
    const [loading, updateLoading] = useState(false)

    //view the newer apps 
    //in this section 

    const { plan } = getLocalUser() ?? 'free';
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
            {lista.length > 0 && <div className="topTitle"> Find New Featured Apps :</div>}
            {loading ? <div className='center_progress'><FontAwesomeIcon icon={faSpinner} pulse size="lg" /> </div> : <section className="newSection">
                {cards}
            </section>}
            <Link to={plan === 'free' ? "/plan" : "/add"} className="addBtn">Add Your App Now</Link>
        </div>

    );
}


export default NewPart;