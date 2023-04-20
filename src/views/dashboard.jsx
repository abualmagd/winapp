import DashCard from '../components/dashCard';
import useAuth from '../myHooks/useAuth';
import '../styles/dashboard.css';
import ReviewCard from './reviewCard';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faGear, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

function DashBoard() {
    const { token } = useAuth();
    const navigat = useNavigate();
    let list = [1, 2, 3, 4];
    const dashCards = list.map((app, index) => {
        return <DashCard app={app} key={index} />
    })

    console.log("token from dashboard page :", token);

    let reviews = [1, 2, 3, 4, 5];

    let reviewCards = reviews.map((rev, index) => {

        return <ReviewCard review={rev} key={index} />

    });


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
                        <img src="https://picsum.photos/seed/picsum/200/300" alt="error" className="avatar" />
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

            <div className="activeAppDetails">
                <div className="medPart">
                    <div className="detailsTitle">
                        doitylla overview
                    </div>
                    <div className="btton">
                        <Link to={"/edit"} style={{ textDecoration: "none" }}>edit app details</Link>
                    </div>
                </div>
                <img className="imageAppDash" src="./assets/images/app.png" alt="something error sory " />

                <div className="medPart">
                    <div className="detailsTitle">
                        app reviews :
                    </div>
                </div>
                <div className="reviewsPart" >
                    {reviewCards}
                </div>
            </div>

        </div>
    );
}

export default DashBoard;

