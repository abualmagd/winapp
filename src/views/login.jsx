import { Link } from 'react-router-dom';
import '../styles/signUp.css';
import { login } from '../services/authServices';
import { useRef } from 'react';
import useAuth from '../myHooks/useAuth';
import { useState } from 'react';
import { ErrorToastContainer } from '../components/toastContainer';




function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { onLogin } = useAuth();
    const [message, updateMessage] = useState();
    const [display, updateDisplay] = useState("none");

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
        const { data, error } = await login(emailRef.current.value, passwordRef.current.value);

        if (error) {
            notify(error.message)
        } else {
            console.log("user : ", data.user);
            onLogin(data.user)
        }

    }

    return (
        <div className="signPage">
            <ErrorToastContainer display={display} message={message} />
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
                    <input type="submit" value="Login" />
                </form>


                <p className="create">or create account with <span className='googleSpan'> Google</span> </p>

            </div>

        </div >
    );
}


export default Login;