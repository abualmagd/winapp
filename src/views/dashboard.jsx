import DashCard from '../components/dashCard';
import useAuth from '../myHooks/useAuth';
import '../styles/dashboard.css';
import ReviewCard from './reviewCard';

function DashBoard() {
    const { token } = useAuth();
    let list = [1, 2, 3, 4];
    const dashCards = list.map((app, index) => {
        return <DashCard app={app} key={index} />
    })

    console.log("token from dashboard page :", token);

    let reviews = [1, 2, 3, 4, 5];

    let reviewCards = reviews.map((rev, index) => {

        return <div className="revContainer" key={index} >
            <ReviewCard review={rev} />
        </div>
    });


    return (
        <div className="dashboard">
            <div className="dashboardHead">
                <div className="lgo">WinApp</div>
                <div className="barEnd">
                    <div className="btton">
                        <a href="/#" className="linkBttn">list new app</a>
                    </div>
                    <img src="https://picsum.photos/seed/picsum/200/300" alt="!" className="avatar" />
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
                        edit app details
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

