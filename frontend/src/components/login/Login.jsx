import React, { useState } from "react";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {loginUser} from "../../redux/apiRequest";
import avatar from "../../assets/img/avatar.svg";

// rafce enter...
const LoginUser = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        const newUser = {
            username,
            password
        };
        loginUser(newUser, dispatch, navigate);
    }
    return (
        <>
            <form onSubmit={ handleLogin }>
                <img src={avatar} alt="" />
                <h2 className="title">Welcome</h2>
                <div className="input-div one">
                    <div className="i">
                        <i className="fas fa-user"></i>
                    </div>
                    <div className="div">
                        <input
                            type="text"
                            className="input"
                            placeholder="Username"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                </div>
                <div className="input-div pass">
                    <div className="i">
                        <i className="fas fa-lock"></i>
                    </div>
                    <div className="div">
                        <input
                            type="password"
                            className="input"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>

                <input type="submit" className="btn" value="Login" />
            </form>
        </>
    );
};

export default LoginUser;
