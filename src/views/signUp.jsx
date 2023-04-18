import { Link, useNavigate } from 'react-router-dom';
import '../styles/signUp.css';
import { useState, useRef } from 'react';
import { register } from '../services/authServices';
import { ErrorToastContainer } from '../components/toastContainer';







function SignUp() {

    const emailRef = useRef();
    const passwordRef = useRef();
    const [message, updateMessage] = useState();
    const [display, updateDisplay] = useState("none");
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
        console.log("email", emailRef.current.value)
        console.log("pass", passwordRef.current.value)
        event.preventDefault();
        console.log('submit');
        try {
            const { data, error } = await register(emailRef.current.value, passwordRef.current.value);
            console.log("daata : ", data)

            if (error) throw error;
            console.log('User registerd successfully:', data.user);
            const maxAge = 5 * 60;
            document.cookie = `ema=${emailRef.current.value}; path=/; max-age=${maxAge}; SameSite=Lax; secure`
            document.cookie = `pss=${passwordRef.current.value}; path=/; max-age=${maxAge}; SameSite=Lax; secure`

            navTo('/sent', -1)
        } catch (error) {
            console.log('An error occurred:', error.message);
            notify(error.message);
        }



    };



    return (
        <div className="signPage">
            <ErrorToastContainer display={display} message={message} />
            <div className="inputPart">
                <div className='already'>
                    <p className='alreadyP'>Already have account ?</p>
                    <Link to={"/login"} className='signIn' >Sign in</Link>
                </div>
                <h3> Welcome to Winapp!</h3>
                <p className='registerP'>Register your account</p>

                <form onSubmit={onSubmit}>
                    <label >Email</label>
                    <input type="email" placeholder='example@gmail.com' ref={emailRef} required />
                    <label >Password</label>
                    <input type="password" placeholder='8 digits' ref={passwordRef} required />
                    <input type="submit" value="Register" />
                </form>

                <p className="create">or create account with <span className='googleSpan'> Google</span> </p>
            </div>
        </div >
    );

}

export default SignUp;

