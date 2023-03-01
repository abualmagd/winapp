import '../styles/signUp.css';



function SignUp() {

    return (
        <div className="signPage">
            <div className="inputPart">
                <div className='already'>
                    <p className='alreadyP'>Already have account ?</p>
                    <div className='signIn' >Sign in</div>
                </div>
                <h3> Welcome to Winapp!</h3>
                <p className='registerP'>Register your account</p>

                <form onSubmit={'add function on submit'}></form>
                <label >Name</label>
                <input type="text" placeholder='your name' />
                <label >Email</label>
                <input type="email" placeholder='example@gmail.com' />
                <label >Password</label>
                <input type="password" placeholder='8 digits' />
                <input type="submit" value="Register" />
                <p className="create">or create account with <span className='googleSpan'> Google</span> </p>
            </div>
        </div >
    );
}


export default SignUp;