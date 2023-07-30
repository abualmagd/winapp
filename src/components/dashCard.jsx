import { useNavigate } from 'react-router-dom';
import { convertStampToDate } from '../services/appServices';
import '../styles/dashCard.css';

function DashCard(props) {
    const navigate = useNavigate();
    const app = props.app;
    const press = props.click;

    const createdAt = convertStampToDate(app['created_at']);

    return (
        <div className="dashCard" >
            <div className="dashCardHead">
                <div className="appTitl">
                    {app['app_name']}
                </div>
                <div className="addingDate" >
                    {createdAt}
                </div>
            </div>
            <div className="buttons-card">
                {app['plan_name'] === 'free' && <div className="card-btn-promot" onClick={() => navigate('/plan')} >🚀Promote my tool</div>}

                <div className="card-btn" onClick={() => press(props.id)} >Show my tool</div>
            </div>
            <div className="appRecords">
                <div className="views">
                    {app['views_count'] + " "} <span className="detail">views</span>
                </div>

                <div className="reviews">
                    {app['reviews_count'] + " "}  <span className="detail">reviews</span>
                </div>
                <div className="reports">
                    {app['reports_count'] + " "}  <span className="detail">reports</span>
                </div>

                <div className="shares">
                    {app['share_count'] + " "}  <span className="detail">shares</span>
                </div>
            </div>

        </div>
    );
}


export default DashCard;