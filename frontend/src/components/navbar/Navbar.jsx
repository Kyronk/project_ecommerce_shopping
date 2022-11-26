import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./Navbar.scss";

const Navbar = () => {
    return (
        <>
            <div className="body">
                <header>
                    <NavLink href="/home" className="logo">
                        <i className="ri-home-heart-fill"></i>
                        <span>Logo</span>
                    </NavLink>


                    {/* <NavLink href="/home">
                        <i className="ri-home-heart-fill"></i>
                        <span>Logo</span>
                    </NavLink>

                    <i className="ri-home-heart-fill"></i> */}



                    <ul className="navbar">
                        <li>
                            <NavLink className="active" to="/home">
                                <p>Home</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/product-list">
                                <p>Products</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Us">
                                <p>Us</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">
                                <p>About</p>
                            </NavLink>
                        </li>
                    </ul>

                    <div className="main">
                        <NavLink >
                            <div className="user">
                                <i className="ri-user-fill"></i>
                            </div>
                        </NavLink>

                        <NavLink to="/cart">
                            <div className="user">
                                <i class="fa-solid fa-cart-shopping"></i>
                            </div>
                        </NavLink>
                        
                        <div className="bx bx-menu" id="menu-icon"></div>
                    </div>
                </header>
            </div>
        </>
    );
};

export default Navbar;
