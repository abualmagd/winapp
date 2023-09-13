import { Link, useNavigate } from 'react-router-dom';
import '../styles/signUp.css';
import { login, restorePassword, signInWithGitHub, signInWithGoogle } from '../services/authServices';
import { useRef } from 'react';
import useAuth from '../myHooks/useAuth';
import { useState } from 'react';
import { ToastContainer } from '../components/toastContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { getCurrentUser } from '../services/userServices';
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';





function Login() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const { onLogin } = useAuth();
    const [message, updateMessage] = useState();
    const [display, updateDisplay] = useState("none");
    const [error, updateError] = useState(true);
    const [loading, updateLoading] = useState(false);
    const navigat = useNavigate();

    const notify = (mesg, error) => {
        updateMessage(mesg);
        updateError(error);
        updateDisplay("flex");
        setTimeout(() => {
            updateDisplay("none");
            console.log('close')
        }, 3000);
    }

    const logByGithup = async () => {
        const { data, error } = await signInWithGitHub();
        if (data) {
            const current = await getCurrentUser();
            onLogin(current.data.user.id);
        } else {
            notify(error, true);
        }
    }

    const logByGoogle = async () => {
        const { data, error } = await signInWithGoogle();
        if (data) {
            const current = await getCurrentUser();
            onLogin(current.data.user.id);
        } else {
            notify(error, true);
        }
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
                notify(data.name + "  recovery email sent to your email", false)
            }
        } else {
            notify("enter your email then press forget password ", true);
        }

    }

    const onSubmit = async (event) => {
        updateLoading(true);
        event.preventDefault();
        const { data, error } = await login(emailRef.current.value, passwordRef.current.value);

        if (error) {
            notify(error.message, true)
            updateLoading(false);

        } else {

            onLogin(data.user.id)
        }

    }

    return (
        <div className="signPage">
            <ToastContainer display={display} message={message} error={error} />
            <div className="inputPart">
                <div className="clossy" onClick={() => navigat('/', -1)}>
                    <FontAwesomeIcon icon={faClose} />
                </div>
                <div className='already'>
                    <p className='alreadyP'>Donn't have account ?</p>
                    <Link to={"/signup"} className='signIn' >Sign Up free</Link>
                </div>
                <h3> Login with ;</h3>
                <div style={{ height: "40px" }}></div>
                <div className="google-sign" onClick={() => logByGoogle()}>
                    <FontAwesomeIcon icon={faGoogle} /> <div className="google-s">continue with google </div>
                </div>
                <div className="google-sign" onClick={() => logByGithup()}>
                    <FontAwesomeIcon icon={faGithub} /> <div className="google-s">continue with github </div>
                </div>
                <div className="or">or login with</div>
                <form onSubmit={onSubmit}>
                    <label >Email</label>
                    <input type="email" ref={emailRef} required />
                    <label >Password</label>
                    <input type="password" ref={passwordRef} required />
                    <div className="forget-pass" >
                        <div onClick={restorePass} className='forget-btn'>
                            forget password
                        </div>

                    </div>

                    {loading ? <div className='div-submit'>
                        <FontAwesomeIcon icon={faSpinner} pulse size="lg" />
                    </div> : <input type="submit" value="Login" />}
                    <p className='terms'>By login, you agree to the
                        <Link to={'https://www.solutrend.com/terms.html'} target='_blank'>  Terms of Service </Link >
                        and <Link to={'https://www.solutrend.com/privacy.html'} target='_blank'> Privacy Policy </Link>
                        , including <Link to={'https://www.solutrend.com/cookie.html'} target='_blank'> Cookie Use. </Link></p>
                </form>



            </div>

        </div >
    );
}


export default Login;