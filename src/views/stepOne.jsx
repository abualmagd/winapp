

import "../styles/stepOne.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import AppBar from "./appBar";


function StepOne() {

    //paybal payemnet here 



    return (

        <div className="stepOneContainer">
            <AppBar />
            <h1 className="step-h">
                We offer two promotion palns
            </h1>
            <div className="planzz" id="pricing">
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
                        <div className="selectPromote" onClick={() => console.log('checkout')} >Select the silver</div>
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
                        <div className="selectPromote" onClick={() => console.log('checkout')} >Select the Gold</div>
                    </div>

                </div>

            </div>
        </div>
    );
}



export default StepOne;