import Main from "../components/main";
import NewPart from "../components/newSection";
import { useState, useEffect } from "react";
import MyAlert from "../components/myAlert";
import MyFooter from "../components/footer";
import WhyUs from "./whyUs";
import { PageMetaTags } from "../components/myMetTage";
import { myUrl } from "../services/global";
import { homeJsonLd } from "../services/jsonld";
import { MonthTools } from "../components/monthTools";





function Home() {
    const [showed, updateShowed] = useState(false);

    const showAlert = () => {
        updateShowed(true);
    }

    const closeAlert = () => {
        updateShowed(false);
        console.log('callded');
    }



    useEffect(() => {


        //supscription email for users 
        const hasSeenPopup = localStorage.getItem('subscribed');
        if (!hasSeenPopup) {
            setTimeout(() => { showAlert(); }, 9000);
            localStorage.setItem('subscribed', true);
        }

    }, []);
    return (
        <div>
            <PageMetaTags title={"SoluTrend - Find Your Business Software Solution Now!"} description={"Solutrend, the best software discovery platform. Get powerful business solutions and save time! Find your problem's answer here,Compare software features, ratings & pricing plans to find what's right for you . "}
                imageUrl={"https://solutrend.com/sollogo.png"} url={myUrl} jsonld={homeJsonLd} />
            {showed && <MyAlert close={closeAlert} />}
            <Main />
            <MonthTools />
            <NewPart />
            <WhyUs />
            <div className="space" style={{ height: "50px" }}></div>
            <MyFooter />
        </div>
    );
}


export default Home;