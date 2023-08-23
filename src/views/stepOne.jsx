

import "../styles/stepOne.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import AppBar from "./appBar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PayWall } from "../components/pay";


function StepOne() {




    //paybal payemnet here 

    const { id } = useParams();
    const [select, setSelect] = useState();
    useEffect(() => {
        console.log('tool-id: ', id);
    });

    const updateSelect = (value) => {
        setSelect(value);
    }

    return (

        <div className="stepOneContainer">
            <AppBar />
            <h1 className="step-h">
                We offer two promotion plans
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
                                style={{ color: "#207b19", marginBottom: '3px', marginRight: "6px" }} />
                            list your tool in monthly newsletters
                        </div>
                        <div className="feature">
                            <FontAwesomeIcon icon={faCheckSquare}
                                size="xl"
                                style={{ color: "#207b19", marginBottom: '3px', marginRight: "6px" }} />
                            featured in Homepage
                        </div>
                        <div className="feature">
                            <FontAwesomeIcon icon={faCheckSquare}
                                size="xl"
                                style={{ color: "#207b19", marginBottom: '3px', marginRight: "6px" }} />
                            export reviews
                        </div>
                        <div className="feature">
                            <FontAwesomeIcon icon={faCheckSquare}
                                size="xl"
                                style={{ color: "#207b19", marginBottom: '3px', marginRight: "6px" }} />
                            dedicated support
                        </div>

                        <div className="feature">
                            <FontAwesomeIcon icon={faCheckSquare}
                                size="xl"
                                style={{ color: "#207b19", marginBottom: '3px', marginRight: "6px" }} />
                            1$ setup fees one time payment.
                        </div>

                        <div style={{ height: "20px" }} ></div>
                        {select !== 'silver' && <div className="selectPromote" onClick={() => updateSelect('silver')} >Select the silver</div>}
                        {select === 'silver' && <PayWall planId={'P-74D89268MU7706432MTFBNQY'} toolId={id} planName={'silver'} />}
                    </div>
                    <div className="plan-advance">
                        <h1 className="plan-name">GOLD</h1>
                        <div className="price-div"><span className="price-span">
                            14</span>$/mo</div>
                        <div style={{ height: "25px" }}></div>
                        <div className="feature">
                            <FontAwesomeIcon icon={faCheckSquare}
                                size="xl"
                                style={{ color: "#207b19", marginBottom: '3px', marginRight: "6px" }} />
                            list your tool in weekly newsletters
                        </div>
                        <div className="feature">
                            <FontAwesomeIcon icon={faCheckSquare}
                                size="xl"
                                style={{ color: "#207b19", marginBottom: '3px', marginRight: "6px" }} />
                            featured in Homepage
                        </div>
                        <div className="feature">
                            <FontAwesomeIcon icon={faCheckSquare}
                                size="xl"
                                style={{ color: "#207b19", marginBottom: '3px', marginRight: "6px" }} />
                            export reviews
                        </div>
                        <div className="feature">
                            <FontAwesomeIcon icon={faCheckSquare}
                                size="xl"
                                style={{ color: "#207b19", marginBottom: '3px', marginRight: "6px" }} />
                            instant support
                        </div>

                        <div className="feature">
                            <FontAwesomeIcon icon={faCheckSquare}
                                size="xl"
                                style={{ color: "#207b19", marginBottom: '3px', marginRight: "6px" }} />
                            1$ setup fees one time payment.
                        </div>
                        <div style={{ height: "20px" }} ></div>
                        {select !== 'gold' && <div className="selectPromote" onClick={() => updateSelect('gold')} >Select the Gold</div>}
                        {select === 'gold' && <PayWall planId={'P-6K3637950E204271CMTFBPSY'} toolId={id} planName={'gold'} />}
                    </div>
                    <div className="plan-advance">
                        <h1 className="plan-name">DIAMOND</h1>
                        <div className="price-div"><span className="price-span">
                            98</span>$/yearly</div>
                        <p style={{ textAlign: "center", color: "green", fontWeight: "600", fontSize: '1.4rem' }}>pay yearly and save 70$</p>
                        <div style={{ height: "25px" }}></div>
                        <div className="feature">
                            <FontAwesomeIcon icon={faCheckSquare}
                                size="xl"
                                style={{ color: "#207b19", marginBottom: '3px', marginRight: "6px" }} />
                            list your tool in weekly newsletters
                        </div>
                        <div className="feature">
                            <FontAwesomeIcon icon={faCheckSquare}
                                size="xl"
                                style={{ color: "#207b19", marginBottom: '3px', marginRight: "6px" }} />
                            featured in Homepage
                        </div>

                        <div className="feature">
                            <FontAwesomeIcon icon={faCheckSquare}
                                size="xl"
                                style={{ color: "#207b19", marginBottom: '3px', marginRight: "6px" }} />
                            export reviews
                        </div>
                        <div className="feature">
                            <FontAwesomeIcon icon={faCheckSquare}
                                size="xl"
                                style={{ color: "#207b19", marginBottom: '3px', marginRight: "6px" }} />
                            instant support
                        </div>
                        <div className="feature">
                            <FontAwesomeIcon icon={faCheckSquare}
                                size="xl"
                                style={{ color: "#207b19", marginBottom: '3px', marginRight: "6px" }} />
                            1$ setup fees one time payment.
                        </div>
                        <div style={{ height: "20px" }} ></div>
                        {select !== 'diamond' && <div className="selectPromote" onClick={() => updateSelect('diamond')} >Select the Diamond</div>}
                        {select === 'diamond' && <PayWall planId={'P-7CH61478AV912932AMTOSJQA'} toolId={id} planName={'diamond'} />}
                    </div>
                </div>

            </div>
        </div >
    );
}



export default StepOne;




