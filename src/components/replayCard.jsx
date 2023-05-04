



function ReplayCard(props) {

    const data = props.replay;
    return (
        <div>

            <div className="reviewCard" >
                <div className="reviewer">
                    <img src={data['creator_avatar_url']} alt="error" className="reviewAvatar" />
                    <div className="userNameRev">{data['creator_name']}</div>
                </div>
                <div className="content">
                    {data['content']}
                </div>

            </div>
            <div className="dividers"></div>



        </div>
    );
}

export default ReplayCard;