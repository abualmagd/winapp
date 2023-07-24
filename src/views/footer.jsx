import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faInstagram, faReddit } from "@fortawesome/free-brands-svg-icons";
import "../styles/myFooter.css"
import { Link } from "react-router-dom";
import Sitemap from "../components/sitemap";

function MyFooter() {

    const gotoFacebook = () => {
        window.open('https://www.facebook.com/profile.php?id=100093533620919', '_blank');
    }

    const gotoTwitter = () => {
        window.open('https://twitter.com/SoluTrend', '_blank');
    }
    const gotoInsta = () => {
        window.open('https://instagram.com/solutrendhq', '_blank');
    }
    const gotoReditt = () => {
        window.open('https://www.reddit.com/r/Solutrend', '_blank');
    }


    return (
        <div >
            <Sitemap />

            <footer className="myFooter">
                <div className="copyRight">
                    ©️ 2023 SoluTrend
                    All rights reserved
                </div>
                <div className="social">
                    {/**add <a></a> to social */}
                    <FontAwesomeIcon icon={faTwitter} size="2x" cursor={"pointer"} color="#1DA1F2" onClick={gotoTwitter} />
                    <FontAwesomeIcon icon={faFacebook} size="2x" cursor={"pointer"} color="#3282F6" onClick={gotoFacebook} />
                    <FontAwesomeIcon icon={faInstagram} size="2x" cursor={"pointer"} color="red" onClick={gotoInsta} />
                    <FontAwesomeIcon icon={faReddit} size="2x" cursor={"pointer"} color="red" onClick={gotoReditt} />

                </div>

                <div className="support">

                    contact us at:
                    hi@solutrend.com
                </div>

            </footer>
            <div className='terms-footer'>Solutrend
                <Link to={'https://www.solutrend.com/terms.html'} target='_blank'>  Terms of Service </Link >
                and <Link to={'https://www.solutrend.com/privacy.html'} target='_blank'> Privacy Policy </Link>
                , including <Link to={'https://www.solutrend.com/cookie.html'} target='_blank'> Cookie Use. </Link></div>
        </div>
    );
}

export default MyFooter;