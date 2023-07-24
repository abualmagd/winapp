
import "../styles/plans.css";
/*import { useCallback, useEffect, useState } from "react";
import { getPlans } from "../services/appServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";*/
import { planz } from "../data/pricePlanes";
import { PricePlanCard } from "../components/allPlanCard";
function Plans() {




    /* const [state, updateState] = useState('data');
     const [plans, updatePlans] = useState([]);*/

    /*const loadPlans = useCallback(async () => {
        const { error, data } = await getPlans();
        if (error) {
            updateState('error');
            console.log('error', error.message);
        } if (data) {

            console.log('data', data);
            updateState('data');
            updatePlans(data);
        }




    }, []);*/

    /* useEffect(() => {
         loadPlans();
     }, [loadPlans]);*/

    /*  if (state === 'error') {
  
          return <div>
              <div className="plans" >
  
                  <p className="error">
                      Sorry something error happened
                  </p>
  
              </div>
          </div>
      }
      if (state === 'loading') {
          return <div className="plans" >
              <div className="centerCircular">
                  <FontAwesomeIcon icon={faSpinner} spin size="lg" />
              </div>
          </div>
  
      } else {*/

    const cards = planz.map((plan, index) => {
        return <PricePlanCard item={plan} btnContent="List Your Tool Now" key={index} />
    })

    return (
        <div className="plans" id="pricing">

            {cards}

        </div>
    );
}




export default Plans;