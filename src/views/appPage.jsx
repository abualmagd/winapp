import AppBar from "./appBar";
import '../styles/appPage.css';
import '../styles/main.css';

import ReviewCard from "./reviewCard";
import NewCard from "./newCard";
import { useState } from "react";
import React from "react";
import { useEffect } from "react";
import ReviewModal from "../components/reviewModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faCalendar, faEnvelope, faLink } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { getAPPInfo } from "../services/appServices";



function AppPage() {

    const [display, updateDisplay] = useState("none");
    const [RevModal, updateRevModal] = useState(false);

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

    const getAppByName = async () => {
        const { data, error } = await getAPPInfo(name);
        if (error) {
            console.log(error.message);
        } else {
            console.log(data);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                showStickyBtn();
            } else {
                hideStickyBtn();
            }
        });
    }, []);


    let reviews = [1, 2, 3, 4, 5];

    let reviewCards = reviews.map((rev, index) => {

        return <ReviewCard review={rev} key={index} />
    });

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
        {
            "id": 16,
            "user_id": "262dde3e-db23-4b6a-9c2e-0e7445978bf1",
            "category_id": 2,
            "plan_name": "free",
            "app_name": "App 6",
            "app_url": "https://app6.com",
            "what_app": "What is App 6?",
            "description": "This is a description of App 6",
            "contact_email": "app6@example.com",
            "shot_url": "https://app6.com/screenshot",
            "calendly_url": null,
            "who_need": "Who needs App 6?",
            "why_use": "Why use App 6?",
            "alternatives": "Alternatives to App 6",
            "start_price": 0,
            "fees_per": null,
            "logo_url": "https://app6.com/logo",
            "price_model": [
                "free",
                "subscription"
            ],
            "created_at": "2023-04-30T14:07:31.331352+00:00"
        },
        {
            "id": 17,
            "user_id": "262dde3e-db23-4b6a-9c2e-0e7445978bf1",
            "category_id": 2,
            "plan_name": "free",
            "app_name": "App 7",
            "app_url": "https://app7.com",
            "what_app": "What is App 7?",
            "description": "This is a description of App 7",
            "contact_email": "app7@example.com",
            "shot_url": "https://app7.com/screenshot",
            "calendly_url": null,
            "who_need": "Who needs App 7?",
            "why_use": "Why use App 7?",
            "alternatives": "Alternatives to App 7",
            "start_price": 0,
            "fees_per": null,
            "logo_url": "https://app7.com/logo",
            "price_model": [
                "free",
                "subscription"
            ],
            "created_at": "2023-04-30T14:07:31.331352+00:00"
        },
        {
            "id": 18,
            "user_id": "262dde3e-db23-4b6a-9c2e-0e7445978bf1",
            "category_id": 2,
            "plan_name": "free",
            "app_name": "App 8",
            "app_url": "https://app8.com",
            "what_app": "What is App 8?",
            "description": "This is a description of App 8",
            "contact_email": "app8@example.com",
            "shot_url": "https://app8.com/screenshot",
            "calendly_url": null,
            "who_need": "Who needs App 8?",
            "why_use": "Why use App 8?",
            "alternatives": "Alternatives to App 8",
            "start_price": 0,
            "fees_per": null,
            "logo_url": "https://app8.com/logo",
            "price_model": [
                "free",
                "subscription"
            ],
            "created_at": "2023-04-30T14:07:31.331352+00:00"
        },
        {
            "id": 19,
            "user_id": "262dde3e-db23-4b6a-9c2e-0e7445978bf1",
            "category_id": 9,
            "plan_name": "free",
            "app_name": "App 9",
            "app_url": "https://app9.com",
            "what_app": "What is App 9?",
            "description": "This is a description of App 9",
            "contact_email": "app9@example.com",
            "shot_url": "https://app9.com/screenshot",
            "calendly_url": null,
            "who_need": "Who needs App 9?",
            "why_use": "Why use App 9?",
            "alternatives": "Alternatives to App 9",
            "start_price": 0,
            "fees_per": null,
            "logo_url": "https://app9.com/logo",
            "price_model": [
                "free",
                "subscription"
            ],
            "created_at": "2023-04-30T14:07:31.331352+00:00"
        },
        {
            "id": 20,
            "user_id": "262dde3e-db23-4b6a-9c2e-0e7445978bf1",
            "category_id": 10,
            "plan_name": "free",
            "app_name": "App 10",
            "app_url": "https://app10.com",
            "what_app": "What is App 10?",
            "description": "This is a description of App 10",
            "contact_email": "app10@example.com",
            "shot_url": "https://app10.com/screenshot",
            "calendly_url": null,
            "who_need": "Who needs App 10?",
            "why_use": "Why use App 10?",
            "alternatives": "Alternatives to App 10",
            "start_price": 0,
            "fees_per": null,
            "logo_url": "https://app10.com/logo",
            "price_model": [
                "free",
                "subscription"
            ],
            "created_at": "2023-04-30T14:07:31.331352+00:00"
        }
    ];

    var cards = lista.map((item, index) => {
        return <NewCard key={index} data={item} />

    });





    return (
        <div>
            <div className="appPageContainer" >
                {RevModal && <ReviewModal close={hideModal} />
                }                <AppBar />
                <img className="imageApp" src="../assets/images/app.png" alt="something error sory " />
                <div className="buttons">
                    <div className="visit">
                        <span className="icony">
                            <FontAwesomeIcon icon={faLink} color="#000" />
                        </span>
                        Visit App Website</div>
                    <div className="call">
                        <span className="icony">
                            <FontAwesomeIcon icon={faCalendar} color="#000" />
                        </span>
                        Book a Demo Call</div>
                    <div className="favorite">
                        <span className="icony">
                            <FontAwesomeIcon icon={faBookmark} color="#000" />
                        </span>
                        Bookmark this app</div>
                    <div className="message">
                        <span className="icony">
                            <FontAwesomeIcon icon={faEnvelope} color="#000" />
                        </span>
                        Send Message</div>
                </div>
                <div className="content">
                    <div className="appInfo">
                        <h4 className="appName">{name}</h4>
                        <h6 className="whats">whats figma ai ?</h6>
                        <div className="whatsThis">
                            Lorem ipsum dolor, sit amet consectetur a
                            dipisicing elit. Velit dicta fugiat iure qu\
                            idem illo, mollitia similique libero, qui aspernatur, cum magni vero tempora! Nam excep
                            turi maxime saepe. Doloremque, iusto molestiae.
                        </div>

                        <h6 className="why">why to use figma ai ?</h6>
                        <div className="why">
                            Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Commodi aperiam voluptatum
                            soluta, ad voluptas facere, facilis provident
                            totam sint quia voluptatibus iusto! Molestias
                            nostrum explicabo
                            quod accusantium non assumenda cupiditate!
                        </div>

                        <h6 className="whoUse">who need this app ?</h6>
                        <div className="whoUse">
                            Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Dolores illo magni odit
                            possimus corrupti ipsam similique porro
                            voluptatum excepturi dolore, voluptates
                            laboriosam modi doloribus consequuntur rerum!
                            Recusandae esse accusamus exercitationem.
                        </div>
                    </div>

                    <div className="ContentRight">
                        <div className="pricePart">
                            <div className="pricingMOdel">Pricing model</div>
                            <div className="free">free plan   ✘</div>
                            <div className="subscription">Subscription  ✔</div>
                            <div className="freeTrial">free trial  ✔</div>
                        </div>
                        <div>
                            <div className="startingPrice">
                                <div className="startAt">
                                    Price starts from
                                </div>
                                <div className="price">
                                    <span>30 </span>$/mo
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
                {reviewCards}
            </div>
            <div className="suggestion">
                <h4>
                    Similar apps
                </h4>
                <div className="suggestCards">
                    {cards}
                </div>

            </div>
            <div className="stick" id="myBtn">
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





/**
 * 
 * 
 * 
 * import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch('/api/data');
      const data = await response.json();
      setData(data);
    } catch (error) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (hasError) {
    return <div>Error loading data.</div>;
  }

  return (
    <div>
      <h1>Data loaded successfully</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default MyComponent;
 */