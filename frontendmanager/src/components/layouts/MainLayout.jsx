import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import AboutPage from "../../pages/AboutPage/AboutPage";
import AddProductPage from "../../pages/AddProduct/AddProductPage";
import HomePage from "../../pages/Home/HomePage";
import ProductPage from "../../pages/Product/ProductPage";
import ProductListPage from "../../pages/ProductList/ProductListPage";
import UserListPage from "../../pages/UserListPage/UserListPage";
import Sidebar from "../Sidebar/Sidebar";

const MainLayout = () => {
    return (
        <Sidebar>
            <Outlet/>
        </Sidebar>
    );
};

export default MainLayout;
