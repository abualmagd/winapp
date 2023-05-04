import AppBar from "./appBar";
import '../styles/appPage.css';
import '../styles/main.css';

import NewCard from "./newCard";
import { useCallback, useState } from "react";
import React from "react";
import { useEffect } from "react";
import ReviewModal from "../components/reviewModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faCalendar, faEnvelope, faLink, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { getAPPInfo } from "../services/appServices";
import ReviewsPart from "../components/reviewPart";



function AppPage() {

    const [display, updateDisplay] = useState("none");
    const [RevModal, updateRevModal] = useState(false);
    const [state, updateState] = useState('loading');
    const [app, updateApp] = useState(null);



    const { name } = useParams();

    function showModal() {
        updateRevModal(true);
    }


    function hideModal() {
        updateRevModal(false);
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
            updateApp(data[0]);

        }
    }, [name]);



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


    const lista = [
        {
            "id": 11,
            "user_id": "262dde3e-db23-4b6a-9c2e-0e7445978bf1",
            "category_id": 2,
            "plan_name": "free",
            "app_name": "App 1",
            "app_url": "https://app1.com",
            "what_app": "What is App 1?",
            "description": "This is a description of App 1",
            "contact_email": "app1@example.com",
            "shot_url": "https://app1.com/screenshot",
            "calendly_url": null,
            "who_need": "Who needs App 1?",
            "why_use": "Why use App 1?",
            "alternatives": "Alternatives to App 1",
            "start_price": 0,
            "fees_per": null,
            "logo_url": "https://app1.com/logo",
            "price_model": [
                "free",
                "subscription"
            ],
            "created_at": "2023-04-30T14:07:31.331352+00:00"
        },
        {
            "id": 12,
            "user_id": "262dde3e-db23-4b6a-9c2e-0e7445978bf1",
            "category_id": 2,
            "plan_name": "free",
            "app_name": "App2",
            "app_url": "https://app2.com",
            "what_app": "What is App 2?",
            "description": "This is a description of App 2",
            "contact_email": "app2@example.com",
            "shot_url": "https://app2.com/screenshot",
            "calendly_url": null,
            "who_need": "Who needs App 2?",
            "why_use": "Why use App 2?",
            "alternatives": "Alternatives to App 2",
            "start_price": 0,
            "fees_per": null,
            "logo_url": "https://app2.com/logo",
            "price_model": [
                "free",
                "subscription"
            ],
            "created_at": "2023-04-30T14:07:31.331352+00:00"
        },
        {
            "id": 13,
            "user_id": "262dde3e-db23-4b6a-9c2e-0e7445978bf1",
            "category_id": 2,
            "plan_name": "free",
            "app_name": "App 3",
            "app_url": "https://app3.com",
            "what_app": "What is App 3?",
            "description": "This is a description of App 3",
            "contact_email": "app3@example.com",
            "shot_url": "https://app3.com/screenshot",
            "calendly_url": null,
            "who_need": "Who needs App 3?",
            "why_use": "Why use App 3?",
            "alternatives": "Alternatives to App 3",
            "start_price": 0,
            "fees_per": null,
            "logo_url": "https://app3.com/logo",
            "price_model": [
                "free",
                "subscription"
            ],
            "created_at": "2023-04-30T14:07:31.331352+00:00"
        },
        {
            "id": 14,
            "user_id": "262dde3e-db23-4b6a-9c2e-0e7445978bf1",
            "category_id": 2,
            "plan_name": "free",
            "app_name": "App 4",
            "app_url": "https://app4.com",
            "what_app": "What is App 4?",
            "description": "This is a description of App 4",
            "contact_email": "app4@example.com",
            "shot_url": "https://app4.com/screenshot",
            "calendly_url": null,
            "who_need": "Who needs App 4?",
            "why_use": "Why use App 4?",
            "alternatives": "Alternatives to App 4",
            "start_price": 0,
            "fees_per": null,
            "logo_url": "https://app4.com/logo",
            "price_model": [
                "free",
                "subscription"
            ],
            "created_at": "2023-04-30T14:07:31.331352+00:00"
        },
        {
            "id": 15,
            "user_id": "262dde3e-db23-4b6a-9c2e-0e7445978bf1",
            "category_id": 2,
            "plan_name": "free",
            "app_name": "App 5",
            "app_url": "https://app5.com",
            "what_app": "What is App 5?",
            "description": "This is a description of App 5",
            "contact_email": "app5@example.com",
            "shot_url": "https://app5.com/screenshot",
            "calendly_url": null,
            "who_need": "Who needs App 5?",
            "why_use": "Why use App 5?",
            "alternatives": "Alternatives to App 5",
            "start_price": 0,
            "fees_per": null,
            "logo_url": "https://app5.com/logo",
            "price_model": [
                "free",
                "subscription"
            ],
            "created_at": "2023-04-30T14:07:31.331352+00:00"
        },

    ];

    var cards = lista.map((item, index) => {
        return <NewCard key={index} data={item} />

    });



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
                {RevModal && <ReviewModal close={hideModal} />
                }                <AppBar />
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

                    {app['is_favorite'] ?
                        <div className="favorite" >
                            <span className="icony">
                                <FontAwesomeIcon icon={faBookmark} color="#000" />
                            </span>
                            UnBookmark this app
                        </div>

                        : <div className="favorite" >
                            <span className="icony">
                                <FontAwesomeIcon icon={faBookmark} color="#000" />
                            </span>
                            Bookmark this app
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
                            <div className="report">
                                report this app
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div className="reviewPart" >
                {app && <ReviewsPart id={app['id']} />}
            </div>
            <div className="suggestion">
                <h4>
                    Similar apps
                </h4>
                <div className="suggestCards">
                    {cards}
                </div>

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





