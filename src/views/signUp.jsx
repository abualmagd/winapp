import '../styles/signUp.css';



function SignUp() {


    function onSubmit() {
        console.log('submit');
    }

    return (
        <div className="signPage">
            <div className="inputPart">
                <div className='already'>
                    <p className='alreadyP'>Already have account ?</p>
                    <div className='signIn' >Sign in</div>
                </div>
                <h3> Welcome to Winapp!</h3>
                <p className='registerP'>Register your account</p>

                <form onSubmit={onSubmit}>
                    <label >Name</label>
                    <input type="text" placeholder='your name' required />
                    <label >Email</label>
                    <input type="email" placeholder='example@gmail.com' required />
                    <label >Password</label>
                    <input type="password" placeholder='8 digits' required />
                    <input type="submit" value="Register" />
                </form>

                <p className="create">or create account with <span className='googleSpan'> Google</span> </p>
            </div>
        </div >
    );
}


export default SignUp;