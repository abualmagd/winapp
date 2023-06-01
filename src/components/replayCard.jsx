
import { WarnModal } from '../components/warningModal';
import { deleteReplay } from '../services/appServices';
import { useState } from 'react';
import { getLocalUser } from '../services/userServices';

function ReplayCard(props) {

    const data = props.replay;
    const [warn, updateWarn] = useState(false);
    const { id } = getLocalUser();

    function handleDeleteClick(event) {
        event.stopPropagation();
        console.log('Delete clicked');
        updateWarn(true);
        //show warning
        // Add your delete logic here
    }

    /*function handleEditClick(event) {
        event.stopPropagation();
        console.log('Edit clicked');
        // Add your edit logic here
    }*/
    const removeRev = () => {
        //remove this review from review data to change state for user 
        //call function from review part 
        return props.removeOne(data['id']);
    }


    const delReplay = async () => {
        const { error } = await deleteReplay(data['id']);
        if (error) {

        }
        showWarn();
        removeRev();
    }

    const showWarn = () => {
        updateWarn(!warn);
    }
    return (
        <div>

            <div className="reviewCard" >
                {warn && <WarnModal type={'replay'} close={showWarn} remove={delReplay} />}
                <div className="reviewer">
                    <img src={data['creator_avatar_url']} alt="error" className="reviewAvatar" />
                    <div className="userNameRev">{data['creator_name']}</div>
                </div>
                <div className="content">
                    {data['content']}
                </div>

                {data['user_id'] === id && <div className="buttons-rev" onClick={(event) => event.stopPropagation()}>
                    <button onClick={handleDeleteClick}>Delete</button>
                    {/* <button onClick={handleEditClick}>Edit</button>*/}

                </div>}
            </div>
            <div className="dividers"></div>



        </div>
    );
}

export default ReplayCard;