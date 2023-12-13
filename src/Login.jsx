import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import App from './App'



const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const Login = () => {
        if (email === "abc@gmail.com" && password === "12345") {
            // navigate("/home")
            localStorage.setItem("token", "token")
            window.location = "/"
        } else {
            alert("login failed")
        }
    }



    return (
        <>
            <form className='login-form'>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(value) => setEmail(value.target.value)}/>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(value) => setPassword(value.target.value)}/>
                </div>
                <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary" onClick={Login}>Submit</button>
            </form>
            {/* <input type="email" name="email" placeholder='email' onChange={(value) => setEmail(value.target.value)} />
            <input type="password" name="password" placeholder='password' onChange={(value) => setPassword(value.target.value)} />
            <button onClick={Login}>Login</button> */}

        </>
    )
}

export default Login