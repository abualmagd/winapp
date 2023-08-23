import { useNavigate } from 'react-router-dom';
import { convertStampToDate } from '../services/appServices';
import '../styles/dashCard.css';
import { appStatus, statusColor } from '../services/global';

function DashCard(props) {
    const navigate = useNavigate();
    const app = props.app;
    const press = props.click;

    const createdAt = convertStampToDate(app['created_at']);
    const stColor = statusColor(app['status']);
    return (
        <div className="dashCard" >
            <div className='status-div' style={{ color: `${stColor}` }}> {appStatus(app['status'])}</div>
            <div className="dashCardHead">
                <div className="appTitl">
                    {app['app_name']}
                </div>
                <div className="addingDate" >
                    {createdAt}
                </div>
            </div>
            <div className="buttons-card">
                {(app['plan_name'] === 'free' && app['status'] === 1) && <div className="card-btn-promot" onClick={() => navigate('/plan/' + props.id)} >🚀Promote my tool</div>}
                <div className="card-btn" onClick={() => press(props.id)} >Show my tool</div>
                {app['plan_name'] !== 'free' && <div> promoted <span style={{ backgroundColor: "yellow", fontWeight: "500", textTransform: "capitalize", borderRadius: "10px", padding: "4px 10px" }}>{app['plan_name']}</span>   </div>}
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