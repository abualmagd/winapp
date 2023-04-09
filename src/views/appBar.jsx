
import { Link } from 'react-router-dom';
import '../styles/appBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faGear, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';


export default function AppBar() {
    return (
        <header className="headery">
            <div className="logo">
                <img src="/favic.ico" alt="W" />
                WinApp</div>
            <div className="navigation">

                <a href="/#" className="link">blog</a>
                <a href="#pricing" className="link">pricing</a>
                <div className="submitButton">
                    <Link to="/plan" className="linkBtn">list your app</Link>
                </div>
                <div class="dropdown">
                    <img src="https://picsum.photos/seed/picsum/200/300" alt="error" className="avatar" />
                    <div class="dropdown-content">
                        <Link to={"/add"} >
                            <FontAwesomeIcon icon={faGear} />
                            <span className='link-t'>
                                Settings
                            </span>

                        </Link>
                        <Link to={"/bookmark"} >
                            <FontAwesomeIcon icon={faBookmark} />
                            <span className='link-t'>
                                Saved
                            </span> </Link>
                        <Link to={'/login'} >
                            <FontAwesomeIcon icon={faRightFromBracket} />
                            <span className='link-t'>
                                Log out
                            </span> </Link>
                    </div>
                </div>

            </div>
        </header>
    );

}