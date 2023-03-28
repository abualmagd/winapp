import "../styles/addTool.css";


function EditTool(props) {

    let appName = props.name;
    console.log(appName);
    function clickAvatar() {
        console.log('pressed')
        return document.getElementById('avatar').click();
    }

    return (
        <div className="addTool">
            <div className="content">
                <div className="right">

                    <label>App Name :</label>
                    <input type="text" className="appName" placeholder="winApp" />
                    <label>App Url :</label>
                    <input type="text" className="appUrl" placeholder="www.winApp.io" />
                    <label >Choose your app category :</label>
                    <select name="category" id="#category">
                        <option value="saas tool">saas tool</option>
                        <option value="extension">extension</option>
                        <option value="cms">cms</option>
                        <option value="mobile app">mobile app</option>
                    </select>
                    <label >App description :</label>
                    <textarea name="about" id="#about" maxLength={250} cols="10" rows="6" placeholder="write about your app"
                        required></textarea>
                    <label>Contact Email : <span >optional</span></label>
                    <input type="text" className="email" placeholder="winAppSupport@gmail.com" />
                    <label >Upload App images :</label>
                    <input type="button" id="onpress" onClick={clickAvatar}
                        value="upload image" style={{ width: "140px", cursor: "pointer" }} />



                </div>
                <div className="left">
                    <label>Calendly Link : <span >optional</span></label>
                    <input type="text" className="calendly" placeholder="https://www.calendly.com/yourname" />
                    <label>Who need your app : </label>
                    <input type="text" className="job" placeholder="like developrs teachers ...etc" />
                    <label >Why to use your app ?</label>
                    <textarea name="about" id="#about" maxLength={250} cols="10" rows="6" placeholder="write the needs make others use your app"
                        required></textarea>
                    <label>Your app is alternative to : </label>
                    <input type="text" className="job" placeholder="notion salesforse firebase ...etc" />
                    <label>Price starts from : </label>
                    <div className="priceStarts">
                        <input type="text" className="creator" placeholder="in dollars.." />
                        <select name="plansPeriod" id="period">
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

                    <div className="publish" >Save</div>



                </div>
            </div>
        </div>
    );
}



export default EditTool;
