import "../styles/stepOne.css";
import { getLocalUser } from "../services/userServices";


function PlanChanger() {
    const { plan } = getLocalUser();
    const userPlan = plan;

    // will change here after add subscription plans 
    //get plans from mybase and get user plan 
    //change it by calling billing gateway 

    return (
        <div className="stepOneContainer" style={{ justifyContent: "center" }}>
            <div className="user-plan" style={{ marginLeft: "20px", fontSize: "1.5rem" }}>
                your current plan is  {userPlan}
            </div>
            <div className="planz" id="pricing">
                We have now the only free plan, thanks
            </div>
        </div>

    );
}



export default PlanChanger;