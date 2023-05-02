import { useEffect, useState } from 'react';
import '../styles/newSection.css';
import NewCard from "./newCard";
import { getUserSavedApps } from '../services/appServices';
import { getToken } from '../services/global';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

function Saved() {
    const [lista, updateLista] = useState([]);
    const [loading, updateLoading] = useState(false);

    const getSavedApps = async () => {
        updateLoading(true);
        const id = getToken();
        const { data, error } = await getUserSavedApps(id);
        if (error) {
            console.log(error.message);
            updateLoading(false);
        } else {
            console.log(data);
            updateLista(data);
            updateLoading(false);
        }



    }

    useEffect(() => {
        getSavedApps();
    }, []);

    var cards = lista.map((item, index) => {
        return <NewCard key={index} data={item} />
    });



    return (
        <div className="newContainer" style={{ marginTop: "5px" }}>
            <div className="topTitle"> Saved Apps : </div>
            {loading ? <div className='center_progress'><FontAwesomeIcon icon={faSpinner} pulse size="lg" /> </div> : <section className="newSection">
                {cards}
            </section>}

        </div>

    );
}


export default Saved;