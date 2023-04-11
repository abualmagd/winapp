import { useNavigate } from 'react-router-dom';
import '../styles/main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


function Card() {

    const navigate = useNavigate();
    const id = 3;
    let url = "/app/" + id;
    return (
        <div className="card" onClick={() => navigate(url)}>
            <img src="https://picsum.photos/seed/picsum/200/300" alt="" className="cardImage" />
            <div className="myHeadCard">
                <h2>app name</h2>
                <div className="rating">4.2
                    <span className="space"></span>
                    <FontAwesomeIcon icon={faStar} size='xs' />
                </div>
            </div>
            <h5 className='cardH5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ad, consequuntur nemo aliquid reprehenderit
                beatae mollitia perferendis sit, quas odit assumenda et est dicta labore voluptatibus voluptate ipsa dolore atque!
            </h5>
            <h6>category</h6>
        </div>

    );
}

export default Card;