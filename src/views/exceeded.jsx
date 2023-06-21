import { Link } from 'react-router-dom';
import '../styles/dashboard.css';

export default function Exceeded() {
    return (
        <div className="dashboard" >
            <div className="centerCircular">
                <p className="error">
                    you exceeded your plan limit please change your plan ,
                    <Link to={'/changeplan'}>change my plan</Link>
                </p>
            </div>

        </div>
    );
}