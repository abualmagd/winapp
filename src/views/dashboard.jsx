import DashCard from '../components/dashCard';
import useAuth from '../myHooks/useAuth';
import '../styles/dashboard.css';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faGear, faRightFromBracket, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { getLocalUser } from '../services/userServices';
import { useCallback, useEffect, useState } from 'react';
import ReviewsPart from '../components/reviewPart';
import { getUserApps } from '../services/appServices';

function DashBoard() {
    const { token } = useAuth();
    const navigat = useNavigate();
    const [state, updateState] = useState('loading');
    const [data, updateData] = useState([]);
    const { avatar_url } = getLocalUser();
    const [appId, updateAppId] = useState(null);


    const fetchData = useCallback(async () => {
        const { data, error } = await getUserApps();
        if (error) {
            updateState('error');
        } else {
            updateState('data');
            updateData(data);
            console.log(data);

        }
    }, []);

    const chooseApp = (id) => {
        updateAppId(id);
        console.log('from dash card : ', id);
    }


    const dashCards = data.map((app, index) => {
        return <DashCard app={app} key={index} click={chooseApp} id={app['id']} />
    })

    console.log("token from dashboard page :", token);


    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const index = data.findIndex(obj => obj['id'] === appId);
    const app = data[index];

    if (state === 'loading') {

        <div>
            <div className="dashboard" >
                <div className="centerCircular">
                    <FontAwesomeIcon icon={faSpinner} spin size="lg" />
                </div>
            </div>
        </div>
    }
    if (state === 'error') {

        <div className="dashboard" >
            <div className="centerCircular">
                <p className="error">
                    Sorry something error happened
                </p>
            </div>

        </div>

    }

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
                        {app['app_name']}
                    </div>
                    <div className="btton">
                        <Link to={"/editApp/" + appId} style={{ textDecoration: "none" }}>edit app details</Link>
                    </div>
                </div>
                <img className="imageAppDash" src={app['shot_url']} alt="something error sory " />

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

