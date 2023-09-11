
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { increaseShareCount } from "../services/appServices";
import { shareOnFacebook, shareOnLinkedIn, shareOnTwitter } from "../services/global"
import "../styles/article.css";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare, faLinkedin, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";


export function ShareButtons({ url, description, title, image }) {

    const shareApp = () => {
        try {

            navigator.share({ title, description, url });

            console.log('shared succfuly');
        } catch (error) {
            console.log(error);
        }
    }

    return <>
        <div className="share-to">
            share to
        </div>
        <div className="share-links">
            <div className="btn-link-social" onClick={() => shareOnFacebook(url)} >
                <FontAwesomeIcon icon={faFacebookSquare} size="xl" color="#3b5998" /> facebook
            </div>
            <div className="btn-link-social" onClick={() => shareOnTwitter(url, title, image)}>
                <FontAwesomeIcon icon={faTwitterSquare} size="xl" color="#00aced" /> twitter
            </div>
            <div className="btn-link-social" onClick={() => shareOnLinkedIn(url, title, description)}>
                <FontAwesomeIcon icon={faLinkedin} size="xl" color=" #0e76a8" /> linkedin
            </div>
            <div className="btn-link-social" onClick={shareApp} >
                <FontAwesomeIcon icon={faShare} size="xl" color="#3b5998" /> more..
            </div>
        </div>

    </>

}





export function ShareButtonsForApp({ url, description, title, appId, image }) {


    const shareApp = () => {
        try {

            navigator.share({ title, description, url });

            console.log('shared succfuly');
        } catch (error) {
            console.log(error);
        }
    }

    const shareToFace = async () => {
        shareOnFacebook(url);
        if (appId)
            await increaseShareCount(appId);
    }

    const shareToTwit = async () => {
        shareOnTwitter(url, title, image);
        if (appId)
            await increaseShareCount(appId);
    }

    const shareToLinked = async () => {
        shareOnLinkedIn(url, title, description);
        if (appId)
            await increaseShareCount(appId);
    }


    return <>
        <div className="share-to">
            share to
        </div>
        <div className="share-links">
            <div className="btn-link-social" onClick={() => shareToFace()} >
                <FontAwesomeIcon icon={faFacebookSquare} size="xl" color="#3b5998" /> facebook
            </div>
            <div className="btn-link-social" onClick={() => shareToTwit()}>
                <FontAwesomeIcon icon={faTwitterSquare} size="xl" color="#00aced" /> twitter
            </div>
            <div className="btn-link-social" onClick={() => shareToLinked()}>

                <FontAwesomeIcon icon={faLinkedin} size="xl" color=" #0e76a8" /> linkedin
            </div>
            <div className="btn-link-social" onClick={shareApp} >
                <FontAwesomeIcon icon={faShare} size="xl" color="#3b5998" /> more..
            </div>
        </div>

    </>

}


export function SharerIcon({ url, description, title }) {

    const shareApp = () => {
        try {

            navigator.share({ title, description, url });

            console.log('shared succfuly');
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="btn-link-social" onClick={shareApp} style={{ marginLeft: "15px" }}>
            <FontAwesomeIcon icon={faShare} size="xl" color="gray" />
        </div>
    );
}