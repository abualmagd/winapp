import Footer from "./footer";
import Main from "./main";
import NewPart from "./newSection";
import Plans from "./plans";
import { useState, useEffect } from "react";
import MyAlert from "../helper/myAlert";

function Home() {
    const [showed, updateShowed] = useState(false);

    const showAlert = () => {
        updateShowed(current => current = true);
    }

    const closeAlert = () => {
        updateShowed(current => current = false);
        console.log('callded');
    }

    useEffect(() => {
        setTimeout(() => { showAlert(); }, 5000);
    }, []);
    return (
        <div>
            <Main />
            <NewPart />
            <Plans />
            <Footer />

            {showed && <MyAlert close={closeAlert} />}
        </div>
    );
}


export default Home;