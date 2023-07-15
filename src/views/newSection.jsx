import { useCallback, useEffect, useState } from 'react';
import '../styles/newSection.css';
import NewCard from "./newCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { getNewApps, userAllowedtoAdd } from '../services/appServices';
import { useNavigate } from 'react-router-dom';
import { getLocalUser } from '../services/userServices';
function NewPart() {
    const [lista, updateLista] = useState([]);
    const [loading, updateLoading] = useState(false);
    const navigat = useNavigate();

    //view the newer apps 
    //in this section 

    const limitUserApps = async () => {
        const { plan } = getLocalUser() ?? 'free';
        const result = await userAllowedtoAdd();
        console.log('limi', result.data);
        if (!result.data) {
            navigat('/limit');
        } else {
            if (plan === 'free') {
                navigat('/plan');
            } else {
                navigat('/add');
            }

        }
    }

    const fetchData = useCallback(async () => {
        updateLoading(true);
        const { data, error } = await getNewApps();
        if (error) {
            updateLoading(false);
        } else {
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
            <div onClick={() => limitUserApps()} className="addBtn">Add Your Tool Now</div>
        </div>

    );
}


export default NewPart;