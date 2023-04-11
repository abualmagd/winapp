import { useEffect, useState } from "react";
import "../styles/setting.css";
import { useNavigate } from "react-router-dom";



export default function AccountInfo() {

    const [image, setImage] = useState(null);
    const [name, setName] = useState('ismail');
    const [email, setEmail] = useState('ismail@gmail');
    const navigat = useNavigate();

    function clickAvatar() {
        console.log('pressed')
        return document.getElementById('screen').click();
    }
    function handleChangeScreen() {
        document.getElementById('screen').addEventListener("change", (e) => {
            const fileList = e.target.files;
            console.log(fileList);
            const urlImg = URL.createObjectURL(fileList[0]);
            console.log(urlImg)
            setImage(urlImg);
        })
    }

    useEffect(() => {
        handleChangeScreen();


    });

    return (
        <div className="account-edit">

            <img src={image} alt="avatar" className="avatar-set" />
            <div className="image-uploader">
                <input type="file" name="avat" id="screen" style={{ display: "none" }} accept="image/*" />
                <input type="button" id="onpress" onClick={clickAvatar}
                    value="change avatar" style={{ width: "140px", cursor: "pointer" }} />

            </div>
            <input type="text" className="name-set" value={name} onChange={(e) => setName(e.currentTarget.value)} />
            <input type="email" className="email-set" value={email} onChange={(e) => setEmail(e.currentTarget.value)} />
            <div className="actions-btn">
                <input type="submit" value="save" className="submit-set" />
                <input type="submit" value="cancel" className="submit-set" style={{ backgroundColor: "gray" }} onClick={() => navigat(-1)} />

            </div>

        </div>
    );

}