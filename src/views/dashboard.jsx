import DashCard from '../components/dashCard';
import useAuth from '../myHooks/useAuth';
import '../styles/dashboard.css';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faGear, faMoon, faRightFromBracket, faSpinner, faSun } from '@fortawesome/free-solid-svg-icons';
import { getLocalUser } from '../services/userServices';
import { useCallback, useContext, useEffect, useState } from 'react';
import ReviewsPart from '../components/reviewPart';
import { getUserApps, userAllowedtoAdd } from '../services/appServices';
import { ThemeContext } from '../controllers/themeProvider';

function DashBoard() {
    const { token } = useAuth();
    const navigat = useNavigate();
    const [state, updateState] = useState('loading');
    const [data, updateData] = useState([]);
    const { avatar_url } = getLocalUser();
    const [appId, updateAppId] = useState(null);
    const { onToggleTheme, theme } = useContext(ThemeContext);
    //data is user apps and length of it is the count of user apps
    //countApps=data.length
    //check user plan and compare 


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
                <div className="lgo" onClick={() => navigat('/')}>
                    <img src="assets/images/logo512.png" alt="W" />
                    <div className="dash-logo">SoluTrend</div> </div>
                <div className="barEnd">
                    <div className="btton">
                        <div onClick={() => limitUserApps()} className="linkBttn">
                            list new app
                        </div>
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

                            <Link onClick={onToggleTheme} >
                                <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} />
                                <span className='link-t'>
                                    {theme === "dark" ? 'light' : 'dark'}
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
                    <ReviewsPart id={appId} isDash={true} count={app['reviews_count']} />
                </div>
            </div>}

        </div>
    );
}

export default DashBoard;

