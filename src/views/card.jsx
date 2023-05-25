import { useNavigate } from 'react-router-dom';
import '../styles/main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


function Card(props) {

    const app = props.data;
    const navigate = useNavigate();
    const name = app['app_name'];
    let url = "/" + name;
    return (
        <div className="card" onClick={() => navigate(url)}>
            <img src={app['shot_url']} alt='' className="cardImage" />
            <div className="myHeadCard">
                <h2>{name}</h2>
                {app['avg_rating'] !== 0 && <div className="rating">{app['avg_rating']}
                    <span className="space"></span>
                    <FontAwesomeIcon icon={faStar} size='xs' />
                </div>}
            </div>
            <h5 className='cardH5'>{app['description']}
            </h5>
            <div className="grey-line"></div>
            <h6>{app['category']}</h6>
        </div>

    );
}

export default Card;