import "./Cart.scss";
import React, {useState} from "react";

// redux
import { useSelector } from "react-redux";

const Cart = () => {

    const cart = useSelector((state) => state.cart);
    
    return (
        <>
            <div className="wrapper">
                <h1>Shopping Cart</h1>
                <div className="project">
                    <div className="shop">
                        <div className="box">
                            {/* <img src="1.jpg" /> */}
                            <div className="content">
                                <h3>Women Lipsticks</h3>
                                <h4>Price: $40</h4>
                                <p className="unit">
                                    Quantity: <input name=""  />
                                </p>
                                <p className="btn-area">
                                    <i
                                        aria-hidden="true"
                                        className="fa fa-trash"
                                    ></i>
                                    <span className="btn2">Remove</span>
                                </p>
                            </div>
                        </div>
                        <div className="box">
                            {/* <img src="2.jpg" /> */}
                            <div className="content">
                                <h3>Man's Watches</h3>
                                <h4>Price: $40</h4>
                                <p className="unit">
                                    Quantity: <input name="" />
                                </p>
                                <p className="btn-area">
                                    <i
                                        aria-hidden="true"
                                        className="fa fa-trash"
                                    ></i>{" "}
                                    <span className="btn2">Remove</span>
                                </p>
                            </div>
                        </div>
                        <div className="box">
                            {/* <img src="3.jpg" /> */}
                            <div className="content">
                                <h3>Samsung Mobile</h3>
                                <h4>Price: $250</h4>
                                <p className="unit">
                                    Quantity: <input name="" />
                                </p>
                                <p className="btn-area">
                                    <i
                                        aria-hidden="true"
                                        className="fa fa-trash"
                                    ></i>{" "}
                                    <span className="btn2">Remove</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="right-bar">
                        <p>
                            <span>Subtotal</span> <span>$120</span>
                        </p>
                        <hr />
                        <p>
                            <span>Tax (5%)</span> <span>$6</span>
                        </p>
                        <hr />
                        <p>
                            <span>Shipping</span> <span>$15</span>
                        </p>
                        <hr />
                        <p>
                            <span>Total</span> <span>$141</span>
                        </p>
                        <a href="#">
                            <i className="fa fa-shopping-cart"></i>Checkout
                        </a>
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default Cart;
