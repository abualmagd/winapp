import { useEffect, useState } from "react";
import "../styles/setting.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "../components/toastContainer";
import { uploadAvatar } from "../services/filesServices";
import { getLocalUser } from "../services/userServices";



export default function AccountInfo() {
    const user = getLocalUser() || null;

    const [image, setImage] = useState(user['avatar_url'] || null);
    const [name, setName] = useState(user['name'] || null);
    const [email, setEmail] = useState(user['email'] || null);
    const navigat = useNavigate();
    const [message, updateMessage] = useState();
    const [display, updateDisplay] = useState("none");
    const [errory, updateErrory] = useState(true);

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

    function clickAvatar() {
        console.log('pressed')
        return document.getElementById('screen').click();
    }
    function handleChangeScreen() {
        document.getElementById('screen').addEventListener("change", async (e) => {
            const fileList = e.target.files;
            console.log(fileList);
            const urlImg = URL.createObjectURL(fileList[0]);
            //upload image first And get url 
            const { data, error } = await uploadAvatar(urlImg, fileList[0]);
            if (error) {
                notify(error.message, true)
            } else {
                console.log(urlImg)
                console.log(data);
                setImage(data.path);
            }

        })
    }



    useEffect(() => {
        handleChangeScreen();
        // eslint-disable-next-line
    }, []);



    const updateUser = async () => {
        const { data, error } = await updateUser(name, image);
        if (error) {
            notify(error.message, true);
        } else {
            console.log("user data :", data);
            notify("your data updated succesfuly", false);
        }

    }

    return (
        <div className="account-edit">
            <ToastContainer display={display} message={message} error={errory} />
            <img src={image} alt="avatar" className="avatar-set" />
            <div className="image-uploader">
                <input type="file" name="avat" id="screen" style={{ display: "none" }} accept="image/*" />
                <input type="button" id="onpress" onClick={clickAvatar}
                    value="change avatar" style={{ width: "140px", cursor: "pointer" }} />

            </div>
            <input type="text" className="name-set" value={name} onChange={(e) => setName(e.currentTarget.value)} />
            <input type="email" className="email-set" value={email} onChange={(e) => setEmail(e.currentTarget.value)} />
            <div className="actions-btn">
                <input type="submit" value="save" className="submit-set" onClick={updateUser} />
                <input type="submit" value="cancel" className="submit-set" style={{ backgroundColor: "gray" }} onClick={() => navigat(-1)} />

            </div>

        </div>
    );

}