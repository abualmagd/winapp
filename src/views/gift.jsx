import { useRef, useState } from "react";
import AppBar from "../components/appBar";
import { subscribe } from "../services/userServices";
import { sendEmail } from "../services/emailServices";


export function Gift() {
    const emailRef = useRef();
    const [state, setState] = useState('send to me');


    const subscribeUser = async () => {


        if (emailRef.current.value) {
            setState('sending...');
            try {
                sendEmail(emailRef.current.value);
                await subscribe(emailRef.current.value);

                setState('sent  😍 ');
            } catch (error) {
                console.log(error)
                setState('error  🥲 ');
            }
        }

    }

    return (
        <div className="main">
            <AppBar />

            <section style={{ display: "flex", justifyContent: "center", margin: "auto", flexDirection: "column", maxWidth: '850px' }}>
                <h1 style={{ textAlign: "center" }}>
                    🌟   Get 200 New Saas ideas  🌟
                </h1>
                <p style={{ fontSize: "1.4rem", fontWeight: "400" }}>
                    get your copy today and unlock endless possibilities in the SaaS landscape.
                </p>
                <div style={{ height: "5px" }}></div>
                <div className="inputSubmit">
                    <input type="email" placeholder=" your email" ref={emailRef} required className="category-sel" style={{ width: "95%" }} />
                    <div className="submit" style={{ width: "100px" }} onClick={subscribeUser}>
                        {state}
                    </div>
                </div>
            </section>
        </div>
    );
}


/*            Discover the ultimate resource for SaaS entrepreneurs in 2023: "Get 200 New SaaS Ideas." This invaluable guide is packed with cutting-edge concepts across various industries, providing you with the inspiration and competitive edge to revolutionize the software-as-a-service realm.

                    <br />
                    <br />*/