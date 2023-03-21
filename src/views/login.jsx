import { Link } from 'react-router-dom';
import '../styles/signUp.css';



function Login() {


    function onSubmit() {
        console.log('submit');
    }

    return (
        <div className="signPage">
            <div className="inputPart">
                <div className='already'>
                    <p className='alreadyP'>Donn't have account ?</p>
                    <Link to={"/signup"} className='signIn' >Sign Up free</Link>
                </div>
                <h3> Welcome Back ;</h3>
                <div style={{ height: "40px" }}></div>

                <form onSubmit={onSubmit}>

                    <label >Email</label>
                    <input type="email" required />
                    <label >Password</label>
                    <input type="password" required />
                    <input type="submit" value="Login" />
                </form>

                <p className="create">or create account with <span className='googleSpan'> Google</span> </p>
            </div>
        </div >
    );
}


export default Login;