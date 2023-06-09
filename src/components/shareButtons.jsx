
import { shareOnFacebook, shareOnLinkedIn, shareOnTwitter } from "../services/global"
import "../styles/article.css";

export default function ShareButtons({ url, description, title }) {

    return <>
        <div className="share-to">
            share to
        </div>
        <div className="share-links">
            <div className="btn-link-social" onClick={() => shareOnFacebook(url)} >
                facebook
            </div>
            <div className="btn-link-social" onClick={() => shareOnTwitter(url, title)}>
                twitter
            </div>
            <div className="btn-link-social" onClick={() => shareOnLinkedIn(url, title, description)}>

                linkedin
            </div>
        </div>

    </>




}