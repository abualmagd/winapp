import { useParams } from "react-router-dom";
import "../styles/explore.css";
import ResultCard from "../components/searchCard";

function Explore() {

    const params = useParams();
    console.log(params);

    let list = [1, 2, 2, 3, 2, 5];
    const result = list.map((r, index) => {
        return <ResultCard result={r} key={index} />
    });
    return (

        <div className="explore">
            {result}
        </div>
    );

}



export default Explore;