import AppBar from "./appBar";
import '../styles/appPage.css';
import '../styles/main.css';
import { useCallback, useState } from "react";
import React from "react";
import { useEffect } from "react";
import ReviewModal from "../components/reviewModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faCalendar, faEnvelope, faLink, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { bookmark, getAPPInfo, unBookmark } from "../services/appServices";
import ReviewsPart from "../components/reviewPart";
import Suggestion from "../components/suggestionPart";
import { ToastContainer } from "../components/toastContainer";
import ReportModal from "../components/reportModal";
import { PageMetaTags } from "../components/myMetTage";
import ShareButtons from "../components/shareButtons";
import { myUrl } from "../services/global";



function AppPage() {

    const [display, updateDisplay] = useState("none");
    const [RevModal, updateRevModal] = useState(false);
    const [RepModal, updateRepModal] = useState(false);
    const [bookmarked, updateBookmarked] = useState(false);
    const [state, updateState] = useState('loading');
    const [app, updateApp] = useState(null);
    const { name } = useParams();
    const [message, updateMessage] = useState();
    const [displ, updateDispl] = useState("none");
    const [errory, updateErrory] = useState(true);
    const [build, updateBuild] = useState(false);


    const currentUrl = myUrl + app['name'];

    const saveApp = async () => {
        const { error } = await bookmark(app["id"]);
        if (error) {
            // notify  the user
            notify(error.message, true);
        }
        //notify user every thing ok 
        updateBookmarked(true);
        notify("this app saved to your bookmarks", false)

    }

    const unSaveApp = async () => {
        const { error } = await unBookmark(app["id"]);
        if (error) {
            // notify  the user
            notify(error.message, true);
        }
        //notify user every thing ok 
        updateBookmarked(false);
        notify("this app removed from your bookmarks", false)

    }




    function showModal() {
        updateRevModal(true);
    }


    function hideModal() {
        updateRevModal(false);
    }
    function showRepModal() {
        updateRepModal(true);

    }


    function hideRepModal() {
        updateRepModal(false);
    }




    function showStickyBtn() {
        updateDisplay("flex");
    }


    function hideStickyBtn() {
        updateDisplay("none");
    }

    const getAppByName = useCallback(async () => {
        const { data, error } = await getAPPInfo(name);
        if (error) {
            updateState('error');
            console.log(error.message);
        } else {
            updateState('data');
            console.log(data);
            updateBookmarked(data[0]['is_favorite']);
            updateApp(data[0]);

        }
    }, [name]);

    const notify = (mesg, error) => {
        updateMessage(mesg);
        updateErrory(error);
        updateDispl("flex");
        setTimeout(() => {
            updateDispl("none");
            console.log('close')
        }, 3000);
        console.log('nottttttttttttt')
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                showStickyBtn();
            } else {
                hideStickyBtn();
            }
        });
        getAppByName();
    }, [getAppByName]);





    if (state === 'loading') {
        return <div>
            <div className="appPageContainer" >
                <div className="centerCircular">
                    <FontAwesomeIcon icon={faSpinner} spin size="lg" />
                </div>
            </div>
        </div>
    }

    if (state === 'error') {
        return <div>
            <div className="appPageContainer" >
                <div className="centerCircular">
                    <p className="error">
                        Sorry something error happened
                    </p>
                </div>
            </div>
        </div>
    }

    return (
        <div>
            <div className="appPageContainer" >
                <PageMetaTags title={app['app_name']} description={app['description']} imageUrl={app['logo_url']} url={currentUrl} />
                <ToastContainer display={displ} message={message} error={errory} />
                {RevModal && <ReviewModal close={hideModal} appId={app['id']} rebuild={() => updateBuild(!build)} />
                }
                {RepModal && <ReportModal close={hideRepModal} appId={app['id']} />
                }
                <AppBar />
                <img className="imageApp" src={app['shot_url']} alt="something error sory " style={{ backgroundColor: "grey" }} />
                <div className="buttons">
                    <div className="visit" onClick={() => window.open(app['app_url'], '_blank')}>
                        <span className="icony">
                            <FontAwesomeIcon icon={faLink} color="#000" />
                        </span>
                        Visit App Website</div>
                    {app['calendly_url'] && <div className="call" onClick={() => window.open(app['calendly_url'], '_blank')}>
                        <span className="icony">
                            <FontAwesomeIcon icon={faCalendar} color="#000" />
                        </span>
                        Book a Demo Call
                    </div>}

                    {bookmarked ?
                        <div className="favorite" onClick={() => {
                            // remove frome save 
                            unSaveApp();
                        }} >
                            <span className="icony" >
                                <FontAwesomeIcon icon={faBookmark} color="#000" />
                            </span>
                            UnSaved this app
                        </div>

                        : <div className="favorite" onClick={() => {
                            // ADD this app to saved 
                            saveApp();
                        }} >
                            <span className="icony">
                                <FontAwesomeIcon icon={faBookmark} color="#000" />
                            </span>
                            Save this app
                        </div>}
                    {app['contact_email'] && <div className="message" onClick={() => window.open(`mailto:${app['contact_email']}?subject=Test%20Email&body=This%20is%20a%20test%20email`)}>
                        <span className="icony">
                            <FontAwesomeIcon icon={faEnvelope} color="#000" />
                        </span>
                        Send Message
                    </div>}
                </div>
                <div className="content">
                    <div className="appInfo">
                        <h4 className="appName">{name}</h4>
                        <h6 className="whats">whats {name} ?</h6>
                        <div className="whatsThis">
                            {app['what_app']}
                        </div>

                        <h6 className="why">why to use figma ai ?</h6>
                        <div className="why">
                            {app['description']}
                        </div>

                        <h6 className="whoUse">who need this app ?</h6>
                        <div className="whoUse">
                            {app['who_need']}
                        </div>
                        <ShareButtons url={currentUrl} title={app['app_name']} description={app['description']} />
                    </div>

                    <div className="ContentRight">
                        <div className="pricePart">
                            <div className="pricingMOdel">Pricing model</div>
                            {app['price_model'].includes('free') ?
                                <div className="free">free plan ✔</div>
                                : <div className="free">free plan ✘</div>}
                            {app['price_model'].includes('supscription') ? <div className="subscription">Subscription  ✔</div>
                                : <div className="subscription">Subscription  ✘</div>}
                            {app['price_model'].includes('trial') ?
                                <div className="freeTrial">free trial  ✔</div> :
                                <div className="freeTrial">free trial  ✘</div>}
                            {app['price_model'].includes('once') ?
                                <div className="freeTrial">once time  ✔</div> :
                                null}

                        </div>
                        <div>
                            <div className="startingPrice">
                                <div className="startAt">
                                    Price starts from
                                </div>
                                <div className="price">
                                    <span>{app['start_price']} </span>${app['fees_per']}
                                </div>
                            </div>
                            <div>

                            </div>
                            <div className="review" onClick={showModal}>
                                Submit a Review
                            </div>
                            <div className="report" onClick={() => showRepModal()}>
                                report this app
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div className="reviewPart" >
                {app && <ReviewsPart id={app['id']} build={build} />}
            </div>
            <div className="suggestion">
                <h4>
                    Similar apps :
                </h4>
                {app && <Suggestion id={app['category_id']} />}

            </div>
            <div className="stick" id="myBtn" onClick={() => window.open(app['calendly_url'], '_blank')}>
                <div className="stickButton" style={{ display: display }}>
                    <span className="icony">
                        <FontAwesomeIcon icon={faLink} color="#000" />
                    </span>
                    Visit App Website
                </div>
            </div>

        </div>
    );
}



export default AppPage;





