import Main from "./main";
import NewPart from "./newSection";
import Plans from "./plans";
import { useState, useEffect } from "react";
import MyAlert from "../components/myAlert";
import MyFooter from "./footer";
import WhyUs from "./whyUs";
import { PageMetaTags } from "../components/myMetTage";

function Home() {
    const [showed, updateShowed] = useState(false);

    const showAlert = () => {
        /*  updateShowed(true);*/
    }

    const closeAlert = () => {
        updateShowed(false);
        console.log('callded');
    }

    useEffect(() => {

        //supscription email for users 
        const hasSeenPopup = localStorage.getItem('subscribe_pop');
        if (!hasSeenPopup) {
            setTimeout(() => { showAlert(); }, 6000);
            localStorage.setItem('subscribe_pop', true);
        }

    }, []);
    return (
        <div>
            {showed && <MyAlert close={closeAlert} />}
            <Main />
            <NewPart />
            <WhyUs />
            <Plans />
            <MyFooter />
            <PageMetaTags title={'SoluTrend'} />
        </div>
    );
}


export default Home;