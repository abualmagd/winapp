import { useCallback, useEffect, useState } from 'react';
import '../styles/newSection.css';
import NewCard from "./newCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { getNewApps } from '../services/appServices';
import { useNavigate } from 'react-router-dom';
function NewPart() {
    const [lista, updateLista] = useState([]);
    const [loading, updateLoading] = useState(false);
    const navigat = useNavigate();





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
            {lista.length > 0 && <div className="topTitle"> The New Listed Tools :</div>}
            {loading ? <div className='center_progress'><FontAwesomeIcon icon={faSpinner} pulse size="lg" /> </div> : <section className="newSection">
                {cards}
            </section>}
            <div onClick={() => navigat('/add')} className="addBtn">List My Tool Now</div>
        </div>

    );
}


export default NewPart;