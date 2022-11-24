import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="navbar">
                        <div className="search">
                            <input type="text" name="" id="" />
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <div className="logo">
                            <h1>Logo</h1>
                        </div>
                        <nav>
                            <ul id="MenuItems">
                                <li>
                                <NavLink 
                                    activeClassName="active" 
                                    to="/home" 
                                    // exact={true}
                                    > <p>Home</p> </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        //activeClassName="active"
                                        to="/product-list"

                                    >
                                        <p>
                                            Products                   
                                            </p>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        //activeClassName="active"
                                        to="/product-list"

                                    >
                                        <p>About</p>
                                    </NavLink>
                                </li>
                                <li>
                                <NavLink
                                        //activeClassName="active"
                                        to="/product-list"

                                    >
                                        <p>Context</p>
                                    </NavLink>
                                </li>

                            </ul>
                        </nav>
                        <i className="fa-regular fa-user"></i>
                        <NavLink 
                            activeClassName="active" 
                            to="/cart" 
                            
                        >
                            <i className="fa-solid fa-cart-shopping"></i>
                        </NavLink>
                        {/* <img 
                    src="images/menu.png" 
                    alt="" 
                    className="menu-icon"
                    onClick="menutoggle()"
                    /> */}
                        {/* <img src="images/cart.png" alt="" width="30px" height="30px">  */}
                    </div>
                    {/* <div className="row">
                <div className="col-2">
                    <h1>give Your workout <br/> - new style</h1>
                    <p>Lorem, ipsum dolor sit amet <br/>consectetur adipisicing elit. Inventore qua s esse maiores, optio
                        minus minima aperiam doloribus .
                    </p>
                    <a href="#" className="btn">Explore Now &#8594</a>

                </div>
                <div className="col-2">
                    <img src="images/image1.png" alt=""/>
                </div>
            </div> */}
                </div>
            </div>
        </>
    );
};

export default Navbar;
