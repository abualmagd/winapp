import { useEffect } from "react"


export default function Payment() {

    const url = window.location.href
    useEffect(() => {
        console.log('url : ', url);
    }, [url]);


    return <div className="payement-listen">
        <h1>
            your payemnet ............
            thank you
            for any help
            hi@solutrend.com
        </h1>
    </div>
}