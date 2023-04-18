
import { Link, useNavigate } from 'react-router-dom';
import '../styles/appBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBookmark, faGear, faRightFromBracket, faTh } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../myHooks/useAuth';


export default function AppBar() {
    const navigat = useNavigate();
    const { token } = useAuth();

    return (
        <header className="headery">
            <div className="logo" onClick={() => navigat('/')}>
                <img src="/favic.ico" alt="W" />
                WinApp</div>
            <div className="navigation">

                <a href="/#" className="link">blog</a>
                <a href="http://localhost:3000/#pricing" className="link">pricing</a>
                <div className="submitButton">
                    <Link to="/plan" className="linkBtn">list your app</Link>
                </div>
                {token ? <div className="dropdown">

                    {/* <img src="https://picsum.photos/seed/picsum/200/300" alt="error" className="avatar" />*/}
                    <FontAwesomeIcon icon={faBars} />

                    <div className="dropdown-content">
                        <Link to={"/dashboard"} >
                            <FontAwesomeIcon icon={faTh} />
                            <span className='link-t'>
                                Dashboard
                            </span>

                        </Link>
                        <Link to={"/settings"} >
                            <FontAwesomeIcon icon={faGear} />
                            <span className='link-t'>
                                Settings
                            </span>

                        </Link>
                        <Link to={"/saved"} >
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
                </div> : <Link to={"/login"}>Join</Link>}


            </div>
        </header>
    );

}