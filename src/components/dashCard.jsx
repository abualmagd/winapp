import '../styles/dashCard.css';

function DashCard() {
    return (
        <div className="dashCard">
            <div className="dashCardHead">
                <div className="appTitl">
                    doitylla
                </div>
                <div className="addingDate">
                    12/10
                </div>
            </div>
            <div className="appRecords">
                <div className="views">
                    100 v
                </div>

                <div className="reviews">
                    10 r
                </div>
                <div className="reports">
                    0 re
                </div>

                <div className="shares">
                    3 shares
                </div>
            </div>

        </div>
    );
}


export default DashCard;