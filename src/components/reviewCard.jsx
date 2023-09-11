
import '../styles/reviewCard.css';
import { useState } from 'react';

import ReplayPart from './replayPart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { getLocalUser } from '../services/userServices';
import { WarnModal } from './warningModal';
import { deleteReview } from '../services/appServices';
function ReviewCard(props) {
    const [expand, updateExpand] = useState(false);
    const { id } = getLocalUser() ?? '111';
    const [warn, updateWarn] = useState(false);
    const data = props.data;

    const showReplays = () => {
        updateExpand(!expand);
    }

    const hideReplays = () => { }

    const stars = (rating) => {

        const maxRating = 5; // set the maximum rating value
        const starIcons = [];

        for (let i = 0; i < maxRating; i++) {

            const starIcon = i < rating ? <FontAwesomeIcon icon={faStar} size='xs' className='icon-rev' key={i} /> :
                <FontAwesomeIcon icon={faStar} size='xs' className='icon-rev' color='gray' key={i} />
            starIcons.push(starIcon);
        }

        return starIcons;
    }

    function handleDeleteClick(event) {
        event.stopPropagation();
        console.log('Delete clicked');
        updateWarn(true);
        //show warning
        // Add your delete logic here
    }

    /* function handleEditClick(event) {
         event.stopPropagation();
         console.log('Edit clicked');
         // Add your edit logic here
     }*/


    const removeRev = () => {
        //remove this review from review data to change state for user 
        //call function from review part 
        return props.removeOne(data['id']);
    }
    const delReview = async () => {
        const { error } = await deleteReview(data['id']);
        if (error) {

        }
        showWarn();
        removeRev();
    }

    const showWarn = () => {
        updateWarn(!warn);
    }
    return (
        <div className='reviewCont'>
            {warn && <WarnModal type={'review'} close={showWarn} remove={delReview} />}
            <div className="reviewCard" onClick={showReplays}>

                <div className="head-rev">
                    <div className="reviewer">
                        <img src={data['creator_avatar_url']} alt="error" className="reviewAvatar" />
                        <div className="userNameRev">{data['creator_name']}</div>
                    </div>
                    {data['rating'] && <div className="rating-star">
                        {stars(data['rating'])}
                    </div>}
                </div>

                <div className="content">
                    {data['content']}
                </div>

                {data['user_id'] === id && <div className="buttons-rev" onClick={(event) => event.stopPropagation()}>
                    <button onClick={handleDeleteClick}>Delete</button>
                    {/*<button onClick={handleEditClick}>Edit</button>*/}

                </div>}


            </div>

            {expand && <ReplayPart close={hideReplays} expand={expand} id={data['id']} />}

        </div>

    );
}


export default ReviewCard;




