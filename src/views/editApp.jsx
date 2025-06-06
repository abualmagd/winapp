import { useNavigate, useParams } from "react-router-dom";
import "../styles/addTool.css";
import { useCallback, useEffect, useState } from "react";
import { getAppById, updateApp } from "../services/appServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer } from "../components/toastContainer";
import { APP } from "../model/appModel";
import { getToken } from "../services/global";



function EditTool() {
    const navigat = useNavigate();
    const [state, updateState] = useState('loading');
    const { id } = useParams('id');
    const userId = getToken();
    const [loading, updateLoading] = useState(false);
    const [selectedDevices, setSelectedDevices] = useState([]);
    const [priceModels, setPriceModels] = useState([]);
    const [message, updateMessage] = useState();
    const [display, updateDisplay] = useState("none");
    const [errory, updateErrory] = useState(true);
    const [categories] = useState([
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
    const [allValues, setValues] = useState({
        user_id: userId,
        app_name: '',
        app_url: '',
        category_id: 2,
        what_app: '',
        description: '',
        contact_email: '',
        calendly_url: '',
        who_need: '',
        why_use: '',
        alternatives: '',
        start_price: '',
        fees_per: 'month',
        price_model: '',
        devices: '',
        use_cases:'',
        features:'',
        video_url:'',
    });



    function handleInputChange(event) {
        const { name, value } = event.target;
        setValues({ ...allValues, [name]: value });//here seting the value per name
        console.log('values : ', allValues);
    };


    const handleCheckboxChange = (event) => {
        const selectedDevice = event.target.value;
        const isChecked = event.target.checked;

        if (isChecked) {
            setSelectedDevices([...selectedDevices, selectedDevice]);
        } else {
            setSelectedDevices(selectedDevices.filter(device => device !== selectedDevice));
        }
    }


        //listing before update changes of use_cases and features
        function handleInputChangeLister(event) {
            const { name, value } = event.target;
            const list=value.split(/\s*,\s*/);
            console.log(list);
            setValues({ ...allValues, [name]: list });//here seting the value per name
        };

    const handlePriceChange = (event) => {
        const selectedModel = event.target.value;
        const isChecked = event.target.checked;

        if (isChecked) {
            setPriceModels([...priceModels, selectedModel]);
        } else {
            setPriceModels(priceModels.filter(model => model !== selectedModel));
        }
    }

    const loadAppData = useCallback(
        async () => {
            const { error, data } = await getAppById(id);
            if (error) {
                updateState('error');
                console.log(error.message);
            } else {
                setValues(data[0]);
                const devs = data[0]['devices'] !== null ? data[0]['devices'] : [];
                const models = data[0]['price_model'] !== null ? data[0]['price_model'] : [];
                setSelectedDevices(devs);
                setPriceModels(models);
                updateState('data');
                console.log('data: ', data[0]);
            }
        }

        // eslint-disable-next-line
        , [id]);


    const check = (value, myArray) => {

        if (myArray.includes(value)) {
            return true;
        }

        return false;
    }

    const updateMyApp = async () => {
     
        const myApp = new APP(userId, allValues.category_id, allValues.plan_name, allValues.app_name, allValues.app_url, allValues.calendly_url,
            allValues.what_app, allValues.description, allValues.contact_email, '', allValues.who_need,
            allValues.why_use, allValues.alternatives, allValues.start_price, allValues.fees_per,
            '', priceModels, selectedDevices,allValues.features,allValues.use_cases,allValues.video_url);
        const newData = myApp.toData();
        console.log('update');
        console.log('values', allValues);
        const { error, data } = await updateApp(newData,id);
        if (error) {
            throw error;
        } else {
            return data;
        }
    };
    const notify = (mesg, error) => {
        updateMessage(mesg);
        updateErrory(error);
        updateDisplay("flex");
        setTimeout(() => {
            updateDisplay("none");
            console.log('close')
        }, 3000);
        console.log('nottttttttttttt')
    }

    useEffect(() => {

        loadAppData();

    }, [loadAppData]);


    function handleCategoryChange(event) {
        const { name, value } = event.target;
        console.log('handle change ', name + " " + value.replace(/\s+/g, ''));
        console.log(typeof (value));
        setValues({ ...allValues, [name]: value });//here seting the value per name
    };

    const categoryOption = categories.map((category, index) => {

        return <option value={category['id']} key={index}>{category['name']}</option>
    });


    if (state === 'loading') {
        return <div>
            <div className="addTool" >
                <div className="centerCircular">
                    <FontAwesomeIcon icon={faSpinner} spin size="lg" />
                </div>
            </div>
        </div>
    }
    if (state === 'error') {
        return <div>
            <div className="addTool" >
                <div className="centerCircular">
                    <p className="error">
                        Sorry something error happened
                    </p>
                </div>
            </div>
        </div>
    }

    return (
        <div className="addTool">
            <ToastContainer display={display} message={message} error={errory} />

            <div className="content">
                <form className="content" id='form_id' onSubmit={async (event) => {

                    event.preventDefault();
                    updateLoading(true);
                    try {
                        await updateMyApp();
                        navigat('/dashboard', -1);
                        updateLoading(false);
                    } catch (error) {
                        notify(error.message, true);
                        updateLoading(false);

                    }

                }}>
                    <div className="right">
                        <label>App Name :</label>
                        <input required name="app_name" value={allValues.app_name} onChange={handleInputChange} type="text" className="appName" placeholder="donnot use white space " />
                        <label>App Url :</label>
                        <input required name="app_url" value={allValues.app_url} onChange={handleInputChange} type="text" className="appUrl" placeholder="www.winApp.io" />
                        <label >Choose your app category :</label>
                        <select required name="category_id" value={allValues.category_id} id="#category" className="category-sel" onChange={handleCategoryChange}>
                            {categoryOption}
                        </select>
                        <label>Whats your app :</label>
                        <input required name="what_app" value={allValues.what_app} onChange={handleInputChange} type="text" className="appUrl" placeholder="little words define your app " />
                        <label >App description :</label>
                        <textarea name="description" value={allValues.description} onChange={handleInputChange} id="#about" maxLength={250} cols="10" rows="6" placeholder="write about your app"
                            required></textarea>
                              <label>Use cases:</label>
                    <input  name="use_cases" value={allValues.use_cases??''} onChange={handleInputChangeLister} type="text" className="appUrl" placeholder="frist case, second case, must seperate by comma, " />
                        <label>Contact Email : <span >optional</span></label>
                        <input type="text" name="contact_email" value={allValues.contact_email} onChange={handleInputChange} className="email" placeholder="solutrendSupport@gmail.com" />
                        <div className="devices" style={{ marginTop: '5px' }}> Supported Platforms :</div>
                        <div className="device-checkboxes">
                            <label><input type="checkbox" checked={check('web', selectedDevices)} name="web" value="web" onChange={handleCheckboxChange} />Web</label>
                            <label><input type="checkbox" checked={check('ios', selectedDevices)} name="ios" value="ios" onChange={handleCheckboxChange} />Ios</label>
                            <label><input type="checkbox" checked={check('android', selectedDevices)} name="android" value="android" onChange={handleCheckboxChange} />Android</label>
                            <label><input type="checkbox" checked={check('mac', selectedDevices)} name="mac" value="mac" onChange={handleCheckboxChange} />Mac</label>
                            <label><input type="checkbox" checked={check('extension', selectedDevices)} name="extension" value="extension" onChange={handleCheckboxChange} />Extension</label>
                            <label><input type="checkbox" checked={check('linux', selectedDevices)} name="linux" value="linux" onChange={handleCheckboxChange} />Linux</label>
                            <label><input type="checkbox" checked={check('windows', selectedDevices)} name="windows" value="windows" onChange={handleCheckboxChange} />Windows</label>
                        </div>





                    </div>
                    <div className="left">
                        <label>Calendly Link : <span >optional</span></label>
                        <input type="text" name="calendly_url" value={allValues.calendly_url} onChange={handleInputChange} className="calendly" placeholder="https://www.calendly.com/yourname" />
                        <label>Youtube video id: <span >optional</span></label>
                    <input type="text" name="video_url" value={allValues.video_url??''} onChange={handleInputChange} className="calendly" placeholder="78845547" />
                        <label>Who need your app : </label>
                        <input type="text" name="who_need" value={allValues.who_need} onChange={handleInputChange} className="job" placeholder="like developrs teachers ...etc" />
                        <label >Why  use your app ?</label>
                        <textarea name="why_use" value={allValues.why_use} onChange={handleInputChange} id="#about" maxLength={250} cols="10" rows="6" placeholder="write the needs make others use your app"
                            required></textarea>
                        <label>Your app is alternative to : </label>
                        <input type="text" name="alternatives" value={allValues.alternatives} onChange={handleInputChange} className="job" placeholder="notion salesforse firebase ...etc" />
                        <label >Best Features:</label>
                    <textarea name="features" value={allValues.features??''} onChange={handleInputChangeLister} id="#about" maxLength={600} cols="10" rows="6" placeholder="write the best features of your tool, seperated by comma, "
                        required></textarea>
                        <label>Price starts from : </label>
                        <div className="priceStarts">
                            <input required type="text" name="start_price" value={allValues.start_price} onChange={handleInputChange} className="creator" placeholder="in dollars.." />
                            <select name="fees_per" value={allValues.fees_per} onChange={handleInputChange} id="period" className="plans-period">
                                <option value="monthe">month</option>
                                <option value="year">year</option>
                            </select>
                        </div>
                        <div className="divider">
                        </div>
                        <label  >Choose Your Pricing model :</label>
                        <div className="device-checkboxes">
                            <label><input type="checkbox" checked={check('free', priceModels)} name="free" value="free" onChange={handlePriceChange} />Free</label>
                            <label><input type="checkbox" checked={check('subscription', priceModels)} name="subscription" value="subscription" onChange={handlePriceChange} />Subscription</label>
                            <label><input type="checkbox" checked={check('freetrial', priceModels)} name="freetrial" value="freetrial" onChange={handlePriceChange} />Free Trial</label>
                            <label><input type="checkbox" checked={check('onetime', priceModels)} name="onetime" value="onetime" onChange={handlePriceChange} />One Time Fees</label>
                        </div>
                        {loading ? <div className="publish">
                            <FontAwesomeIcon icon={faSpinner} spin />
                        </div> : <input type="submit" className="publish" value={'update'} style={{ backgroundColor: " var(--btnbgColor)" }} />}




                    </div>
                </form>
            </div>
        </div>
    );
}



export default EditTool;
