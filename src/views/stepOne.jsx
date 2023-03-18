

import "../styles/stepOne.css";
import PlanCard from "./palnCard";
import myPlans from "../data/pricePlanes";
import StepsIndicator from "./stepsIndicator";

function StepOne() {



    return (
        <div className="stepOneContainer">
            <StepsIndicator value="25%" />
            <div className="planz" id="pricing">
                <PlanCard features={myPlans[0]} name="FREE" message="free to listing your app " price="0" btnContent="Select Free " />
                <PlanCard features={myPlans[1]} popular={true} color="rgb(131, 238, 131)" name="DIAMOND" message="   Submit your app and collect reviews " price="8" btnContent="Select Diamond" />
                <PlanCard features={myPlans[2]} name="GOLD" message="list your app immediately and include it in users Newsletters" price="32" btnContent=" Select Gold " />
            </div>
        </div>

    );
}



export default StepOne;