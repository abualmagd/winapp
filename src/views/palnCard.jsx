import { useNavigate } from "react-router-dom";
import "../styles/plans.css";
import { userAllowedtoAdd } from "../services/appServices";




function PlanCard(props) {

    const navigator = useNavigate();
    const myPlan = props.item;


    const myclass = (value) => {

        if (value) {
            return 'feature';
        }
        return 'inActiveFeature';
    }


    const color = () => {
        if (myPlan['popular']) {
            return "rgb(131, 238, 131)";
        }
        return null;
    }


    //TODO:change after adding more than one plan
    // this will change after adding lemonsquessy 
    const handlePress = async () => {
        const result = await userAllowedtoAdd();
        console.log('limit', result.data);
        if (result.data) {
            console.log('allowing ', result.data)
            navigator('/add');
        } else {
            navigator('/changePlan');
        }


    }




    return (
        <div className="CardPlan">
            {myPlan['popular'] && <div className="popular">most popular </div>}
            <div className="headCard">
                <div className="nameOfPlan">{myPlan['name']}</div>
                <div className="planMessage">{myPlan['subtitle']}</div>
            </div>

            <div className="price"><span>
                {myPlan['price']}</span>$/mo</div>

            <div className="featureContainer">


                <div className={'feature'} >
                    <div className="checktick">
                    </div>
                    <div className="featicon">
                        {"✔ "}
                    </div>
                    <div className="featureContent">
                        {myPlan['many_apps']}
                    </div>
                </div>
                <div className={'feature'} >
                    <div className="checktick">
                    </div>
                    <div className="featicon">
                        {"✔ "}
                    </div>
                    <div className="featureContent">
                        {myPlan['support_type']}
                    </div>
                </div>
                <div className={myclass(myPlan['approval_time'])} >
                    <div className="checktick">
                    </div>
                    <div className="featicon">
                        {"✔ "}
                    </div>
                    <div className="featureContent">
                        {myPlan['approval_time']}
                    </div>
                </div>
                <div className={myclass(myPlan['review_collection'])} >
                    <div className="checktick">
                    </div>
                    <div className="featicon">
                        {myPlan['review_collection'] ? "✔ " : "✘ "}
                    </div>
                    <div className="featureContent">
                        collect reviews
                    </div>
                </div>

                <div className={myclass(myPlan['export_reviews'])} >
                    <div className="checktick">
                    </div>
                    <div className="featicon">
                        {myPlan['export_reviews'] ? "✔ " : "✘ "}
                    </div>
                    <div className="featureContent">
                        export reviews
                    </div>
                </div>

                <div className={myclass(myPlan['featured'])} >
                    <div className="checktick">
                    </div>
                    <div className="featicon">
                        {myPlan['featured'] ? "✔ " : "✘ "}
                    </div>
                    <div className="featureContent">
                        featured in Homepage
                    </div>
                </div>



                <div className={myclass(myPlan['newsletters'])} >
                    <div className="checktick">
                    </div>
                    <div className="featicon">
                        {myPlan['newsletters'] ? "✔ " : "✘ "}
                    </div>
                    <div className="featureContent">
                        list your app in  our newsletters
                    </div>
                </div>
            </div>


            <div className="getStartedBtn" style={{ backgroundColor: color }} onClick={handlePress}>{props.btnContent}</div>

        </div>
    );
}



export default PlanCard;