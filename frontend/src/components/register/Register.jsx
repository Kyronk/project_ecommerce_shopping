import React, { useState } from "react";
import { Link } from "react-router-dom";

import avatar from "../../assets/img/avatar.svg";

const RegisterUser = () => {
    
    return (
        <>
            <form>
                <img src={avatar} alt="" />
                <h2 className="title">Register</h2>
                <div className="input-div one">
                    <div className="i">
                        <i className="fas fa-user"></i>
                    </div>
                    <div className="div">
                        <input
                            type="text"
                            className="input"
                            placeholder="Username"
                        />
                    </div>
                </div>
                <div className="input-div pass">
                    <div className="i">
                        <i className="fas fa-envelope"></i>
                    </div>
                    <div className="div">
                        <input
                            type="email"
                            className="input"
                            placeholder="Email"
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
                        />
                    </div>
                </div>
                <input type="submit" className="btn" value="Register" />
            </form>
        </>
    );
};

export default RegisterUser;
