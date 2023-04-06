import { useParams } from "react-router-dom";
import "../styles/explore.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import SearchCard from "../components/searchCard";

function Explore() {

    const params = useParams();


    const [searchValue, setValue] = useState(params['content']);


    function handleEnter(e) {

        if (e.key === 'Enter' & searchValue.trim() != null) {
            console.log("search :", searchValue);

        }
    }

    let list = [1, 2, 2, 3, 2, 5];
    const result = list.map((r, index) => {
        return <SearchCard r={r} key={index} />

    });
    return (
        <div className="exploreContainer">
            <div className="input-container-ex">
                <div className="relative">
                    <div className="holder">
                        <input type="text" className="searchy" value={searchValue} onChange={(e) => setValue(e.target.value)}
                            placeholder="search apps, tools, extensions and more" onKeyDown={(e) => handleEnter(e)} />
                        <div className="clearInput" onClick={() => setValue("")}>
                            <FontAwesomeIcon icon={faClose} />
                        </div>
                    </div>
                    <select name="categ" id="catego" className="categ">
                        <option value="kl">web tool</option>
                        <option value="kl">kk</option>
                        <option value="kl">kk</option>
                    </select>
                </div>
            </div>

            <div className="explore">
                <div className="space-ex">

                </div>
                {result}
            </div>
        </div>


    );

}



export default Explore;