import { useEffect } from "react"
import { Link } from "react-router-dom";

export default function Payment() {

    const url = window.location.href
    useEffect(() => {
        console.log('url : ', url);
    }, [url]);


    return <div className="payement-listen" style={{ textAlign: "center" }}>
        <h3>
            you create your promotion successfully
            <br />
            *********
            <br />
            your tool promotion will start immediatly
            <br />
            for any help
            <span style={{ color: "green" }}>  hi@solutrend.com </span>
        </h3>
        <Link to={'/dashboard'}> back to dashboard </Link>

    </div>
}