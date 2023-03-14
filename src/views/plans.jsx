import "../styles/plans.css";
import PlanCard from "./palnCard";
import myPlans from "../data/pricePlanes";

function Plans() {



    return (
        <div className="plans" id="pricing">
            <PlanCard features={myPlans[0]} name="FREE" message="free to listing your app " price="0" />
            <PlanCard features={myPlans[1]} popular={true} color="rgb(131, 238, 131)" name="DIAMOND" message="   Submit your app and collect reviews " price="8" />
            <PlanCard features={myPlans[2]} name="GOLD" message="list your app immediately and include it in users Newsletters" price="32" />
        </div>
    );
}



export default Plans;