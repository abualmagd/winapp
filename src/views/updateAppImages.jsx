import { useCallback, useEffect, useState } from "react";
import { ToastContainer } from "../components/toastContainer";
import "../styles/addAppImages.css";
import { createImageUrl, uploadAppLogo, uploadAppShot } from "../services/filesServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { getAppImages, updateAppLogo, updateAppShot } from "../services/appServices";
import { useNavigate, useParams } from "react-router-dom";
import StepsIndicator from "./stepsIndicator";
import NodeCache from "node-cache";


export default function AppImageUpdator() {
    const myCache = new NodeCache({ stdTTL: 60 * 60 });
    const [logoFile, setLogoFile] = useState(null);
    const [shotFile, setShotFile] = useState(null);
    const [message, updateMessage] = useState();
    const [display, updateDisplay] = useState("none");
    const [errory, updateErrory] = useState(true);
    const [screenImage, setScreen] = useState(null);
    const [logoImage, setLogo] = useState(null);
    const [loading, updateLoading] = useState(false);
    const navigator = useNavigate();

    const { id } = useParams();



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

    const loadAppImages = async () => {
        const value = myCache.get('solutrend/' + id);
        if (value) {
            return value;
        } else {
            const { error, data } = await getAppImages(id);
            if (error) {
                notify(error.message, true);
            } else {
                setLogo(data[0]['logo_url']);
                setScreen(data[0]['shot_url']);
            }
        }
    }

    function clickScreenShot() {
        console.log('pressed')
        return document.getElementById('screen').click();
    }

    function clickLogo() {
        console.log('pressed2')
        return document.getElementById('logoImage').click();

    }

    const postShot = async () => {
        if (shotFile && logoFile) {
            const { data, error } = await uploadAppShot(shotFile);
            const imageData = data;
            if (error) {
                console.log('here in post shot');
                throw Error(error.message);
            } else {
                const { data } = createImageUrl('screenshots', imageData.path);

                updateShot(data.publicUrl);
                return data.publicUrl;
            }
        } else {
            throw Error('please choose your app  images frist ');

        }
    }

    const postLogo = async () => {

        const { data, error } = await uploadAppLogo(logoFile);
        const imageData = data;
        if (error) {
            console.log('here in post logo');
            throw Error(error.message);
        } else {
            const { data } = createImageUrl('logos', imageData.path);

            console.log('logo url : ', data.publicUrl);
            updateLogo(data.publicUrl);
            return data.publicUrl;
        }
    }

    const preventReload = (event) => {
        event.preventDefault();
    }

    const updateLogo = async (logoU) => {
        try {
            await updateAppLogo(logoU, id);
        } catch (error) {
            throw error;
        }

    }

    const updateShot = async (shotU) => {
        try {
            await updateAppShot(shotU, id);
        } catch (error) {
            throw error;
        }

    }


    const handleChangeScreen = useCallback(() => {
        document.getElementById('screen').addEventListener("change", (e) => {
            const fileList = e.target.files;
            console.log(fileList);
            const urlImg = URL.createObjectURL(fileList[0]);
            setShotFile(fileList[0]);
            console.log(urlImg)
            setScreen(urlImg);
        })
    }, []);


    const handleChange = useCallback(() => {
        document.getElementById('logoImage').addEventListener("change", (e) => {
            const fileList = e.target.files;
            console.log(fileList);
            const urlImg = URL.createObjectURL(fileList[0]);
            setLogoFile(fileList[0]);
            console.log(urlImg)
            setLogo(urlImg);
        })
    }, []);

    useEffect(() => {
        handleChange();
        handleChangeScreen();
        loadAppImages();
    }, [handleChange, handleChangeScreen, loadAppImages])


    return (
        <div className="addContainer">
            <StepsIndicator value={"95%"} />

            <div className="image-uploader-container">
                <h3 className="titleUploader">
                    Upload App images
                </h3>

                <ToastContainer display={display} message={message} error={errory} />
                {logoImage != null && <img src={logoImage} alt="error" className="logo-image-shower" />}
                <div className="image-uploader">
                    <input type="file" name="avat" id="logoImage" onChange={(e) => handleChange(e)} style={{ display: "none" }} accept="image/*" />

                    <input type="button" id="onpress" onClick={clickLogo}
                        value="choose logo image" style={{ width: "140px", cursor: "pointer" }} />
                </div>

                {screenImage != null && <img src={screenImage} alt="error" className="screen-image-shower" />}
                <div className="image-uploader">
                    <input type="file" name="avat" id="screen" style={{ display: "none" }} accept="image/*" />
                    <input type="button" id="onpress" onClick={clickScreenShot}
                        value="choose screenshot" style={{ width: "140px", cursor: "pointer" }} />

                </div>

                {loading ? <div className="publish-but">
                    <FontAwesomeIcon icon={faSpinner} spin />
                </div> : <div className="publish-but" value={'upload'} style={{ backgroundColor: " var(--btnbgColor)" }} onClick={async (event) => {
                    preventReload(event);
                    updateLoading(true);
                    try {
                        await postShot();
                        await postLogo();

                        updateLoading(false);
                        navigator('/dashboard', +1);
                    } catch (error) {
                        notify(error.message, true);
                        updateLoading(false);

                    }
                }} >Update</div>}

            </div>
        </div>
    );
}