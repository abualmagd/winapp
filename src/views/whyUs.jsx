import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/whyUs.css";
import { faHourglassHalf, faMoneyBillWave, faSun, faTools, faTrophy, faUsers } from "@fortawesome/free-solid-svg-icons";


export default function WhyUs() {

    return (

        <div className="why-container">
            <h3 className="why-title">
                Why SoluTrend ?
            </h3>


            <div className="why-us">


                <div className="feature-card">
                    <div className="icon-container">
                        <FontAwesomeIcon icon={faSun} size="lg" style={{ color: 'black' }} />
                    </div>
                    <div className="info-body">
                        <div className="acc-hd">
                            Find Your Solution
                        </div>
                        <p className="more-details">
                            Solutrend here to connect you with the best apps and find the solutions you need to
                            keep your business running smoothly.
                        </p>
                    </div>
                </div>


                <div className="feature-card">
                    <div className="icon-container">
                        <FontAwesomeIcon icon={faTools} size="lg" style={{ color: 'black' }} />
                    </div>
                    <div className="info-body">
                        <div className="acc-hd">
                            Explore Softwares
                        </div>
                        <p className="more-details">
                            Explore best-in-class software to help you reach your goals.
                        </p>
                    </div>
                </div>




                <div className="feature-card">
                    <div className="icon-container">
                        <FontAwesomeIcon icon={faTrophy} size="lg" style={{ color: 'black' }} />
                    </div>
                    <div className="info-body">
                        <div className="acc-hd">
                            Achieve more
                        </div>
                        <p className="more-details">
                            Solutrend  make a positive impact in the marketplace and help developers achieve more and businesses achieve more.
                        </p>
                    </div>
                </div>



                <div className="feature-card">
                    <div className="icon-container">
                        <FontAwesomeIcon icon={faUsers} size="lg" style={{ color: 'black' }} />
                    </div>
                    <div className="info-body">
                        <div className="acc-hd">
                            More Users
                        </div>
                        <p className="more-details">
                            Solutrend provide a simple, super-fast solution that ensures your product gets into the hands of more people.
                        </p>
                    </div>
                </div>

                <div className="feature-card">
                    <div className="icon-container">
                        <FontAwesomeIcon icon={faMoneyBillWave} size="lg" style={{ color: 'black' }} />
                    </div>
                    <div className="info-body">
                        <div className="acc-hd">
                            Free
                        </div>
                        <p className="more-details">
                            List your tools freely and Let Solutrend be the catalyst for your success.
                        </p>
                    </div>
                </div>


                <div className="feature-card">
                    <div className="icon-container">
                        <FontAwesomeIcon icon={faHourglassHalf} size="lg" style={{ color: 'black' }} />
                    </div>
                    <div className="info-body">
                        <div className="acc-hd">
                            Save Your Time
                        </div>
                        <p className="more-details">
                            explore and compare high-performing software that can power your business and save you time!
                        </p>
                    </div>
                </div>
            </div>


        </div >

    );




}