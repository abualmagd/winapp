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



function AppPage() {

    const [display, updateDisplay] = useState("none");
    const [RevModal, updateRevModal] = useState(false);

    function showModal() {
        updateRevModal(true);
    }


    function hideModal() {
        updateRevModal(false);
    }





    function showStickyBtn() {
        updateDisplay(current => current = "flex");
    }


    function hideStickyBtn() {
        updateDisplay(current => current = "none");
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

    const lista = [1, 2, 3, 4, 5];

    var cards = lista.map((item, index) => {
        return <NewCard key={index} props={item} />

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
                        <h4 className="appName">Figma Ai</h4>
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