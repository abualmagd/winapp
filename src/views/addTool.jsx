
import { useState } from "react";
import "../styles/addTool.css";
import StepsIndicator from "./stepsIndicator";
import { useEffect } from "react";

function AddTool() {
    const [logoImage, setLogo] = useState(null);
    const [screenImage, setScreen] = useState(null);

    function clickAvatar() {
        console.log('pressed')
        return document.getElementById('screen').click();
    }

    function clickLogo() {
        console.log('pressed2')
        return document.getElementById('logoImage').click();

    }

    useEffect(() => {
        handleChange();
        handleChangeScreen();
    })



    function handleChangeScreen() {
        document.getElementById('screen').addEventListener("change", (e) => {
            const fileList = e.target.files;
            console.log(fileList);
            const urlImg = URL.createObjectURL(fileList[0]);
            console.log(urlImg)
            setScreen(urlImg);
        })
    }

    function handleChange() {
        document.getElementById('logoImage').addEventListener("change", (e) => {
            const fileList = e.target.files;
            console.log(fileList);
            const urlImg = URL.createObjectURL(fileList[0]);
            console.log(urlImg)
            setLogo(urlImg);
        })
    }
    return (
        <div className="addTool">
            <div className="titl">

                <StepsIndicator value={"75%"} />
            </div>
            <div className="content">
                <div className="right">

                    <label>App Name :</label>
                    <input type="text" className="appName" placeholder="winApp" />
                    <label>App Url :</label>
                    <input type="text" className="appUrl" placeholder="www.winApp.io" />
                    <label >Choose your app category :</label>
                    <select name="category" id="#category" className="category-sel">
                        <option value="saas tool">saas tool</option>
                        <option value="extension">extension</option>
                        <option value="cms">cms</option>
                        <option value="mobile app">mobile app</option>
                    </select>
                    <label>Whats your app :</label>
                    <input type="text" className="appUrl" placeholder="recommendation app " />
                    <label >App description :</label>
                    <textarea name="about" id="#about" maxLength={250} cols="10" rows="6" placeholder="write about your app"
                        required></textarea>
                    <label>Contact Email : <span >optional</span></label>
                    <input type="text" className="email" placeholder="winAppSupport@gmail.com" />

                    <div className="image-uploader">
                        <input type="file" name="avat" id="screen" style={{ display: "none" }} accept="image/*" />
                        <input type="button" id="onpress" onClick={clickAvatar}
                            value="upload screenshot" style={{ width: "140px", cursor: "pointer" }} />
                        {screenImage != null && <img src={screenImage} alt="error" className="screen-image-shower" />}

                    </div>

                </div>
                <div className="left">
                    <label>Calendly Link : <span >optional</span></label>
                    <input type="text" className="calendly" placeholder="https://www.calendly.com/yourname" />
                    <label>Who need your app : </label>
                    <input type="text" className="job" placeholder="like developrs teachers ...etc" />
                    <label >Why  use your app ?</label>
                    <textarea name="about" id="#about" maxLength={250} cols="10" rows="6" placeholder="write the needs make others use your app"
                        required></textarea>
                    <label>Your app is alternative to : </label>
                    <input type="text" className="job" placeholder="notion salesforse firebase ...etc" />
                    <label>Price starts from : </label>
                    <div className="priceStarts">
                        <input type="text" className="creator" placeholder="in dollars.." />
                        <select name="plansPeriod" id="period" className="plans-period">
                            <option value="monthely">month</option>
                            <option value="yearly">year</option>
                        </select>
                    </div>
                    <div className="divider">

                    </div>
                    <label  >Choose Your Pricing model :</label>
                    <div className="priceModel">
                        <input className="checkbox" type="checkbox" name="Subscription" id="free" />
                        <label htmlFor="free">free plan</label>
                        <input className="checkbox" type="checkbox" name="Subscription" id="Subscription" />
                        <label htmlFor="Subscription">Subscription</label>
                        <input className="checkbox" type="checkbox" name="Subscription" id="trial" />
                        <label htmlFor="free trial">free trial</label>
                    </div>

                    <input type="file" name="avat" id="logoImage" onChange={(e) => handleChange(e)} style={{ display: "none" }} accept="image/*" />
                    <div className="image-uploader">
                        <input type="button" id="onpress2" onClick={clickLogo}
                            value="upload logo image" style={{ width: "140px", cursor: "pointer" }} />
                        {logoImage != null && <img src={logoImage} alt="error" className="logo-image-shower" />}
                    </div>
                    <div className="publish" >Publish</div>



                </div>
            </div>
        </div>
    );
}



export default AddTool;
