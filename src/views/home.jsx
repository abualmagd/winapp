import Main from "./main";
import NewPart from "./newSection";
import Plans from "./plans";
import { useState, useEffect } from "react";
import MyAlert from "../components/myAlert";
import MyFooter from "./footer";
import WhyUs from "./whyUs";
import { PageMetaTags } from "../components/myMetTage";
import { myUrl } from "../services/global";


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
            setTimeout(() => { showAlert(); }, 8000);
            localStorage.setItem('subscribed', true);
        }

    }, []);
    return (
        <div>
            <PageMetaTags title={"SoluTrend -the #1 tool discovery platform"} description={"Explore the best tools  that can power your business and save your time!,SoluTrend, a global marketing platform that helps app developers and Software companies to get their products in front of people all across the world. Solutrend is the best app discovery platform"}
                imageUrl={"https://www.solutrend.com/sollogo.png"} url={myUrl} />
            {showed && <MyAlert close={closeAlert} />}
            <Main />
            <NewPart />
            <WhyUs />
            <Plans />
            <MyFooter />
        </div>
    );
}


export default Home;