import { useNavigate } from "react-router-dom";
import "../styles/newSection.css";

function NewCard(props) {

    const app = props.data;
    const navigate = useNavigate();
    const name = app['app_name'];
    let url = "/" + name;
    return (
        <div className="newCard" onClick={() => { navigate(url); window.scrollTo(0, 0); }}>

            <img src={app['shot_url']} alt="" className="newCardImage" />

            <div className="gradnt" >
                <h2>{app['app_name']}</h2>
            </div>
            <h5 className='newCardH5'>{app['description']}
            </h5>
        </div>
    );
}


export default NewCard;