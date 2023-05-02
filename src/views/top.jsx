import { useEffect, useRef, useState } from "react";
import Card from "./card";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { getHeighlyApps } from "../services/appServices";


function TopSection() {
    const searchRef = useRef();
    const naigate = useNavigate();
    const [lista, updateLista] = useState([]);
    const [loading, updateLoading] = useState(false);


    const getTopApps = async () => {
        updateLoading(true);

        const { data, error } = await getHeighlyApps(0);
        if (error) {
            console.log(error.message);
            updateLoading(false);

        } else {
            console.log('data', data);
            updateLista(data);
            updateLoading(false);

        }


    }

    useEffect(() => {
        getTopApps();
    }, []);

    function handleEnter(e) {
        const str = searchRef.current.value;
        if (e.key === 'Enter' & str.trim() != null) {
            console.log(str);
            const url = "/explore/" + searchRef.current.value;
            naigate(url);

        }
    }



    var cards = lista.map((item, index) => {
        return <Card key={index} data={item} />
    });
    return (
        <div >
            <div className="topTitle"> Find the best apps and software to grow your business </div>
            <div className="input-container">
                <input ref={searchRef} type="text" className="search"
                    placeholder="search apps, tools, extensions and more" onKeyDown={(e) => handleEnter(e)} />
                <div className="clear" onClick={() => searchRef.current.value = null}>
                    <FontAwesomeIcon icon={faClose} />
                </div>
            </div>

            {loading ? <div className='center_progress'><FontAwesomeIcon icon={faSpinner} pulse size="lg" /> </div> : <section className="topApps">
                {cards}
            </section>}
        </div>

    );
}


export default TopSection;