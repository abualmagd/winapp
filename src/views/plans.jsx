import "../styles/plans.css";
import PlanCard from "./palnCard";

function Plans() {

    let features1 = ['1 app submissions',
        'Limited support',
        '96 hours to approve'];

    let features2 = ['Limit: 3 apps',
        'Instant Approval',
        'Feature on HomePage',
        'Dedicated support',
        'Collect Reviews'];

    let features3 = ['Limit: 10 apps',
        'Limited support',
        'Auto Approval',
        'Featured on HomePage',
        'Collect Reviews',
        'Monthly Newsletters'];

    return (
        <div className="plans">
            <PlanCard features={features1} name="FREE" message="free to listing your app " price="0" />
            <PlanCard features={features2} name="DIAMOND" message="Submit up to 3 apps and collect reviews " price="8" />
            <PlanCard features={features3} name="GOLD" message="submit up to 10 listings 
            and get more visibility and Newsletters" price="32" />
        </div>
    );
}



export default Plans;