import React, {useState} from "react";
import './Login.css'
import {Link, useNavigate} from 'react-router-dom';
import {auth} from './firebase';

function Login(){
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (event) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then((auth) => {
            console.log(auth);
            if(auth) {
                navigate('/')
            }
        })
        .catch(err => alert(err.message))
    }

    const register = (event) => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            // successfully created a new user
            console.log(auth);
            if(auth) {
                navigate('/');
            }
        })
        .catch(err => alert(err.message))
    }

    return(
        <div className="login">
            <Link to='/'>
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt=""/>
            </Link>
            <div className="login__container">
                <h1>Sign-In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={event => setEmail(event.target.value)}/>
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={event => setPassword(event.target.value)}/>
                    <button className="login__signInButton" type="submit" onClick={signIn}>Sign In</button>
                </form>
                <p>
                    By continuing, you agree to Amazon's CLONE Conditions of Use and Privacy Notice.
                </p>
                <button className="login__registerButton" onClick={register}>Create your Amazon account</button>
            </div>
        </div>
    )
}

export default Login;