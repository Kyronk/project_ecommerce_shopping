import React from "react";
import { NavLink } from "react-router-dom";
import svg_404 from "../../assets/init/2456051.jpg";

import Notfound from "../../components/404/Notfound";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
const Page404 = () => {
    return (
        <>
            <Navbar />
            <Notfound />
            <Footer />
        </>
        )
};

export default Page404;
