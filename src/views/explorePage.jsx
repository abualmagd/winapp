import { useParams } from "react-router-dom";
import "../styles/explore.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import SearchCard from "../components/searchCard";
import AppBar from "./appBar";

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
            <AppBar />
            <div className="space-ex">

            </div>
            <div className="input-container">
                <input value={searchValue} onChange={(e) => setValue(e.target.value)} type="text" className="search"
                    placeholder="search apps, tools, extensions and more" onKeyDown={(e) => handleEnter(e)} />
                <div className="clear" onClick={() => setValue("")}>
                    <FontAwesomeIcon icon={faClose} />
                </div>
            </div>

            <div className="space-ex">

            </div>

            <div className="results-title">
                results :
            </div>
            <div className="line-div">

            </div>
            <div className="explore-body">
                <div className="filters">
                    <div className="filters-head">
                        <div className="filters-title">
                            Filter
                        </div>
                        <div className="head-btn-reset">
                            reset
                        </div>
                    </div>
                    <div className="filter-divider">
                    </div>
                    <select name="categoSelector" id="categS" className="catego-selector ">
                        <option value="all category">all category</option>
                        <option value="all category">web app</option>
                        <option value="all category">ai apps</option>
                        <option value="all category">mobile ap</option>
                        <option value="all category">time control</option>
                        <option value="all category">crm</option>

                    </select>

                    <div className="filter-divider">
                    </div>
                    <div className="price-model">
                        <div className="price-title">price model</div>
                        <div className="radios">
                            <div className="option-p">
                                <input type="radio" name="price1" id="free" />
                                <label htmlFor="free">free</label>
                            </div>
                            <div className="option-p">
                                <input type="radio" name="price2" id="freeTr" />
                                <label htmlFor="freeTr">free trial</label>
                            </div>
                            <div className="option-p">
                                <input type="radio" name="price3" id="open" />
                                <label htmlFor="open">open source</label>
                            </div>
                            <div className="option-p">
                                <input type="radio" name="price4" id="subscrip" />
                                <label htmlFor="subscrip">
                                    Subscription</label>
                            </div>

                            <div className="option-p">
                                <input type="radio" name="price" id="oneTime" />
                                <label htmlFor="oneTime">
                                    One Time License
                                </label>
                            </div>

                        </div>
                    </div>

                    <div className="filter-divider">
                    </div>

                    <div className="price-model">
                        <div className="price-title">supported devices</div>
                        <div className="radios">
                            <div className="option-p">
                                <input type="radio" name="device1" id="free" />
                                <label htmlFor="free">web</label>
                            </div>
                            <div className="option-p">
                                <input type="radio" name="device2" id="freeTr" />
                                <label htmlFor="freeTr">windows</label>
                            </div>
                            <div className="option-p">
                                <input type="radio" name="device3" id="open" />
                                <label htmlFor="open">android</label>
                            </div>
                            <div className="option-p">
                                <input type="radio" name="device4" id="subscrip" />
                                <label htmlFor="subscrip">
                                    ios</label>
                            </div>

                            <div className="option-p">
                                <input type="radio" name="device5" id="oneTime" />
                                <label htmlFor="oneTime">
                                    Linux</label>
                            </div>

                        </div>
                    </div>

                </div>

                <div className="search-result">
                    {result}
                </div>
            </div>

        </div>


    );

}



export default Explore;