import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
import "../styles/myFooter.css"

function MyFooter() {

    const gotoFacebook = () => {
        window.open('https://www.facebook.com/profile.php?id=100093533620919', '_blank');
    }

    const gotoTwitter = () => {
        window.open('https://twitter.com/SoluTrend', '_blank');
    }

    return (
        <footer className="myFooter">
            <div className="copyRight">
                ©️ 2023 SoluTrend
                All rights reserved
            </div>
            <div className="social">
                <FontAwesomeIcon icon={faTwitter} size="2x" cursor={"pointer"} color="#1DA1F2" onClick={gotoTwitter} />
                <FontAwesomeIcon icon={faFacebook} size="2x" cursor={"pointer"} color="#3282F6" onClick={gotoFacebook} />

            </div>

            <div className="support">

                contact us at:
                hi@solutrend.com
            </div>
        </footer>
    );
}

export default MyFooter;