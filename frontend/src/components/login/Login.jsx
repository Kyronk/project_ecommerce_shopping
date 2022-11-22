import React, { useState } from "react";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/apiRequest";
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
            password,
        };
        loginUser(newUser, dispatch, navigate);
    };
    return (
        <>
            <form 
                className="form-login" 
                onSubmit={handleLogin}
                >
                <h1 className="title-login">Welcome</h1>

                <div className="form-login_input">
                    <input
                        type="text"
                        required
                        className="form-login_input-user"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <span className="form-login_span"></span>
                    <label 
                        className="form-login_label"
                        >User Name</label>
                </div>

                <div className="form-login_input">
                    <input
                        type="password"
                        required
                        className="input"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className="form-login_span"></span>
                    <label
                        className="form-login_label"
                        >Password</label>
                </div>

                <input 
                    type="submit" 
                    className="form-login_btn-submit" 
                    value="Login" />
            </form>
        </>
    );
};

export default LoginUser;
