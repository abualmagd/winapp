import { useRef, useState } from 'react';
import '../styles/signUp.css';
import { ToastContainer } from '../components/toastContainer';
import { updatePassword } from '../services/authServices';
import { useNavigate } from 'react-router-dom';


export default function RecoveryPassword() {
    const passwordRef1 = useRef(null);
    const passwordRef = useRef(null);
    const [message, updateMessage] = useState();
    const [display, updateDisplay] = useState("none");
    const [error, updateError] = useState(true);
    const navy = useNavigate();

    const notify = (mesg, error) => {
        updateMessage(mesg);
        updateError(error);
        updateDisplay("flex");
        setTimeout(() => {
            updateDisplay("none");
            console.log('close')
        }, 3000);
        console.log('nottttttttttttt')
    }

    const onSubmit = async () => {
        if (passwordRef.current.value === passwordRef1.current.value) {

            const { data, error } = await updatePassword(passwordRef.current.value);
            if (error) {
                notify(error.message, true);
            } else {
                console.log(data);
                notify("password Updated", false);
                navy('/login', -1);
            }
        } else {
            notify("the passwords must be identical ", true)
        }
    }

    return (
        <div className="signPage">
            <ToastContainer display={display} error={error} message={message} />
            <div className="inputPart">
                <form onSubmit={onSubmit}>
                    <label >New Password</label>
                    <input type="password" ref={passwordRef1} required />
                    <label >Repeat Password</label>
                    <input type="password" ref={passwordRef} required />
                    <input type="submit" value="Update password" />
                </form>
            </div>
        </div>
    );
}