import React, { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";


const RegisterUser = () => {
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState(" ");
    const [firstName, setFirstName] = useState(" ");
    const [lastName, setLastName] = useState(" ");
    const [address, setAddress] = useState(" ");


    const handleRegister = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:5012/api/user/register", {
            email,
            username,
            password,
            firstName,
            lastName,
            address
        })
    }


    return (
        <>
            <form 
                className="form-login" 
                onSubmit={handleRegister}
                >
                <h1 className="title-login">Register</h1>

                <div className="form-login_input">
                    <input
                        type="text"
                        required
                        className="form-login_input-email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <span className="form-login_span"></span>
                    <label 
                        className="form-login_label"
                        >Email</label>
                </div>

                <div className="form-login_input">
                    <input
                        type="text"
                        required
                        className="form-login_input-user"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        // onChange={(e) => setUsername(e.target.value)}
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
                        value={password}
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
                    value="Register" />
            </form>
        </>
    );
};

export default RegisterUser;
