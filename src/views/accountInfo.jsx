import { useEffect, useState } from "react";
import "../styles/setting.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "../components/toastContainer";
import { createImageUrl, uploadAvatar } from "../services/filesServices";
import { updateCurrentName, updateUserAvatar } from "../services/userServices";
import { updateUserEmail } from "../services/authServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import useAuth from "../myHooks/useAuth";



export default function AccountInfo() {
    const { currentUser, onUpdate } = useAuth();
    const [image, setImage] = useState(currentUser['avatar_url'] ?? '/assets/images/avatarholder.jpg');
    const [name, setName] = useState(currentUser['name'] || '');
    const [email, setEmail] = useState(currentUser['email'] || '');
    const navigat = useNavigate();
    const [message, updateMessage] = useState();
    const [display, updateDisplay] = useState("none");
    const [errory, updateErrory] = useState(true);
    const [loading, updateLoading] = useState(false);
    const [avatarChange, updateAvatarChange] = useState(false);


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
            updateAvatarChange(true)
            //upload image first And get url 
            const { data, error } = await uploadAvatar(fileList[0]);
            const imageData = data;
            if (error) {
                notify(error.message, true)
                console.log(error.message)
                updateAvatarChange(false)
            } else {
                updateAvatarChange(true);
                console.log(imageData);
                const { data } = createImageUrl('avatars', imageData.path);
                console.log("url", data.publicUrl)
                const { error } = await updateUserAvatar(data.publicUrl, currentUser['id']);

                if (error) {
                    notify(error.message, true);

                    updateAvatarChange(false);
                } else {
                    setImage(data.publicUrl);
                    updateAvatarChange(false)
                    notify("your data updated succesfuly", false);
                    onUpdate();
                    navToHome();
                }
            }

        })
    }



    useEffect(() => {
        handleChangeScreen();
        // eslint-disable-next-line
    }, []);

    const navToHome = () => {
        setTimeout(() => navigat('/'), 2000);
    }


    const updateUser = async () => {

        if (currentUser['name'] !== name) {
            updateLoading(true);
            console.log('step', 2);
            const { error } = await updateCurrentName(name)
            if (error) {
                console.log('error here', error.message)
                notify(error.message, true);
                updateLoading(false);

            } else {
                notify("your data updated succesfuly", false);
                updateLoading(false);
                onUpdate();
                navToHome();
            }
        } else if (currentUser['email'] !== email) {
            updateLoading(true);
            console.log('step', 3);
            const { data, error } = await updateUserEmail(email);
            if (error) {
                notify(error.message, true);
                updateLoading(false);
            } else {
                console.log("user data :", data['role']);
                notify("sent email to new email", false);
                updateLoading(false);
                onUpdate();
                navToHome();
            }
        }


    }

    return (
        <div className="account-edit">
            <ToastContainer display={display} message={message} error={errory} />
            <img src={image} alt="avatar" className="avatar-set" />
            {!avatarChange ? <div className="image-uploader">
                <input type="file" name="avat" id="screen" style={{ display: "none" }} placeholder="avatar" title="avatar" accept="image/*" />
                <input type="button" id="onpress" onClick={clickAvatar}
                    value="change avatar" style={{ width: "140px", cursor: "pointer" }} />
            </div> : <div className="image-uploader">
                <FontAwesomeIcon icon={faSpinner} pulse size="lg" />
            </div>}
            <input type="text" className="name-set" value={name} title="name" placeholder="name" onChange={(e) => setName(e.currentTarget.value)} />
            <input type="email" className="email-set" value={email} title="email" placeholder="email" onChange={(e) => setEmail(e.currentTarget.value)} />
            <div className="actions-btn">
                {loading ? <div className='div-submit' style={{ width: "140px", backgroundColor: "transparent" }}>
                    <FontAwesomeIcon icon={faSpinner} pulse size="lg" style={{ marginBottom: "12px" }} />

                </div> : <input type="submit" value="save" className="submit-set" onClick={updateUser} />}

                <input type="submit" value="cancel" className="submit-set" style={{ backgroundColor: "gray" }} onClick={() => navigat(-1)} />

            </div>

        </div>
    );

}