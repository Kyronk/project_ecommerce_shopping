import React, { useState } from "react";
import "./loginPage.scss";
import LoginUser from "../../components/login/Login";
import RegisterUser from "../../components/register/Register";

const LoginPage = () => {
    const [userLogin, setUserLogin] = useState(true);

    const handleClick = () => {
        setUserLogin(!userLogin);
    };
    return (
        <>
            <div className="login-page_container">
                <div className="login-page_content">
                    {userLogin ? <LoginUser /> : <RegisterUser />}
                    <div
                        className="login-page_signup-link" 
                        onClick={handleClick}>
                        {userLogin
                            ? "You don't have a account? Register now!"
                            : "you have a account? login now!"}
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginPage;
