import React, { useRef, useState } from 'react';
import { StoreContext } from '../../context/Context';
import { Link } from 'react-router-dom';

type AuthResponseType = {
    email: string;
    error: { code: number, message: string, errors: { message: string, reason: string, domain: string }[] };
    expiresIn: string;
    idToken: string;
    kind: string;
    localId: string;
    refreshToken: string;
}

function Login() {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const ctx = React.useContext(StoreContext);
    const [isLogin, setIsLogin] = useState<boolean>(true);

    function handleSubmit(event: React.FormEvent) {
        const signUpUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCMv7M8Uu06DQHkUvAMObodGYMcvdXETvo';
        const signInUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCMv7M8Uu06DQHkUvAMObodGYMcvdXETvo';
        let currentUrl;

        event.preventDefault();

        if (typeof emailRef.current?.value === 'undefined' || typeof passwordRef.current?.value === 'undefined' || emailRef.current.value === '' || passwordRef.current.value === '') {
            return;
        }

        if (isLogin) {
            currentUrl = signInUrl;
        } else {
            currentUrl = signUpUrl;
        }

        fetch(currentUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: emailRef.current.value,
                password: passwordRef.current.value,
                returnSecureToken: true
            })
        }).then(res => {
            return res.json();
        }).then((data: AuthResponseType) => {
            if (data.error) {
                return alert(data.error.message);
            }
            ctx.login(data.idToken)

        }).catch(err => {
            console.log(err.message)
            alert(err.message ? err.message : 'Something went wrong, please try later');
        })
    }

    return (
        <div className="loginRegisterDiv">
            <img src="https://img.freepik.com/free-vector/blue-curve-background_53876-113112.jpg?size=626&ext=jpg&ga=GA1.1.324722306.1679070681&semt=ais" alt="" />

            <div className="mainLoginRegister">
                <div className="leftLoginRegisterDiv">
                    <div className="welcomeDiv">
                        {isLogin ?
                            <>
                                <h1>Welcome Back!</h1>
                                <p>Nice to see you again! Lets Sign In and continue your shopping, amazing products are waiting for you!</p>
                            </>
                            :
                            <>
                                <h1>Lets get started</h1>
                                <p>Welcome new user! It is great to have you onboard. Sign Up and start your shopping.</p>
                            </>
                        }
                        <Link to={'/'}><button className="detailBtn">Explore</button></Link>
                    </div>
                    <img src="https://img.freepik.com/free-vector/futuristic-technology-background_23-2148460426.jpg?size=626&ext=jpg&ga=GA1.1.324722306.1679070681&semt=ais" alt="background-img" />
                </div>
                <div className="rightLoginRegisterDiv">
                    <form onSubmit={handleSubmit} id='form-control' action="">
                        <h1>{isLogin ? 'Login' : 'Register'}</h1>
                        <input ref={emailRef} type="email" placeholder={`${isLogin ? 'Enter your' : 'Choose an'} email`} />
                        <input ref={passwordRef} type="password" placeholder={`${isLogin ? 'Enter your' : 'Choose an'} password`} />
                        <button className="loginBtn">{isLogin ? 'Login' : 'Register'}</button>
                        <hr />
                    </form>
                    <button onClick={() => setIsLogin(p => !p)} className='switchBtn'>Switch to {isLogin ? 'Register' : 'Login'}</button>
                </div>
            </div>
        </div>
    )
}

export default Login;