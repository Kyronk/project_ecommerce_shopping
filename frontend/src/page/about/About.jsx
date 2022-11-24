import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

const About = () => {
    return (
        <div className="about-page">
            <Navbar />

            <div className="about-page_content">
                404
                <NavLink to="/home">
                    <button>home</button>
                </NavLink>
            </div>
            
        </div>
    );
};

export default About;
