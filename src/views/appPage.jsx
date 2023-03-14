import AppBar from "./appBar";
import '../styles/appPage.css';
import ReviewCard from "./reviewCard";
import NewCard from "./newCard";


function AppPage() {

    let reviews = [1, 2, 3, 4, 5];

    let reviewCards = reviews.map((rev, index) => {

        return <ReviewCard review={rev} key={index} />
    });

    const lista = [1, 2, 3, 4, 5];

    var cards = lista.map((item, index) => {
        return <NewCard key={index} props={item} />

    });
    let mybutton = document.getElementsByClassName("stickButton");
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    return (
        <div>
            <div className="appPageContainer">
                <AppBar />
                <img className="imageApp" src="./assets/images/app.png" alt="something error sory " />
                <div className="buttons">
                    <div className="visit">Visit App Website</div>
                    <div className="call">Book a Demo Call</div>
                    <div className="favorite">favorite this app</div>
                    <div className="message">Send Message</div>
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
                            <div className="review">
                                Submit a Review
                            </div>
                            <div className="report">
                                report this app
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div className="reviewPart">
                {reviewCards}
            </div>
            <div className="suggestion">
                <h4>
                    Similar apps
                </h4>
                <div className="suggestCard">
                    {cards}
                </div>

            </div>
            <div className="stick" id="myBtn">
                <div className="stickButton">
                    Visit App Website
                </div>
            </div>

        </div>
    );
}



export default AppPage;