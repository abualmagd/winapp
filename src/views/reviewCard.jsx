
import '../styles/reviewCard.css';
import { useState } from 'react';

import ReplayPart from '../components/replayPart';
function ReviewCard(props) {
    const [expand, updateExpand] = useState(false);

    const showReplays = () => {
        updateExpand(!expand);
    }

    const hideReplays = () => {

    }


    return (
        <div className='reviewCont'>

            <div className="reviewCard" onClick={showReplays}>
                <div className="reviewer">
                    <img src="https://picsum.photos/seed/picsum/200/300" alt="error" className="reviewAvatar" />
                    <div className="userNameRev">ahmed badewy</div>
                </div>
                <div className="content">
                    {props.review}"  "
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur non laudantium porro nostrum inventore molestiae eveniet molestias libero saepe, fuga voluptate voluptas neque, suscipit cupiditate aperiam vel pariatur delectus incidunt.
                </div>
            </div>
            {expand && <ReplayPart close={hideReplays} expand={expand} />}

        </div>

    );
}


export default ReviewCard;