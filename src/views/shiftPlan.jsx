import "../styles/stepOne.css";
import PlanCard from "./palnCard";
import myPlans from "../data/pricePlanes";


function PlanChanger() {
    const userPlan = "free";


    return (
        <div className="stepOneContainer" style={{ justifyContent: "center" }}>
            <div className="user-plan" style={{ marginLeft: "20px", fontSize: "1.5rem" }}>
                your current plan is  {userPlan}
            </div>
            <div className="planz" id="pricing">
                {userPlan !== "diamond" && <PlanCard features={myPlans[1]} popular={true} color="rgb(131, 238, 131)" name="DIAMOND" message="   Submit your app and collect reviews " price="8" btnContent="Select Diamond" />}
                {userPlan !== "gold" && <PlanCard features={myPlans[2]} name="GOLD" message="list your app immediately and include it in users Newsletters" price="32" btnContent=" Select Gold " />}
                {userPlan !== "free" && <PlanCard features={myPlans[0]} name="FREE" message="free to listing your app " price="0" btnContent="Select Free " />
                }
            </div>
        </div>

    );
}



export default PlanChanger;