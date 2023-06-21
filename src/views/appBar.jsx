
import { Link, useNavigate } from 'react-router-dom';
import '../styles/appBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faEllipsisVertical, faGear, faMoon, faRightFromBracket, faSun, faTh } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../myHooks/useAuth';
import { logMeOut } from '../services/authServices';
import { useCallback, useEffect } from 'react';
import { getLocalUser, getUserData, removeUserLocal, saveUserLocal } from '../services/userServices';
import { useContext } from 'react';
import { ThemeContext } from '../controllers/themeProvider';
import { userAllowedtoAdd } from '../services/appServices';


export default function AppBar() {
    const navigat = useNavigate();
    const { token, onLogout } = useAuth();
    const { avatar_url } = getLocalUser() || '/assets/images/avatarholder.jpg';
    const { onToggleTheme, theme } = useContext(ThemeContext);


    const limitUserApps = async () => {
        const { plan } = getLocalUser() ?? 'free';
        const result = await userAllowedtoAdd();
        console.log('limi', result.data);
        if (!result.data) {
            navigat('/limit');
        } else {
            if (plan === 'free') {
                navigat('/plan');
            } else {
                navigat('/add');
            }

        }
    }


    const join = () => {
        localStorage.setItem('beforeJoin', window.location.pathname);
        navigat('/login');
    }

    const tryLogOut = async () => {
        try {
            await logMeOut();
            onLogout();
            removeUserLocal();
            console.log("loged out ")

        } catch (error) {
            console.log(error);
        }
    }
    const getMyUser = useCallback(async () => {
        if (token) {
            const { data, error } = await getUserData();

            if (data) {
                saveUserLocal(data[0]);

            }
            if (error) {
                console.log(error.message)
            }
        }
    }, [token]);

    useEffect(() => {
        getMyUser();
    }, [getMyUser]);

    return (
        <header className="headery">
            <div className="logo" onClick={() => navigat('/')}>
                <img src="/assets/images/logo512.png" alt="W" />
                SoluTrend</div>
            <div className="navigation">
                <Link to="/" className="link-home"> <img src="/assets/images/logo512.png" alt="W" className="small-logo" /></Link>
                <Link to="/blog" className="link">blog</Link>
                <a href="/#pricing" className="link">pricing</a>
                <div className="submitButton">
                    <div onClick={() => limitUserApps()} className="linkBtn">list your app</div>
                </div>
                {token !== null ? <div className="dropdown">

                    <img src={avatar_url} alt="r" className="avatar" />
                    <FontAwesomeIcon icon={faEllipsisVertical} size='xl' cursor={'pointer'} className='dropButton' />

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
                        <Link onClick={tryLogOut} >
                            <FontAwesomeIcon icon={faRightFromBracket} />
                            <span className='link-t'>
                                Log out
                            </span> </Link>
                    </div>
                </div> : <div onClick={join} className='link-join'>Join</div>}


            </div>
        </header>
    );

}