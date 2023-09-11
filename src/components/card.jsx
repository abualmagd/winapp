import { useNavigate } from 'react-router-dom';
import '../styles/main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt, faStar } from '@fortawesome/free-solid-svg-icons';


function Card(props) {

    const app = props.data;
    const navigate = useNavigate();
    const name = app['app_name'];
    let url = "/store/" + name;
    const shareApp = () => {

        try {

            const title = app['app_name'];
            const description = app['description'];
            navigator.share({ title, description, url });

            console.log('shared succfuly');
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="card">
            <div className="iconCover" onClick={shareApp} >
                <FontAwesomeIcon icon={faShareAlt} size='xl' />
            </div>

            <img src={app['shot_url']} alt='' className="cardImage" />
            <div className="myHeadCard">
                <h2 onClick={() => navigate(url)} >{name}</h2>
                {app['avg_rating'] !== 0 && <div className="rating">{app['avg_rating'].toFixed(1)}
                    <span className="space"></span>
                    <FontAwesomeIcon icon={faStar} size='xs' />
                </div>}
            </div>
            <h5 className='cardH5' onClick={() => navigate(url)}>{app['description']}
            </h5>
            <div className="grey-line"></div>
            <h6>{app['category']}</h6>
        </div>

    );
}

export default Card;