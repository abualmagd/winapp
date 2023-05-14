import DashCard from '../components/dashCard';
import useAuth from '../myHooks/useAuth';
import '../styles/dashboard.css';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faGear, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { getLocalUser } from '../services/userServices';
import { useState } from 'react';
import ReviewsPart from '../components/reviewPart';

function DashBoard() {
    const { token } = useAuth();
    const navigat = useNavigate();
    const { avatar_url } = getLocalUser();
    const [appId, updateAppId] = useState(null);


    const chooseApp = (id) => {
        updateAppId(id);
        console.log('from dash card : ', id);
    }

    let list = [1, 2, 3, 4];
    const dashCards = list.map((app, index) => {
        return <DashCard app={app} key={index} click={chooseApp} id={index} />
    })

    console.log("token from dashboard page :", token);





    return (
        <div className="dashboard">

            <div className="dashboardHead">
                <div className="logo" onClick={() => navigat('/')}>
                    <img src="/favic.ico" alt="W" />
                    WinApp</div>
                <div className="barEnd">
                    <div className="btton">
                        <Link to="/settings" className="linkBttn">list new app</Link>
                    </div>
                    <div className="dropdown">
                        <img src={avatar_url} alt="error" className="avatar" />
                        <div className="dropdown-content">

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
                    </div>
                </div>

            </div>
            <div className="userAppLists">
                {dashCards}
            </div>

            {appId && <div className="activeAppDetails">
                <div className="medPart">
                    <div className="detailsTitle">
                        doitylla overview
                    </div>
                    <div className="btton">
                        <Link to={"/editApp"} style={{ textDecoration: "none" }}>edit app details</Link>
                    </div>
                </div>
                <img className="imageAppDash" src="./assets/images/app.png" alt="something error sory " />

                <div className="medPart">
                    <div className="detailsTitle">
                        app reviews :
                    </div>
                </div>

                <div className="reviewsPart" >
                    <ReviewsPart id={appId} />
                </div>
            </div>}

        </div>
    );
}

export default DashBoard;

