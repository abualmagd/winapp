
import { useCallback, useState } from "react";
import "../styles/addTool.css";
import StepsIndicator from "./stepsIndicator";
import { useEffect } from "react";
import { createNewApp, getAllCategory } from "../services/appServices";
import { ToastContainer } from "../components/toastContainer";
import { getLocalUser } from "../services/userServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function AddTool() {
    const { id, plan } = getLocalUser();
    const navigator = useNavigate();
    const [loading, updateLoading] = useState(false);
    const [priceModel, updatePriceModel] = useState([]);
    const [message, updateMessage] = useState();
    const [display, updateDisplay] = useState("none");
    const [errory, updateErrory] = useState(true);
    const [categories, setCategories] = useState([
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
        plan_name: plan ?? 'free',
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

    const handlePriceModelChange = (event) => {
        var myValue = event.target.value;
        if (event.target.checked) {


            updatePriceModel([...priceModel, myValue]);

        } else {

            updatePriceModel((current) => current.filter((element) => element !== myValue));
        }
        console.log(priceModel);
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        console.log('handle change ', name + " " + value.replace(/\s+/g, ''));
        console.log(typeof (value));
        setValues({ ...allValues, [name]: value });//here seting the value per name
    };

    function handleCategoryChange(event) {
        const { name, value } = event.target;
        console.log('handle change ', name + " " + value.replace(/\s+/g, ''));
        console.log(typeof (value));
        setValues({ ...allValues, [name]: parseInt(value) });//here seting the value per name
    };


    const addNewApp = async () => {
        console.log('values : ', allValues);
        const { error, data } = await createNewApp(allValues);
        if (error) {
            console.log('here in post app');
            notify(error.message, true);
            updateLoading(false);
            console.error(error.message);

        } else {
            console.log('new app : ', data);
            notify('success process ', false);
            updateLoading(false);
            const url = '/uploader/' + data[0]['id'];
            navigator(url, -1);
        }
    }





    const preventReload = (event) => {
        event.preventDefault();
    }



    const getCategoryList = useCallback(async () => {
        const { data, error } = await getAllCategory();
        if (error) {
            notify(error.message, true);
        } else {
            console.log(data);
            setCategories(data);
        }
    }, []);



    useEffect(() => {
        getCategoryList();
    }, [getCategoryList])









    const categoryOption = categories.map((category, index) => {

        return <option value={category['id']} key={index}>{category['name']}</option>
    });
    return (
        <div className="addTool">
            <ToastContainer display={display} message={message} error={errory} />

            <div className="titl">

                <StepsIndicator value={"75%"} />
            </div>

            <form className="content" id='form_id' onSubmit={async (event) => {
                setValues({ ...allValues, price_model: priceModel });
                preventReload(event);
                updateLoading(true);
                try {
                    await addNewApp();


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

                    <div className="image-uploader">


                    </div>

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
                    <div className="priceModel">
                        <input className="checkbox" onChange={handlePriceModelChange} value={'free'} type="checkbox" name="Subscription" id="free" />
                        <label htmlFor="free">free plan</label>
                        <input className="checkbox" type="checkbox" onChange={handlePriceModelChange} value={'subscription'} name="Subscription" id="Subscription" />
                        <label htmlFor="Subscription">Subscription</label>
                        <input className="checkbox" onChange={handlePriceModelChange} value={'trial'} type="checkbox" name="Subscription" id="trial" />
                        <label htmlFor="free trial">free trial</label>
                    </div>
                    {loading ? <div className="publish">
                        <FontAwesomeIcon icon={faSpinner} spin />
                    </div> : <input type="submit" className="publish" value={'publish'} style={{ backgroundColor: " var(--btnbgColor)" }} />}


                </div>
            </form>

        </div >
    );
}



export default AddTool;
