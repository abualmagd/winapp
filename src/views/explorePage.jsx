import { useNavigate, useParams } from "react-router-dom";
import "../styles/explore.css";
import { useCallback, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faClose } from "@fortawesome/free-solid-svg-icons";

import AppBar from "../components/appBar";
import { searchApps } from "../services/appServices";
import SearchResult from "./searchResult";

function Explore() {

    const { content } = useParams();
    const [categories] = useState([
        {
            "id": 0,
            "name": "All"
        },
        {
            "id": 2,
            "name": "Project Management & Planning"
        },
        {
            "id": 3,
            "name": "Industry Specific"
        },
        {
            "id": 4,
            "name": "IT Management"
        },
        {
            "id": 5,
            "name": "sociaL management"
        },
        {
            "id": 6,
            "name": "Communications"
        },
        {
            "id": 7,
            "name": "Operations Management"
        },
        {
            "id": 8,
            "name": "automation"
        },
        {
            "id": 9,
            "name": "Collaboration"
        },
        {
            "id": 10,
            "name": "Customer Management"
        },
        {
            "id": 11,
            "name": "HR & Employee Management"
        },
        {
            "id": 12,
            "name": "Customer Service & Support"
        },
        {
            "id": 13,
            "name": "Marketing"
        },
        {
            "id": 14,
            "name": "Business Intelligence & Analytics"
        },
        {
            "id": 15,
            "name": "review and feedbak"
        },
        {
            "id": 16,
            "name": "Development Tools"
        },
        {
            "id": 17,
            "name": "IT Security"
        },
        {
            "id": 18,
            "name": "Transportation & Logistics"
        },
        {
            "id": 19,
            "name": "Government & Social Services"
        },
        {
            "id": 20,
            "name": "Retail & Consumer Services"
        },
        {
            "id": 21,
            "name": "others"
        },
        {
            "id": 22,
            "name": "Healthcare & Pharmaceuticals"
        },
        {
            "id": 23,
            "name": "Finance & Accounting"
        },
        {
            "id": 24,
            "name": "Education & eLearning"
        },
        {
            "id": 25,
            "name": "Real Estate & Property"
        },
        {
            "id": 26,
            "name": "Sales"
        },
        {
            "id": 27,
            "name": "Travel"
        },
        {
            "id": 28,
            "name": "ecommerce"
        },
        {
            "id": 29,
            "name": "Construction"
        },
        {
            "id": 30,
            "name": "Recreation & Wellness"
        },
        {
            "id": 31,
            "name": "graphic design"
        },
        {
            "id": 32,
            "name": "Artificial Intelligence"
        },
        {
            "id": 33,
            "name": "Legal & Law"
        },
        {
            "id": 34,
            "name": "non profit"
        },
        {
            "id": 35,
            "name": "open source"
        },
        {
            "id": 36,
            "name": "video editing "
        },
        {
            "id": 37,
            "name": "social app"
        }
    ]);
    const [showFilters, updateFilers] = useState('filters');
    const [searchValue, setValue] = useState(content);
    const [selectedDevices, setSelectedDevices] = useState([]);
    const [categoryId, setCategoryId] = useState(null);
    const [priceModel, setPriceModel] = useState(null);
    const [state, updateState] = useState('loading');
    const [data, setData] = useState();
    let navigat = useNavigate();


    const handleCheckboxChange = (event) => {
        const selectedDevice = event.target.value;
        const isChecked = event.target.checked;

        if (isChecked) {
            setSelectedDevices([...selectedDevices, selectedDevice]);
        } else {
            setSelectedDevices(selectedDevices.filter(device => device !== selectedDevice));
        }
    }


    const handleChangeCategory = (event) => {
        if (event.target.value === '0') {
            setCategoryId(null);
        } else {
            setCategoryId(event.target.value);
        }

    }

    const handleChangePriceModel = (event) => {
        setPriceModel(event.target.value);
    }

    const rest = () => {
        setSelectedDevices([]);
        setCategoryId(0);
        setPriceModel(null);
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
    }

    function handleEnter(e) {

        if (e.key === 'Enter' & searchValue.trim() != null) {
            changeParam();
            e.preventDefault();
            // fetchData(searchValue);

        }
    }

    function changeParam() {
        navigat(`/explore/${searchValue}`);
    }

    function hide() {
        updateFilers('inactive');
    }

    function show() {
        updateFilers('filters');
    }
    const fetchData = useCallback(async (value) => {
        updateState('loading');
        const myArrayString = `{${selectedDevices.join(',')}}`;
        var platforms = selectedDevices.length === 0 ? null : myArrayString;
        var category = categoryId === 0 ? null : categoryId;
        const { error, data } = await searchApps(value, platforms, priceModel, category);
        hide();
        if (error) {
            updateState('error');
            console.log(error.message);
        } else {
            setData(data);
            updateState('data');
            console.log(data);

        }
    }, [selectedDevices, priceModel, categoryId]);

    useEffect(() => {
        fetchData(content);
    }, [fetchData, content]);

    const categoryOption = categories.map((category, index) => {

        return <option value={category['id']} key={index}>{category['name']}</option>
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
                <div className="show" onClick={show}><FontAwesomeIcon icon={faArrowRight} size="xl" /></div>
                <div className={showFilters}>
                    <div className="toggle" onClick={hide}><FontAwesomeIcon icon={faClose} /></div>
                    <div className="filters-head">
                        <div className="filters-title">
                            Filter
                        </div>
                        <div className="head-btn-reset" onClick={rest}>
                            reset
                        </div>
                    </div>
                    <div className="filter-divider">
                    </div>
                    <div className="price-title">Category </div>
                    <select name="categoSelector" id="categS" className="catego-selector " onChange={handleChangeCategory}>
                        {categoryOption}
                    </select>

                    <div className="filter-divider">
                    </div>
                    <div className="price-model">
                        <div className="price-title">price model</div>

                        <select required name="price_model" id="#priceModel" className="catego-selector " onChange={handleChangePriceModel} >
                            <option value="">all</option>
                            <option value={'{"free"}'} >free</option>
                            <option value={'{"subscription"}'} >subscription</option>
                            <option value={'{"subscription","free"}'} >free and subscription</option>
                            <option value={'{"freeTrial", "supscription"}'} >free trial and subscription</option>
                            <option value={'{"oneTime"}'} >one time fees</option>
                        </select>
                    </div>

                    <div className="filter-divider">
                    </div>

                    <div className="price-model">
                        <div className="price-title">supported devices</div>
                        <div className="radios">
                            <div className="option-p">
                                <label htmlFor="web">
                                    <input type="checkbox" name="devices" value={'web'} id="web" onChange={handleCheckboxChange} />
                                    web</label>
                            </div>
                            <div className="option-p">
                                <label htmlFor="windows">
                                    <input type="checkbox" name="devices" value={'windows'} id="windows" onChange={handleCheckboxChange} />
                                    windows</label>
                            </div>
                            <div className="option-p">
                                <label htmlFor="android">
                                    <input type="checkbox" name="devices" value={'android'} id="android" onChange={handleCheckboxChange} />
                                    android</label>
                            </div>
                            <div className="option-p">
                                <label htmlFor="ios">
                                    <input type="checkbox" name="devices" value={'ios'} id="ios" onChange={handleCheckboxChange} />

                                    ios</label>
                            </div>

                            <div className="option-p">
                                <label htmlFor="linux">
                                    <input type="checkbox" name="devices" value={'linux'} id="linux" onChange={handleCheckboxChange} />
                                    linux</label>
                            </div>
                            <div className="option-p">
                                <input type="checkbox" name="devices" value={'macos'} id="mac" onChange={handleCheckboxChange} />
                                <label htmlFor="mac">
                                    mac</label>
                            </div>
                            <div className="option-p">
                                <input type="checkbox" name="devices" value={'extension'} id="extension" onChange={handleCheckboxChange} />
                                <label htmlFor="extension">
                                    extension</label>
                            </div>

                        </div>

                    </div>

                </div>
                <div className="search-result">
                    <SearchResult result={data} state={state} />
                </div>

            </div>

        </div>


    );

}



export default Explore;