import { faCheckSquare, faExplosion, faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/newplans.css";
import { useNavigate } from "react-router-dom";
import AppBar from "./appBar";


export default function NewPlans() {

    const navigate = useNavigate();

    return <div className="main">
        <AppBar />
        <div className="price-strategy" id="pricing">

            <h2>freely you can: </h2>
            <div className="freely-div">
                <ul>
                    <li>add many tools as you want </li>
                    <li>get Limited support</li>
                    <li>collect reviews</li>
                </ul>

                <ul>
                    <li>engage with reviewers</li>
                    <li>get your tool analytics</li>
                </ul>
            </div>





            <h1>promotion :</h1>
            <p>
                you can promote your tool to get more advantages and more users
            </p>
            <h3>we offer two promotion plans </h3>
            <div className="price-plans">
                <div className="plan-pro">
                    <h1 className="plan-name">SILVER</h1>
                    <div className="price-div"><span className="price-span">
                        9</span>$/mo</div>
                    <div style={{ height: "25px" }}></div>
                    <div className="feature">
                        <FontAwesomeIcon icon={faCheckSquare}
                            size="xl"
                            style={{ color: "#207b19", marginBottom: '5px', marginRight: "6px" }} />
                        dedicated support
                    </div>
                    <div className="feature">
                        <FontAwesomeIcon icon={faCheckSquare}
                            size="xl"
                            style={{ color: "#207b19", marginBottom: '5px', marginRight: "6px" }} />
                        export reviews
                    </div>
                    <div className="feature">
                        <FontAwesomeIcon icon={faCheckSquare}
                            size="xl"
                            style={{ color: "#207b19", marginBottom: '5px', marginRight: "6px" }} />
                        featured in Homepage
                    </div>
                    <div className="feature">
                        <FontAwesomeIcon icon={faCheckSquare}
                            size="xl"
                            style={{ color: "#207b19", marginBottom: '5px', marginRight: "6px" }} />
                        list your tool in monthly newsletters
                    </div>
                    <div className="selectPromote" onClick={() => navigate('/dashboard')} >Promote my tool</div>
                </div>
                <div className="plan-advance">
                    <h1 className="plan-name">GOLD</h1>
                    <div className="price-div"><span className="price-span">
                        14</span>$/mo</div>
                    <div style={{ height: "25px" }}></div>
                    <div className="feature">
                        <FontAwesomeIcon icon={faCheckSquare}
                            size="xl"
                            style={{ color: "#207b19", marginBottom: '5px', marginRight: "6px" }} />
                        instant support
                    </div>
                    <div className="feature">
                        <FontAwesomeIcon icon={faCheckSquare}
                            size="xl"
                            style={{ color: "#207b19", marginBottom: '5px', marginRight: "6px" }} />
                        export reviews
                    </div>
                    <div className="feature">
                        <FontAwesomeIcon icon={faCheckSquare}
                            size="xl"
                            style={{ color: "#207b19", marginBottom: '5px', marginRight: "6px" }} />
                        featured in Homepage
                    </div>
                    <div className="feature">
                        <FontAwesomeIcon icon={faCheckSquare}
                            size="xl"
                            style={{ color: "#207b19", marginBottom: '5px', marginRight: "6px" }} />
                        list your tool in weekly newsletters
                    </div>
                    <div className="selectPromote" onClick={() => navigate('/dashboard')} >Promote my tool</div>
                </div>

            </div>
            <div className="detail-section">


                <div className="how-promot-tool">
                    <h3>

                        <FontAwesomeIcon icon={faExplosion} style={{ paddingRight: "10px", color: "green" }} />


                        how to promote my tool ?</h3>
                    <ul>
                        <li>go to the  dashboard and press the promot button on the tool card  </li>
                        <li>select the promote plan </li>
                        <li>finish your payment </li>
                        <li>excellent ,now your tool promoted succefuly</li>
                    </ul>
                </div>
                <h3>

                    <FontAwesomeIcon icon={faWarning} style={{ paddingRight: "10px", color: "red" }} />

                    Some Precautions :</h3>
                <li>you have to be the owner or responsible employee from the company own the tool.</li>
                <li>if the tool have non acceptable data or offensive data it wil be deleted. </li>
                <li>your tool must be compatible with solutrend  <a href="https://solutrend.com/terms.html" rel="noreferrer" target="_blank">terms policy.</a></li>
            </div>
        </div>


    </div>



}