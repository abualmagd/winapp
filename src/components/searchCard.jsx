import "../styles/searchCard.css";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function SearchCard() {

    return (
        <div className="resultCard">
            <div className="head-card">
                <img src="https://picsum.photos/seed/picsum/200/300" alt="error" className="square" />
                <div className="head-card-content">
                    <h2 className="app-name">
                        app name
                    </h2>
                    <div className="rating-search" style={{ margin: "0px ,10px" }}>4.2
                        <span className="space"></span>
                        <FontAwesomeIcon icon={faStar} size='xs' />
                    </div>
                    <div className="small-descrip">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                    </div>
                </div>


            </div>


            <div className="divid">

            </div>

            <div className="secription-search">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, unde nemo! Odit rerum quod perspiciatis laudantium aliquid, dolores ea cumque distinctio iste doloremque cupiditate consectetur eum aut perferendis est. Doloremque.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel similique ducimus, sed laboriosam autem ad, dolor voluptatum excepturi maxime nam necessitatibus libero voluptate a illum dolore corrupti! Quos, adipisci sequi.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis odio placeat similique, doloribus recusandae, exercitationem voluptates dicta expedita culpa nisi, omnis eum quo corrupti. Error accusamus architecto quisquam perferendis expedita!
            </div>
        </div>
    );
}


export default SearchCard;