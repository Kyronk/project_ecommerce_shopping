import React from "react";
import "./Login.scss";
import { useRef } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
    const navigation = useNavigate();
    const location = useLocation();

    const username = useRef();
    const password = useRef();

    const onLogin = () => {
        console.log(username);
        if (username.current === "admin" && password.current === "admin") {
            localStorage.setItem("access_token", "access_token");
            return navigation("login", {
                replace: true,
                state: { from: location },
            });
        }
    }; 
    return (
        <>
            <div className="Login-admin_page">
                <h1>Manager Login</h1>
                {/* <label htmlFor="">Username</label> */}
                <p>User Name</p>
                <input
                    placeholder="Username"
                    type="text"
                    name=""
                    id=""
                    ref={username}
                    onChange={(e) => (username.current = e.target.value)}
                />

                
                {/* <label htmlFor="">Password</label> */}
                <p>Pass word</p>
                <input
                    placeholder="Password"
                    type="password"
                    name=""
                    id=""
                    ref={password}
                    onChange={(e) => (password.current = e.target.value)}
                />

                <button type="submit" onClick={onLogin}>
                    Login
                </button>
            </div>
        </>
    );
};

export default Login;
