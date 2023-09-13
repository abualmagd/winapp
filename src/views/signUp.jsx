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
    const rePasswordRef=useRef();
    const nameRef = useRef();
    const [message, updateMessage] = useState();
    const [display, updateDisplay] = useState("none");
    const [loading, updateLoading] = useState(false);
    const [misMatch,setMismatch]= useState(false);
    const navTo = useNavigate();




    const onChange=()=>{

        if(rePasswordRef.current.value!==passwordRef.current.value){
           
            setMismatch(true);
        }else{
            setMismatch(false); 
        }
       

    }


    const notify = (mesg) => {
        updateMessage(mesg);
        updateDisplay("flex");
        setTimeout(() => {
            updateDisplay("none");
        }, 2500);
    }


    const onSubmit = async (event) => {
        
             event.preventDefault();
        if(rePasswordRef.current.value!==passwordRef.current.value){
          notify('repeated password deosnot match your password');  
        }else{

            console.log('submit');
            updateLoading(true);        
        try {

            const { data, error } = await register(emailRef.current.value, passwordRef.current.value, nameRef.current.value);

            if (error) throw error;


            if (data) {
                navTo('/sent', -1);  // TODO:to fix send email confirmation 

            }

        } catch (error) {
            notify(error.message);
            updateLoading(false);
        }


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
                    <label >Retype password</label>
                    <input type="password" placeholder='retype your password please' ref={rePasswordRef} onChange={onChange} required />
                   {misMatch&& <p className="mismatch" >repeated password must match the  password</p>}
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

