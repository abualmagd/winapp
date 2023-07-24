

import { useNavigate } from "react-router-dom";
import { userAllowedtoAdd } from "../services/appServices";
import "../styles/plans.css";
import useAuth from "../myHooks/useAuth";

//card for price 
//card for change plan 


function PricePlanCard(props) {

    const { token } = useAuth();

    const myPlan = props.item;
    const nav = useNavigate();
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

    /**
     * 
     * if choose free check if he can add or not then to change if note 
     * 
     * 
     */
    const handlePress = async () => {
        if (!token) {
            nav('/login')
        } else {

            if (myPlan['name'].toLowerCase() === 'free') {
                const result = await userAllowedtoAdd();
                console.log('limit', result.data);
                if (result.data) {
                    console.log('allowing ', result.data)
                    nav('/add');
                } else {
                    nav('/limit');
                }
            } else {
                console.log('checkout lemonsqueezy here');

            }
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
            {myPlan['annually'] && <div className="yearly">
                pay yearly and save  {myPlan['year']} dollars
            </div>}
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
                        list your tool in  our newsletters
                    </div>
                </div>
            </div>


            <div className="getStartedBtn" style={{ backgroundColor: color }} onClick={handlePress}>{props.btnContent}</div>

        </div>
    );
}






function ChangePlanCard(props) {
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

        console.log('checkout lemonsqueezy here');
        // here go to checkout 
        //lemonsqueezy 

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
            {myPlan['annually'] && <div className="yearly">
                pay yearly and save  {myPlan['year']} dollars
            </div>}
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
                        list your tool in  our newsletters
                    </div>
                </div>
            </div>


            <div className="getStartedBtn" style={{ backgroundColor: color }} onClick={handlePress}>{props.btnContent}</div>

        </div>
    );
}




export { PricePlanCard, ChangePlanCard };