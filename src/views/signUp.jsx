import { Link, useNavigate } from 'react-router-dom';
import '../styles/signUp.css';
import { useState, useRef } from 'react';
import { register } from '../services/authServices';
import { ErrorToastContainer } from '../components/toastContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faSpinner } from '@fortawesome/free-solid-svg-icons';







function SignUp() {

    const emailRef = useRef();
    const passwordRef = useRef();
    const nameRef = useRef();
    const [message, updateMessage] = useState();
    const [display, updateDisplay] = useState("none");
    const [loading, updateLoading] = useState(false);
    const navTo = useNavigate();







    const notify = (mesg) => {
        updateMessage(mesg);
        updateDisplay("flex");
        setTimeout(() => {
            updateDisplay("none");
            console.log('close')
        }, 2500);
        console.log('nottttttttttttt')
    }


    const onSubmit = async (event) => {
        updateLoading(true);
        event.preventDefault();
        console.log('submit');
        try {

            const { data, error } = await register(emailRef.current.value, passwordRef.current.value, nameRef.current.value);
            console.log("daata : ", data.user.email)

            if (error) throw error;
            console.log('User registerd successfully:', data.user.email);


            if (data) {
                navTo('/sent', -1);  // TODO:to fix send email confirmation 

            }

        } catch (error) {
            console.log('An error occurred:', error.message);
            notify(error.message);
            updateLoading(false);
        }



    };



    return (
        <div className="signPage">

            <ErrorToastContainer display={display} message={message} />
            <div className="inputPart">
                <div className="clossy" onClick={() => navTo('/', -1)}>
                    <FontAwesomeIcon icon={faClose} />
                </div>
                <div className='already'>
                    <p className='alreadyP'>Already have account ?</p>
                    <Link to={"/login"} className='signIn' >Sign in</Link>
                </div>
                <h3> Welcome to Solutrend!</h3>
                <p className='registerP'>Register your account</p>

                <form onSubmit={onSubmit}>
                    <label >Name</label>
                    <input type="text" placeholder='my name' ref={nameRef} required />
                    <label >Email</label>
                    <input type="email" placeholder='example@gmail.com' ref={emailRef} required />
                    <label >Password</label>
                    <input type="password" placeholder='6 digits or more' ref={passwordRef} required />
                    <p className='terms'>By signing up, you agree to the
                        <Link to={'https://www.solutrend.com/terms.html'} target='_blank'>  Terms of Service </Link >
                        and <Link to={'https://www.solutrend.com/privacy.html'} target='_blank'> Privacy Policy </Link>
                        , including <Link to={'https://www.solutrend.com/cookie.html'} target='_blank'> Cookie Use. </Link></p>
                    {loading ? <div className='div-submit'>
                        <FontAwesomeIcon icon={faSpinner} pulse size="lg" />
                    </div> : <input type="submit" value="Register" />}
                </form>
            </div>
        </div >
    );

}

export default SignUp;

