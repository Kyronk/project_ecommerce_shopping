import React, { useState } from "react";
import { Link } from "react-router-dom";


const RegisterUser = () => {
    
    return (
        <>
            <form 
                className="form-login" 
                // onSubmit={handleLogin}
                >
                <h1 className="title-login">Register</h1>

                <div className="form-login_input">
                    <input
                        type="text"
                        required
                        className="form-login_input-email"
                        // onChange={(e) => setUsername(e.target.value)}
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
                        // onChange={(e) => setPassword(e.target.value)}
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
