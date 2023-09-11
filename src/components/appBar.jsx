
import { Link, useNavigate } from 'react-router-dom';
import '../styles/appBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBookmark, faGear, faMoon, faRightFromBracket, faSun, faTh } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../myHooks/useAuth';
import { logMeOut } from '../services/authServices';
import { useState } from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../controllers/themeProvider';




export default function AppBar() {
    const navigat = useNavigate();
    const { token, onLogout, currentUser } = useAuth();
    const [image] = useState(currentUser['avatar_url'] ? currentUser['avatar_url'] : '/assets/images/avatarholder.jpg');
    const { onToggleTheme, theme } = useContext(ThemeContext);



    const join = () => {
        localStorage.setItem('beforeJoin', window.location.pathname);
        navigat('/login');
    }

    const tryLogOut = async () => {
        try {
            await logMeOut();
            onLogout();
            console.log("loged out ")

        } catch (error) {
            console.log(error);
        }
    }


    return (
        <header className="headery">
            <div className="logo" onClick={() => navigat('/')}>
                <img src="https://solutrend.com/assets/images/logo512.png" alt="logo" />
                SoluTrend</div>
            <div className="navigation">
                <Link to="/" className="link-home"> <img src="https://solutrend.com/logo192.png" alt="solutrend logo-find business software" className="small-logo" /></Link>
                <Link to="/blog" className="link">blog</Link>
                <Link to="/price" className="link">pricing</Link>
                <div className="submitButton">
                    <div onClick={() => navigat('/add')} className="linkBtn">list my tool</div>
                </div>
                {token !== null ? <img src={image} alt="r" className="avatar" /> : <div onClick={join} className='link-join'>Join</div>}
                <div className="dropdown">
                    <FontAwesomeIcon icon={faBars} size='lg' cursor={'pointer'} className='dropButton' />

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

                        <Link onClick={onToggleTheme} >
                            <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} />
                            <span className='link-t'>
                                {theme === "dark" ? 'light' : 'dark'}
                            </span> </Link>
                        {token && <Link onClick={tryLogOut} >
                            <FontAwesomeIcon icon={faRightFromBracket} />
                            <span className='link-t'>
                                Log out
                            </span> </Link>}
                    </div>
                </div>


            </div>
        </header>
    );

}