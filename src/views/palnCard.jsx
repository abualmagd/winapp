import "../styles/plans.css";



function PlanCard(props) {



    let feats = props.features.map((feat, index) => {
        return <div className="feature" key={index}>
            <div className="checktick">
            </div>
            <div className="featureContent">
                {feat}
            </div>
        </div>
    })
    return (
        <div className="CardPlan">
            {props.popular && <div className="popular">most popular </div>}
            <div className="nameOfPlan">{props.name}</div>
            <div className="planMessage">{props.message}</div>
            <div className="price">{props.price}</div>
            <div>
                {feats}
            </div>


            <div className="getStartedBtn">Get Started Now</div>

        </div>
    );
}



export default PlanCard;