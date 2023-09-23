import Card from "../components/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { getHeighlyApps } from "../services/appServices";
import { useQuery } from "react-query";


function TopSection() {

    const page=0;
    const {isLoading,isError,data}=useQuery({queryKey:["getHeighlyApps",page],queryFn:()=>getHeighlyApps(page)})

if(isLoading){

    return (
        <div >
            <div className="topTitle" > Explore the best :</div>


            <div className='center_progress'><FontAwesomeIcon icon={faSpinner} pulse size="lg" /> </div> 
               
        </div>

    );
}
else if(isError){

    <div >
    <div className="topTitle" > Explore the best :</div>


    <div className='center_progress'>Sorry something error </div> 
       
</div>


}

const lista=data.data;
    var cards = lista.map((item, index) => {
        return <Card key={index} data={item} />
    });
    return (
        <div >
            <div className="topTitle" > Explore the best :</div>
          <section className="topApps">
                {cards}
            </section>
        </div>

    );
}


export default TopSection;