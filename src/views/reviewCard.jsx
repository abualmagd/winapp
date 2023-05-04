
import '../styles/reviewCard.css';
import { useState } from 'react';

import ReplayPart from '../components/replayPart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
function ReviewCard(props) {
    const [expand, updateExpand] = useState(false);

    const data = props.data;

    const showReplays = () => {
        updateExpand(!expand);
    }

    const hideReplays = () => {

    }

    const stars = (rating) => {

        const maxRating = 5; // set the maximum rating value
        const starIcons = [];

        for (let i = 0; i < maxRating; i++) {

            const starIcon = i < rating ? <FontAwesomeIcon icon={faStar} size='xs' className='icon-rev' /> :
                <FontAwesomeIcon icon={faStar} size='xs' className='icon-rev' color='gray' />
            starIcons.push(starIcon);
        }

        return starIcons;
    }

    return (
        <div className='reviewCont'>

            <div className="reviewCard" onClick={showReplays}>
                <div className="head-rev">
                    <div className="reviewer">
                        <img src={data['creator_avatar_url']} alt="error" className="reviewAvatar" />
                        <div className="userNameRev">ahmed badewy</div>
                    </div>
                    {data['rating'] && <div className="rating-star">
                        {stars(data['rating'])}
                    </div>}
                </div>

                <div className="content">
                    {data['content']}
                </div>
            </div>
            {expand && <ReplayPart close={hideReplays} expand={expand} id={data['id']} />}

        </div>

    );
}


export default ReviewCard;




