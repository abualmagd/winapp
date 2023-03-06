
import "../styles/addTool.css";

function AddTool() {


    function clickAvatar() {
        console.log('pressed')
        return document.getElementById('avatar').click();
    }

    return (
        <div className="addTool">
            <div className="titl">
                Add Yoor App
            </div>
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
                    <label>Calendly Link : <span >optional</span></label>
                    <input type="text" className="calendly" placeholder="https://www.calendly.com/yourname" />

                </div>
                <div className="left">
                    <h4>Founder Data <span >optional</span></h4>
                    <label>Creator Name : </label>
                    <input type="text" className="creator" placeholder="your name" />
                    <label>Creator Job : </label>
                    <input type="text" className="job" placeholder="your job" />
                    <label >About :</label>
                    <textarea name="about" id="#about" maxLength={250} cols="10" rows="6" placeholder="write about yourself"
                        required></textarea>
                    <label >Choose a profile picture:</label>

                    <input type="file" style={{ display: "none" }}
                        id="avatar" name="avatar"
                        accept="image/png, image/jpeg" alt="llllll"></input>
                    <input type="button" id="onpress" onClick={clickAvatar} value="upload image" />
                </div>
            </div>
        </div>
    );
}



export default AddTool;
