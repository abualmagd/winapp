import "../styles/replayPart.css"
import ReplayCard from "./replayCard";




function ReplayPart(props) {

    let repls = [1, 2];
    const reps = repls.map((r, index) => {
        return <ReplayCard replay={r} key={index} />
    })

    let myHeight = props.expand ? "100%" : "0%";
    console.log(myHeight)

    return (<div className="replayContainer" style={{ height: myHeight }}>
        <div className="divider"></div>
        {reps}
        <textarea className="replayTo" maxLength={255} name="replayTo" id="repTo" cols="35" rows="7"></textarea>
        <div className="replayToBtn" onClick={() => console.log('send replsy')
        } >S</div>
    </div>);
}


export default ReplayPart;