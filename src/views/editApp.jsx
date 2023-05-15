import { useNavigate, useParams } from "react-router-dom";
import "../styles/addTool.css";
import { useCallback, useEffect, useState } from "react";
import { getAppById, updateApp } from "../services/appServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer } from "../components/toastContainer";

function EditTool() {
    const navigat = useNavigate();
    const [state, updateState] = useState('loading');
    const { id } = useParams('id');
    console.log(id);
    const [loading, updateLoading] = useState(false);
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
        user_id: id,
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
    });

    function handleInputChange(event) {
        const { name, value } = event.target;
        setValues({ ...allValues, [name]: value });//here seting the value per name
        console.log('values : ', allValues);
    };


    function handleCategoryChange(event) {
        const { name, value } = event.target;
        console.log('handle change ', name + " " + value.replace(/\s+/g, ''));
        console.log(typeof (value));
    };

    const loadAppData = useCallback(
        async () => {
            const { error, data } = await getAppById(id);
            if (error) {
                updateState('error');
                console.log(error.message);
            } else {
                setValues(data[0]);
                updateState('data');
                console.log(data[0]);
            }

        }
        , [id]);


    const updateMyApp = async () => {
        console.log('update');
        const { error, data } = await updateApp(allValues, id);
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
                    } catch (error) {
                        notify(error.message, true);


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
                        <label>Contact Email : <span >optional</span></label>
                        <input type="text" name="contact_email" value={allValues.contact_email} onChange={handleInputChange} className="email" placeholder="solutrendSupport@gmail.com" />






                    </div>
                    <div className="left">
                        <label>Calendly Link : <span >optional</span></label>
                        <input type="text" name="calendly_url" value={allValues.calendly_url} onChange={handleInputChange} className="calendly" placeholder="https://www.calendly.com/yourname" />
                        <label>Who need your app : </label>
                        <input type="text" name="who_need" value={allValues.who_need} onChange={handleInputChange} className="job" placeholder="like developrs teachers ...etc" />
                        <label >Why  use your app ?</label>
                        <textarea name="why_use" value={allValues.why_use} onChange={handleInputChange} id="#about" maxLength={250} cols="10" rows="6" placeholder="write the needs make others use your app"
                            required></textarea>
                        <label>Your app is alternative to : </label>
                        <input type="text" name="alternatives" value={allValues.alternatives} onChange={handleInputChange} className="job" placeholder="notion salesforse firebase ...etc" />
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
                        { /* <div className="priceModel">
                        <input className="checkbox" onChange={handlePriceModelChange} value={'free'} type="checkbox" name="Subscription" id="free" />
                        <label htmlFor="free">free plan</label>
                        <input className="checkbox" type="checkbox" onChange={handlePriceModelChange} value={'subscription'} name="Subscription" id="Subscription" />
                        <label htmlFor="Subscription">Subscription</label>
                        <input className="checkbox" onChange={handlePriceModelChange} value={'trial'} type="checkbox" name="Subscription" id="trial" />
                        <label htmlFor="free trial">free trial</label>
                    </div>*/}'
                        <select required name="price_model" value={allValues.price_model} id="#priceModel" className="category-sel" onChange={handleInputChange}>
                            <option value={['free']} >free</option>
                            <option value={['subscription']} >subscription</option>
                            <option value={['free', 'subscription']} >free and subscription</option>
                            <option value={['freeTrial', 'supscription']} >free trial and subscription</option>
                            <option value={['oneTime']} >one time fees</option>
                        </select>
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
