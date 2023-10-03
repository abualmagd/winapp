import '../styles/newSection.css';
import NewCard from "./newCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { getNewApps } from '../services/appServices';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
function NewPart() {
    const navigat = useNavigate();

    const {isLoading,isError,data}=useQuery({queryKey:"getNewApps",queryFn:getNewApps});




if(isLoading){

    return (
        <div className="newContainer">
            <div className='center_progress'><FontAwesomeIcon icon={faSpinner} pulse size="lg" /> </div> 
            <div onClick={() => navigat('/add')} className="addBtn">List My Tool Now</div>
        </div>

    );

}
else if(isError){

    return (
        <div className="newContainer">
           
        <div className='center_progress'>Something error ,sorry</div> 
        <div onClick={() => navigat('/add')} className="addBtn">List My Tool Now</div>
    </div>
    );
}

const lista=data.data||[];
    var cards = lista.map((item, index) => {
        return <NewCard key={index} data={item} />
    });
    return (
        <div className="newContainer">
            {lista.length > 0 && <div className="topTitle"> The New Listed Tools :</div>}
          <section className="newSection">
                {cards}
            </section>
            <div onClick={() => navigat('/add')} className="addBtn">List My Tool Now</div>
        </div>

    );
}


export default NewPart;