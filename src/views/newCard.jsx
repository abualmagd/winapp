import "../styles/newSection.css";

function NewCard(props) {

    const app = props.data;
    return (
        <div className="newCard">

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