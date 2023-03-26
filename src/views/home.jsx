import Footer from "./footer";
import Main from "./main";
import NewPart from "./newSection";
import Plans from "./plans";
import { useState, useEffect } from "react";
import MyAlert from "../components/myAlert";
import useAuth from "../myHooks/useAuth";
import { useNavigate } from "react-router-dom";

function Home() {
    const [showed, updateShowed] = useState(false);
    const { onLogin } = useAuth();

    const navigate = useNavigate();
    const showAlert = () => {
        updateShowed(true);
    }

    const closeAlert = () => {
        updateShowed(false);
        console.log('callded');
        const t = "tooooooooooooooooooooooooooooooooooken2";
        onLogin(t);
        navigate("dashboard")
    }

    useEffect(() => {
        setTimeout(() => { showAlert(); }, 5000);
    }, []);
    return (
        <div>
            {showed && <MyAlert close={closeAlert} />}
            <Main />
            <NewPart />
            <Plans />
            <Footer />

        </div>
    );
}


export default Home;