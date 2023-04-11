import "../styles/newSection.css";

function NewCard() {


    return (
        <div className="newCard">

            <img src="https://picsum.photos/seed/picsum/200/300" alt="" className="newCardImage" />

            <div className="gradnt" >
                <h2>app name</h2>
            </div>
            <h5 className='newCardH5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ad, consequuntur nemo aliquid reprehenderit
                beatae mollitia perferendis sit, quas odit assumenda et est dicta labore voluptatibus voluptate ipsa dolore atque!
            </h5>
        </div>
    );
}


export default NewCard;