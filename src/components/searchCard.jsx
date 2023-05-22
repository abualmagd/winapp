import "../styles/searchCard.css";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function SearchCard(props) {
    const app = props.app;

    return (
        <div className="resultCard">
            <div className="head-card">
                <img src={app['logo_url']} alt="error" className="square" />
                <div className="head-card-content">
                    <h2 className="app-name">
                        {app['app_name']}
                    </h2>
                    {app['avg_rating'] && <div className="rating-search" style={{ margin: "0px ,10px" }}>{app['avg_rating']}
                        <span className="space"></span>
                        <FontAwesomeIcon icon={faStar} size='xs' />
                    </div>}
                    <div className="small-descrip">
                        {app['what_app']}
                    </div>
                </div>


            </div>


            <div className="divid">

            </div>

            <div className="secription-search">
                {app['description']}
            </div>
        </div>
    );
}


export default SearchCard;