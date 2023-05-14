
import { Link, useNavigate } from 'react-router-dom';
import '../styles/appBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faEllipsisVertical, faGear, faRightFromBracket, faTh } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../myHooks/useAuth';
import { logMeOut } from '../services/authServices';
import { useCallback, useEffect } from 'react';
import { getLocalUser, getUserData, saveUserLocal } from '../services/userServices';


export default function AppBar() {
    const navigat = useNavigate();
    const { token, onLogout } = useAuth();
    const { avatar_url } = getLocalUser() || '';


    const tryLogOut = async () => {
        try {
            await logMeOut();
            onLogout();
            console.log("loged out ")
            navigat("/login", -1);
        } catch (error) {
            console.log(error);
        }
    }
    const getMyUser = useCallback(async () => {
        if (token) {
            console.log('get my user', token)
            const { data, error } = await getUserData();

            if (data) {
                saveUserLocal(data[0]);
                console.log("user-name", data[0]['name'])
            }
            if (error) {
                console.log(error.message)
            }
        }
        console.log('no user logined ');
    }, [token]);

    useEffect(() => {
        getMyUser();
    }, [getMyUser]);

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
                {token !== null ? <div className="dropdown">

                    <img src={avatar_url} alt="error" className="avatar" />
                    <FontAwesomeIcon icon={faEllipsisVertical} size='xl' cursor={'pointer'} />

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
                        <Link onClick={tryLogOut} >
                            <FontAwesomeIcon icon={faRightFromBracket} />
                            <span className='link-t'>
                                Log out
                            </span> </Link>
                    </div>
                </div> : <Link to={"/login"} className='link'>Join</Link>}


            </div>
        </header>
    );

}