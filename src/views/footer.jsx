import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "../styles/myFooter.css"

function MyFooter() {

    return (
        <footer className="myFooter">
            <div className="copyRight">
                ©️ 2023 WinApp
                All rights reserved
            </div>
            <div className="social">
                <FontAwesomeIcon icon={faTwitter} size="2x" cursor={"pointer"} color="#1DA1F2" />
                <FontAwesomeIcon icon={faFacebook} size="2x" cursor={"pointer"} color="#3282F6" />
                <FontAwesomeIcon icon={faInstagram} size="2x" cursor={"pointer"} color="#F62FA7" />

            </div>

            <div className="support">

                contact us at:
                support@winapp.io
            </div>
        </footer>
    );
}

export default MyFooter;