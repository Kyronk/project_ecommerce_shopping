import React from "react";

import { NavLink } from "react-router-dom";
import svg_404 from "../../assets/svg/undraw_page_404.svg";
import "./Notfound.scss";

const Notfound = () => {
    return (
        <>
            <div className="not-found_container">
                <img src={svg_404} alt="" />
                <h1>Error</h1>
                <NavLink to="/home">
                    <button
                        className="not-found_btn" >Go home !</button>
                </NavLink>
            </div>
        </>
    );
};

export default Notfound;
