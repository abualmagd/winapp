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
            <PageMetaTags title={'SoluTrend'} description={'Explore the best apps and softwares that can power your business and save your time!'}
                imageUrl={'https://pqfiwahrarbivadfpoix.supabase.co/storage/v1/object/public/logos/solutrendlogo.png'}
                url={myUrl} />
        </div>
    );
}


export default Home;