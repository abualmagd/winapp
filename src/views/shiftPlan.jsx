import "../styles/stepOne.css";
import { getLocalUser } from "../services/userServices";


function PlanChanger() {
    const { plan } = getLocalUser() ?? "free";
    const userPlan = plan;

    // will change here after add subscription plans 
    //get plans from mybase and get user plan 
    //change it by calling billing gateway 

    return (
        <div className="shiftContainer" style={{ justifyContent: "center" }}>
            <div className="user-plan" style={{ minWidth: "100px", fontSize: "1.5rem" }}>
                your current plan is  {userPlan}
            </div>
            <div className="planz" id="pricing" style={{ minWidth: "100px", fontSize: "1rem" }}>
                We have now the only free plan, thanks
            </div>
        </div>

    );
}



export default PlanChanger;