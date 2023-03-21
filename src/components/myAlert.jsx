import "../styles/myAlert.css"



function MyAlert(props) {

    return <div className="alertContainer" >
        <div className="myAlert" >
            <div className="alertCloser" onClick={() => props.close()}>X</div>
            <img src="assets/images/emails.png" alt="/" className="imgEmail" />
            <h2>Subscribe</h2>
            <h3>Subscribe to our newsletter and stay updated</h3>
            <div className="inputSubmit">
                <input type="email" placeholder=" your email" />
                <div className="submit">
                    Subscribe
                </div>

            </div>
        </div>
    </div>
}


export default MyAlert;