import { useNavigate } from "react-router-dom";
import "../styles/plans.css";



function PlanCard(props) {

    const navigator = useNavigate();

    let feats = props.features.map((feat, index) => {
        let myClass = feat.include ? "feature" : "inActiveFeature";
        return <div className={myClass} key={index}>
            <div className="checktick">
            </div>
            <div className="featicon">
                {feat.include ? "✔ " : "✘ "}
            </div>
            <div className="featureContent">
                {feat.content}
            </div>
        </div>
    })


    const handlePress = async () => {
        if (props.name === "FREE") {

            navigator('/add',);
        }

    }




    return (
        <div className="CardPlan">
            {props.popular && <div className="popular">most popular </div>}
            <div className="headCard">
                <div className="nameOfPlan">{props.name}</div>
                <div className="planMessage">{props.message}</div>
            </div>

            <div className="price"><span>
                {props.price}</span>$/mo</div>
            <div className="featureContainer">
                {feats}
            </div>


            <div className="getStartedBtn" style={{ backgroundColor: props.color }} onClick={handlePress}>{props.btnContent}</div>

        </div>
    );
}



export default PlanCard;