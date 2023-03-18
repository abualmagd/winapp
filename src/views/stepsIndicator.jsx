import "../styles/stepsIndicator.css";

function StepsIndicator(props) {
    return (
        <div className="stepsIndicator">
            <div className="lightGrey" >
                <div className="progress" style={{ width: props.value }}></div>
            </div>
        </div>
    );
}


export default StepsIndicator;