import { Link } from "react-router-dom";
import '../styles/main.css';

export default function Sitemap() {
    return (
        <div className="sitemap-div">
            <div className="for-you">
                <h2>
                    For you
                </h2>

                <Link to={"/login"} >

                    <span className='link-t'>
                        Join
                    </span>

                </Link>
                <Link to={"/explore/app"} >

                    <span className='link-t'>
                        Explore
                    </span>

                </Link>
                <Link to={"/blog"} >

                    <span className='link-t'>
                        Blog
                    </span>

                </Link>

                <Link to={"/saved"} >

                    <span className='link-t'>
                        Saved
                    </span>

                </Link>
            </div>

            <div className="for-builders">
                <h2>For Founders</h2>
                <Link to={"/settings"} >

                    <span className='link-t'>
                        Account
                    </span>

                </Link>
                <Link to={"/dashboard"} >

                    <span className='link-t'>
                        Dashboard
                    </span>

                </Link>
                <Link to={"/add"} >

                    <span className='link-t'>
                        Get-listed
                    </span>

                </Link>
                <Link to={"/pricing"} >

                    <span className='link-t'>
                        Pricing
                    </span>

                </Link>
            </div>


        </div>
    );
}