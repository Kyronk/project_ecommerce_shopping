import React, { useState } from "react";
import "./loginPage.scss";
import wave from "../../assets/img/wave.png";
import Bg from "../../assets/img/bg.svg";
import LoginUser from "../../components/login/Login";
import RegisterUser from "../../components/register/Register";

const LoginPage = () => {
    const [userLogin, setUserLogin] = useState(true);

    const handleClick = () => {
        setUserLogin(!userLogin);
    };
    return (
        <>
            <img src={wave} alt="" className="wave" />
            <div className="login-container">
                <div className="login-img-background">
                    <img src={Bg} alt="" className="bg" />
                </div>

                <div className="login-content">
                    {userLogin ? <LoginUser /> : <RegisterUser />}
                    <div className="a" onClick={handleClick}>
                        Forgot Password?
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginPage;
