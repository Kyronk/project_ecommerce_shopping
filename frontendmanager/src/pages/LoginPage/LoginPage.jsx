import React from "react";
import Login from "../../components/Login/Login";
import { Navigate, useLocation } from "react-router-dom";

const LoginPage = () => {
    const location = useLocation();
    const isLoggedIn = Boolean(localStorage.getItem("access_token"));
    if (isLoggedIn)
        return <Navigate to="/" replace state={{ from: location }} />;
    return (
        <div>
            <div>
                <Login />
            </div>
        </div>
    );
};

export default LoginPage;
