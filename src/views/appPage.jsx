import AppBar from "../components/appBar";
import '../styles/appPage.css';
import '../styles/main.css';
import { useCallback, useState } from "react";
import React from "react";
import { useEffect } from "react";
import ReviewModal from "../components/reviewModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faCalendar, faEnvelope, faLink, faSpinner, faStar } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import { bookmark, getAPPInfo, increaseViewCount, unBookmark } from "../services/appServices";
import ReviewsPart from "../components/reviewPart";
import Suggestion from "../components/suggestionPart";
import { ToastContainer } from "../components/toastContainer";
import ReportModal from "../components/reportModal";
import { PageMetaTags } from "../components/myMetTage";
import { ShareButtonsForApp } from "../components/shareButtons";
import { maxString, myUrl, truncateString } from "../services/global";
import { getLocalUser } from "../services/userServices";
import { toolJsonld } from "../services/jsonld";




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
    const nav = useNavigate();

    const currentUrl = myUrl + 'store/' + name;




    const saveApp = async () => {
        const user = getLocalUser();
        if (!user) {
            console.log('log in plaese')
            nav('/login');
        } else {


            const { error } = await bookmark(app["id"]);
            if (error) {
                // notify  the user
                notify(error.message, true);
            } else {
                //notify user every thing ok 
                updateBookmarked(true);
                notify("this app saved to your bookmarks", false)
            }

        }

    }

    const unSaveApp = async () => {
        const { error } = await unBookmark(app["id"]);
        if (error) {
            // notify  the user
            console.log(error.message)
            notify(error.message, true);
        } else {
            //notify user every thing ok 
            updateBookmarked(false);
            notify("this app removed from your bookmarks", false)
        }


    }






    function showModal() {
        const user = getLocalUser();
        if (!user) {
            console.log('log in plaese')
            nav('/login');
        } else {
            updateRevModal(true);
        }
    }


    function hideModal() {
        updateRevModal(false);
    }
    function showRepModal() {
        const user = getLocalUser();
        if (!user) {
            console.log('log in plaese')
            nav('/login');
        } else {
            updateRepModal(true);
        }
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
            updateBookmarked(data[0]['is_favorite']);
            updateApp(data[0]);
            try {
                await increaseViewCount(data[0]['id']);
            } catch (error) {
                console.log('error increase views', error)
            }


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
        window.scrollTo(0, 0);
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
                <PageMetaTags title={app['app_name'] + ' - ' + app['what_app']} description={app['description']} imageUrl={app['shot_url']} url={currentUrl} type={'website'} jsonld={toolJsonld(app)} />
                <ToastContainer display={displ} message={message} error={errory} />
                {RevModal && <ReviewModal close={hideModal} appId={app['id']} rebuild={() => updateBuild(!build)} />
                }
                {RepModal && <ReportModal close={hideRepModal} appId={app['id']} />
                }
                <AppBar />
                <img className="imageApp" src={app['shot_url']} alt={app['description']} style={{ backgroundColor: "grey" }} />
                <div className="buttons">
                    <div className="visit" onClick={() => window.open(app['app_url'], '_blank')}>
                        <span className="icony">
                            <FontAwesomeIcon icon={faLink} color="#000" />
                        </span>
                        Visit {truncateString(name)} Website</div>
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
                            UnSaved {maxString(name)}
                        </div>

                        : <div className="favorite" onClick={() => {
                            // ADD this app to saved 
                            saveApp();
                        }} >
                            <span className="icony">
                                <FontAwesomeIcon icon={faBookmark} color="#000" />
                            </span>
                            Save {maxString(name)}
                        </div>}
                    {app['contact_email'] && <div className="message" onClick={() => window.open(`mailto:${app['contact_email']}?subject=subjec%20Email&body=This%20is%20a%20body%20email`)}>
                        <span className="icony">
                            <FontAwesomeIcon icon={faEnvelope} color="#000" />
                        </span>
                        Send Message
                    </div>}
                </div>
                <div className="content">
                    <div className="appInfo">

                        <h2 className="appName"><a href={app['app_url']}>
                            {name}
                            </a> 
                        </h2>
                        <div className="small-des">
                            {app['what_app']}
                        </div>

                        <h6 className="whats">Whats {name} ?</h6>
                        <h1 className="whatsThis">
                            {app['description']}
                        </h1>

                        <h6 className="why">Why to use {name} ?</h6>
                        <div className="why">
                            {app['why_use']}
                        </div>

                        <h6 className="whoUse">Who need {name} ?</h6>
                        <div className="whoUse">
                            {app['who_need']}
                        </div>
                        <h6 className="whoUse">Supported platforms :</h6>
                        <div className="dev-ces">
                            {app['devices'].map((device, index) => {
                                return <div className="platform-one" key={index}>{device}</div>
                            })}
                        </div>
                        <h6 className="whoUse">Alternative to :</h6>
                        <div className="whoUse">
                            {app['alternatives']}
                        </div>
                        <ShareButtonsForApp url={currentUrl} title={app['description']} description={app['description']}
                            image={app['logo_url']} appId={app['id']} />
                    </div>

                    <div className="ContentRight">

                        <img src={app['logo_url']} className="logo-img-title" alt={app['what_app']} />
                        <div className="pricePart">
                            <div className="pricingMOdel"> Pricing model</div>
                            {app['price_model'].includes('free') ?
                                <div className="free">free plan ✔</div>
                                : <div className="free">free plan ✘</div>}
                            {app['price_model'].includes('subscription') ? <div className="subscription">Subscription  ✔</div>
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
                            {app['avg_rating'] !== 0 && <h2><div className="rating" style={{ justifyContent: "center" }}>{app['avg_rating'].toFixed(1)}

                                <FontAwesomeIcon icon={faStar} size='xs' color="#FFDF00" />
                                <span style={{ fontSize: "15px" }}>({app['rating_count']})</span>
                            </div></h2>}
                            <div className="review" onClick={showModal}>
                                Submit a Review
                            </div>
                            <div className="report" onClick={() => showRepModal()}>
                                report this tool
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div className="reviewPart" >
                {app && <ReviewsPart id={app['id']} build={build} />}
            </div>
            <div className="suggestion">

                {app && <Suggestion id={app['category_id']} appId={app['id']} />}

            </div>
            <div className="stick" id="myBtn" onClick={() => window.open(app['app_url'], '_blank')}>
                <div className="stickButton" style={{ display: display }}>
                    <span className="icony">
                        <FontAwesomeIcon icon={faLink} color="#000" />
                    </span>
                    Visit {maxString(name)} Website
                </div>
            </div>

        </div>
    );
}



export default AppPage;





