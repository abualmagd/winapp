
import '../styles/reviewCard.css';

function ReviewCard() {
    return (
        <div className="reviewCard">
            <div className="reviewer">
                <img src="https://picsum.photos/seed/picsum/200/300" alt="error" className="reviewAvatar" />
                <div className="userNameRev">ahmed badewy</div>
            </div>
            <div className="content">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur non laudantium porro nostrum inventore molestiae eveniet molestias libero saepe, fuga voluptate voluptas neque, suscipit cupiditate aperiam vel pariatur delectus incidunt.
            </div>
        </div>
    );
}


export default ReviewCard;