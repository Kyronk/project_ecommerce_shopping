import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
    return (
        <header>
            <input type="checkbox" name="" id="toggler" />
            <label for="toggler" className="fas fa-bars"></label>

            <a href="/" className="logo">
                flower<span>.</span>
            </a>

            <nav className="navbar">
                <a href="#home">home</a>
                <a href="#about">about</a>
                <a href="#products">products</a>
                <a href="#review">review</a>
                <a href="#contact">contact</a>
            </nav>

            <div className="icons">
                <a href="/" className="fas fa-heart"></a>
                <a href="/" className="fas fa-shopping-cart"></a>
                <a href="/" className="fas fa-user"></a>
            </div>
        </header>
    );
};

export default Navbar;
