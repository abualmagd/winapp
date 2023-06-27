import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
import "../styles/myFooter.css"
import { Link } from "react-router-dom";

function MyFooter() {

    const gotoFacebook = () => {
        window.open('https://www.facebook.com/profile.php?id=100093533620919', '_blank');
    }

    const gotoTwitter = () => {
        window.open('https://twitter.com/SoluTrend', '_blank');
    }


    return (
        <div>


            <footer className="myFooter">
                <div className="copyRight">
                    ©️ 2023 SoluTrend
                    All rights reserved
                </div>
                <div className="social">
                    {/**add <a></a> to social */}
                    <FontAwesomeIcon icon={faTwitter} size="2x" cursor={"pointer"} color="#1DA1F2" onClick={gotoTwitter} />
                    <FontAwesomeIcon icon={faFacebook} size="2x" cursor={"pointer"} color="#3282F6" onClick={gotoFacebook} />

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