import React, { useReducer } from "react";
import {Link} from "react-router-dom";
import { useContext, useState } from 'react';
import { AuthContext } from '../../../Context/AuthContext';



// rafce enter... 
const LoginUser = () => {
    const {loginUser} = useReducer(AuthContext)

    const [loginForm, setLoginForm] = useState({
        username: '',
        password: ''

    })


    const {username, password} = loginForm;


    const onChangeLoginForm = (event) => {
        setLoginForm({
            ...loginForm,
            [event.target.name]: event.target.value
        })
        // console.log(username, password)
    }

    const login = async event => {
        event.preventDefault();
        
    }

    return (
        <>
            <div>Hello from component Login </div>
            <form onSubmit={login}>
            <input
                type="text"
                className='input-login' 
                placeholder="Username"
                value={username}
                name='username'
                onChange={onChangeLoginForm}
                />
            <br />
            <input
                type='password' 
                className="input-login"
                placeholder="Password"
                name='password'
                value={password}
                onChange={onChangeLoginForm}

            />  
            <br />
            <button type='submit'>Login</button>
            </form>
            
            <div>
                <p>
                    bạn chưa có tài khoản ?
                </p>
                <Link to="/register">
                <button> register</button>
                </Link>
                
            </div>
        </>
    )
}

export default LoginUser;