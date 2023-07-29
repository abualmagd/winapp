import { useEffect, useState } from "react";
import Card from "./card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { getHeighlyApps } from "../services/appServices";


function TopSection() {

    const [lista, updateLista] = useState([]);
    const [loading, updateLoading] = useState(false);


    const getTopApps = async () => {
        updateLoading(true);

        const { data, error } = await getHeighlyApps(0);
        if (error) {

            updateLoading(false);

        } else {

            updateLista(data);
            updateLoading(false);

        }


    }

    useEffect(() => {
        getTopApps();
    }, []);




    var cards = lista.map((item, index) => {
        return <Card key={index} data={item} />
    });
    return (
        <div >
            <div className="topTitle" > Find the best apps and softwares :</div>


            {loading ? <div className='center_progress'><FontAwesomeIcon icon={faSpinner} pulse size="lg" /> </div> : <section className="topApps">
                {cards}
            </section>}
        </div>

    );
}


export default TopSection;