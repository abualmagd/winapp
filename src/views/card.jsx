import '../styles/main.css';


 function Card(){

    return (
        <div className="card">
            <img src="https://picsum.photos/seed/picsum/200/300" alt="error" className="cardImage" />
            <h2>app name</h2>
            <h5 className='cardH5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ad, consequuntur nemo aliquid reprehenderit 
                beatae mollitia perferendis sit, quas odit assumenda et est dicta labore voluptatibus voluptate ipsa dolore atque!
              </h5>
             <h6>category</h6>    
        </div>
       
    );
}

export default Card;