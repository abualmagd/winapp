import { Link } from 'react-router-dom';
import '../styles/signUp.css';
import { login, restorePassword } from '../services/authServices';
import { useRef } from 'react';
import useAuth from '../myHooks/useAuth';
import { useState } from 'react';
import { ToastContainer } from '../components/toastContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';




function Login() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const { onLogin } = useAuth();
    const [message, updateMessage] = useState();
    const [display, updateDisplay] = useState("none");
    const [error, updateError] = useState(true);
    const [loading, updateLoading] = useState(false);

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


    const restorePass = async () => {
        console.log('email', emailRef.current.value)
        const em = emailRef.current.value.trim();
        if (em.length > 0) {
            updateLoading(true)
            const { data, error } = await restorePassword(em);
            if (error) {
                notify(error.message, true);
                updateLoading(false)
            } else {
                notify(data.name + "recovery email sent to your email", false)
            }
        } else {
            notify("enter your email then press forget password ", true);
        }

    }


    const onSubmit = async (event) => {
        updateLoading(true);
        event.preventDefault();
        console.log('submit');
        const { data, error } = await login(emailRef.current.value, passwordRef.current.value);

        if (error) {
            notify(error.message, true)
            updateLoading(false);
        } else {
            console.log("user : ", data.user);
            onLogin(data.user.id)
        }

    }

    return (
        <div className="signPage">
            <ToastContainer display={display} message={message} error={error} />
            <div className="inputPart">
                <div className='already'>
                    <p className='alreadyP'>Donn't have account ?</p>
                    <Link to={"/signup"} className='signIn' >Sign Up free</Link>
                </div>
                <h3> Welcome Back ;</h3>
                <div style={{ height: "40px" }}></div>

                <form onSubmit={onSubmit}>
                    <label >Email</label>
                    <input type="email" ref={emailRef} required />
                    <label >Password</label>
                    <input type="password" ref={passwordRef} required />
                    <div className="forget-pass" onClick={restorePass}>
                        forget password
                    </div>
                    {loading ? <div className='div-submit'>
                        <FontAwesomeIcon icon={faSpinner} pulse size="lg" />
                    </div> : <input type="submit" value="Login" />}
                </form>
                <p className="create">or create account with <span className='googleSpan'> Google</span> </p>

            </div>

        </div >
    );
}


export default Login;