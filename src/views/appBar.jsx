
import { Link } from 'react-router-dom';
import '../styles/appBar.css';


export default function AppBar() {
    return (
        <header className="headery">
            <div className="logo">
                <img src="favic.ico" alt=" " />
                Winapp</div>
            <div className="navigation">

                <a href="/#" className="link">blog</a>
                <a href="#pricing" className="link">pricing</a>
                <div className="submitButton">
                    <Link to="/plan" className="linkBtn">list your app</Link>
                </div>
                <img src="https://picsum.photos/seed/picsum/200/300" alt="error" className="avatar" />

            </div>
        </header>
    );

}