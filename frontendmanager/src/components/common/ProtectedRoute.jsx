import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

export const ProtectedRoute = () => {
    const location = useLocation();
    //check login
    const isLoggedIn = Boolean(localStorage.getItem("access_token"));
    if (!isLoggedIn)
        return (
            <Navigate
                to="/login"
                replace
                state={{ from: location }}
            />
        );

    return (
        <Sidebar>
            <Outlet />
        </Sidebar>
    );
};
