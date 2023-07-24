import "../styles/stepOne.css";
import { getLocalUser } from "../services/userServices";
import { planz } from "../data/pricePlanes";
import { ChangePlanCard } from "../components/allPlanCard";


function PlanChanger() {
    const { plan } = getLocalUser() ?? "free";
    const userPlan = plan;

    // will change here after add subscription plans 
    //get plans from mybase and get user plan 
    //change it by calling billing gateway 
    const cards = planz.map((plan, index) => {
        console.log('user', userPlan);
        console.log('the plan', plan['name']);
        if (plan['name'].toLowerCase() === userPlan.toLowerCase()) {
            return <></>
        }
        return <ChangePlanCard item={plan} btnContent='Select' key={index} />
    })
    return (
        <div className="shiftContainer" style={{ justifyContent: "center" }}>
            <div className="user-plan" style={{ minWidth: "100px", fontSize: "1.5rem" }}>
                your current plan is  {userPlan}
            </div>
            <div className="planza" id="pricing">
                {cards}
            </div>
        </div>

    );
}



export default PlanChanger;