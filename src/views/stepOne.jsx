

import "../styles/stepOne.css";
import PlanCard from "./palnCard";
import { getPlans } from "../services/appServices";
import StepsIndicator from "./stepsIndicator";
import { useCallback, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function StepOne() {
    const [state, updateState] = useState('loading');
    const [plans, updatePlans] = useState([]);

    const loadPlans = useCallback(async () => {
        const { error, data } = await getPlans();
        if (error) {
            updateState('error');
        }

        updateState('data');
        updatePlans(data);


    }, []);

    useEffect(() => {
        loadPlans();
    }, [loadPlans]);

    if (state === 'error') {

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

    }

    const cards = plans.map((plan, index) => {
        return <PlanCard item={plan} btnContent={`select ${plan['name']}`} key={index} />
    })
    return (

        <div className="stepOneContainer">
            <StepsIndicator value="25%" />
            <div className="plans" id="pricing">
                {cards}

            </div>
        </div>
    );
}



export default StepOne;