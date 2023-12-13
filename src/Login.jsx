import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';



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
            <input type="email" name="email" placeholder='email' onChange={(value) => setEmail(value.target.value)} />
            <input type="password" name="password" placeholder='password' onChange={(value) => setPassword(value.target.value)} />
            <button onClick={Login}>Login</button>

        </>
    )
}

export default Login