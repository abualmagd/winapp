
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { increaseShareCount } from "../services/appServices";
import { shareOnFacebook, shareOnLinkedIn, shareOnTwitter } from "../services/global"
import "../styles/article.css";
import { faShare } from "@fortawesome/free-solid-svg-icons";


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
                facebook
            </div>
            <div className="btn-link-social" onClick={() => shareOnTwitter(url, title, image)}>
                twitter
            </div>
            <div className="btn-link-social" onClick={() => shareOnLinkedIn(url, title, description)}>

                linkedin
            </div>
            <div className="btn-link-social" onClick={shareApp} >
                more..
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
        await increaseShareCount(appId);
    }

    const shareToTwit = async () => {
        shareOnTwitter(url, title, image);
        await increaseShareCount(appId);
    }

    const shareToLinked = async () => {
        shareOnLinkedIn(url, title, description);
        await increaseShareCount(appId);
    }


    return <>
        <div className="share-to">
            share to
        </div>
        <div className="share-links">
            <div className="btn-link-social" onClick={() => shareToFace()} >
                facebook
            </div>
            <div className="btn-link-social" onClick={() => shareToTwit()}>
                twitter
            </div>
            <div className="btn-link-social" onClick={() => shareToLinked()}>

                linkedin
            </div>
            <div className="btn-link-social" onClick={shareApp} >
                more..
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