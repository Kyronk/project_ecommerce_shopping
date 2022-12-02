import "./Cart.scss";
import React, { useState } from "react";

// redux
import { useSelector } from "react-redux";

const Cart = () => {
    const cart = useSelector((state) => state.cart);

    console.log("cart", cart);

    // const listCart = cart.products;
    return (
        <>
            <div className="wrapper">
                <h1>Shopping Cart</h1>
                <div className="project">
                    <div className="shop">
                        {cart && cart.products && 
                            cart.products.map((item, index) => (
                                <div className="box" key={index}> 
                                    <img src={item.img} alt="" />
                                    <div className="content">
                                        <h3>{item.title}</h3>
                                        <h4>Price: ${item.price}</h4>
                                        <p className="unit">
                                            Quantity:{" "}
                                            <span>{item.quantity}</span>
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
                            ))}

                        {/* <div className="box">
                            <img src="2.jpg" />
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
                        </div> */}
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
                            <span>All item</span> <span>{cart.quantity}</span>
                        </p>
                        <hr />
                        <p>
                            <span>Total</span> <span>${cart.total}</span>
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
