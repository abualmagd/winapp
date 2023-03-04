
import "../styles/addTool.css";

function AddTool() {
    return (
        <div className="addTool">
            <div className="titl">
                Add Yoor App
            </div>
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
                <textarea name="about" id="#about" maxLength={250} cols="10" rows="6"
                    placeholder="write about your app {200 characters}" required> </textarea>

                <label>Contact Email : <span >optional</span></label>
                <input type="text" className="email" placeholder="winAppSupport@gmail.com" />
                <label>Calendly Link : <span >optional</span></label>
                <input type="text" className="calendly" placeholder="https://www.calendly.com/yourname" />

            </div>
        </div>
    );
}



export default AddTool;
