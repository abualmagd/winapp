import { useRef, useState } from "react";
import { subscribe } from "../services/userServices";
import { useNavigate } from "react-router-dom";
import "../styles/subscribe.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faHeart, faSpinner } from "@fortawesome/free-solid-svg-icons";

export function Subscribe() {
    const navigat = useNavigate();
    const emailRef = useRef();
    const [state, setState] = useState('start');



    const subscribeUser = async () => {


        if (emailRef.current.value) {
            setState('sending');
            try {

                await subscribe(emailRef.current.value);
                setState('subscribed');
            } catch (error) {
                console.log(error)
                setState('error');
            }
        }

    }


    if (state === 'subscribed') {

        return (
            <div className="subscribe-div">
                <div className="logo-subscribe" onClick={() => navigat('/')}>
                    <img src="https://solutrend.com/assets/images/logo512.png" alt="W" />
                    SoluTrend</div>
                <img src="/assets/images/thanks.jpg" alt="email subscribe" className="imgEmail-subscribe" />
                <h3 style={{ marginTop: "25px", marginBottom: '40px', fontSize: "1.3rem" }}>
                    Thank You For Your subscription
                    <FontAwesomeIcon icon={faHeart} style={{ marginLeft: "15px", color: 'red' }} />
                </h3>

                <div className="btn-learn-more" onClick={() => navigat('/')}>learn more <FontAwesomeIcon icon={faArrowRight} style={{
                    marginLeft: "15px", marginTop: "5px"
                }} /> </div>
            </div>
        );

    }
    if (state === 'sending') {
        return (
            <div className="subscribe-div">
                <div className="logo-subscribe" onClick={() => navigat('/')}>
                    <img src="https://solutrend.com/assets/images/logo512.png" alt="W" />
                    SoluTrend</div>
                <img src="/assets/images/emails.png" alt="/" className="imgEmail-subscribe" />
                <h3 style={{ marginTop: "0px", marginBottom: '40px', fontSize: "1.3rem" }}>
                    Subscribe to our newsletter and get
                    <br />
                    latest in software tools and solutions
                </h3>
                <div className="inputSubmit">
                    <FontAwesomeIcon icon={faSpinner} spin size="lg" />
                </div>
                <div className="btn-learn-more" onClick={() => navigat('/')}>learn more <FontAwesomeIcon icon={faArrowRight} style={{
                    marginLeft: "15px", marginTop: "5px"
                }} /> </div>
            </div>
        );
    }
    if (state === 'error') {
        return <div className="subscribe-div">
            <div className="logo-subscribe" onClick={() => navigat('/')}>
                <img src="https://solutrend.com/assets/images/logo512.png" alt="W" />
                SoluTrend</div>
            <img src="assets/images/emails.png" alt="/" className="imgEmail-subscribe" />
            <h3 style={{ marginTop: "0px", marginBottom: '40px', fontSize: "1.3rem" }}>
                Sorry error happened in subscription
            </h3>
            <div className="inputSubmit">
                <FontAwesomeIcon icon={faSpinner} spin size="lg" />
            </div>
            <div className="btn-learn-more" onClick={() => navigat('/')}>learn more <FontAwesomeIcon icon={faArrowRight} style={{
                marginLeft: "15px", marginTop: "5px"
            }} /> </div>
        </div>
    }
    return <div className="subscribe-div">
        <div className="logo-subscribe" onClick={() => navigat('/')}>
            <img src="https://solutrend.com/assets/images/logo512.png" alt="W" />
            SoluTrend</div>
        <img src="assets/images/emails.png" alt="/" className="imgEmail-subscribe" />
        <h3 style={{ marginTop: "0px", marginBottom: '40px', fontSize: "1.3rem" }}>Subscribe to our newsletter and get
            <br />
            latest in software tools and solutions

        </h3>
        <div className="inputSubmit">
            <input type="email" placeholder=" your email" ref={emailRef} required />
            <div className="submit" onClick={subscribeUser}>
                Submit
            </div>
        </div>
        <div className="btn-learn-more" onClick={() => navigat('/')}>learn more <FontAwesomeIcon icon={faArrowRight} style={{
            marginLeft: "15px", marginTop: "5px"
        }} /> </div>
    </div>



}




export function SimpleSubscribe() {

    const emailRef = useRef();
    const [state, setState] = useState('start');



    const subscribeUser = async () => {


        if (emailRef.current.value) {
            setState('sending');
            try {

                await subscribe(emailRef.current.value);
                setState('subscribed');
            } catch (error) {
                console.log(error)
                setState('error');
            }
        }

    }


    if (state === 'subscribed') {

        return (
            <div className="subscribe-div">
                <h3 style={{ marginTop: "25px", marginBottom: '40px', fontSize: "1.3rem" }}>
                    Thank You For Your subscription
                    <FontAwesomeIcon icon={faHeart} style={{ marginLeft: "15px", color: 'red' }} />
                </h3>

            </div>
        );

    }
    if (state === 'sending') {
        return (
            <div className="subscribe-div">

                <h3 style={{ marginTop: "0px", marginBottom: '40px', fontSize: "1.3rem" }}>
                    Subscribe to our newsletter and get
                    <br />
                    latest in software tools and solutions
                </h3>
                <div className="inputSubmit">
                    <FontAwesomeIcon icon={faSpinner} spin size="lg" />
                </div>
            </div>
        );
    }
    if (state === 'error') {
        return <div className="subscribe-div">

            <h3 style={{ marginTop: "0px", marginBottom: '40px', fontSize: "1.3rem" }}>
                Sorry error happened in subscription
            </h3>
            <div className="inputSubmit">
                <FontAwesomeIcon icon={faSpinner} spin size="lg" />
            </div>
        </div>
    }
    return <div className="subscribe-div">
        <h3 style={{ marginTop: "0px", marginBottom: '40px', fontSize: "1.3rem" }}>Subscribe to our newsletter and get
            <br />
            latest in software tools and solutions

        </h3>
        <div className="inputSubmit">
            <input type="email" placeholder=" your email" ref={emailRef} required />
            <div className="submit" onClick={subscribeUser}>
                Submit
            </div>
        </div>
    </div>



}