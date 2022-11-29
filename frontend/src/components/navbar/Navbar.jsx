import React from "react";
import { Link, NavLink } from "react-router-dom";

// redux cart quantity
import { useSelector } from "react-redux";

import "./Navbar.scss";

const Navbar = () => {

    const quantity = useSelector((state) => state.cart.quantity);

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
                            <NavLink  to="/home">
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
                        <div className="user">
                            <NavLink to="/user-profile">
                                <i className="ri-user-fill"></i>
                            </NavLink>
                        </div>

                        <div className="user">
                            <NavLink to="/cart">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </NavLink>
                        </div>
                        
                        <div className="bx bx-menu" id="menu-icon"></div>
                    </div>
                </header>
            </div>
        </>
    );
};

export default Navbar;
