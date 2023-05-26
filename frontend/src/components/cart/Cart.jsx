import "./Cart.scss";
import React, { useState } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";
import { oderSuccess } from "../../redux/cartSlice";


import axios from "axios";
import { useNavigate } from "react-router";

const Cart = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cart = useSelector((state) => state.cart);

    const list = useSelector((state) => state.cart.products);
    const quantityInCart = useSelector((state) => state.cart.quantity);
    const totalCart = useSelector((state) => state.cart.total);
    console.log("list", totalCart);

    // const [products, setProducts] = useState([]);
    // const [quantity, setQuantity] = useState(0);
    // const [total, setTotal] = useState(0);
    const isAccept = false;

    // const list = cart.products;
    // console.log(list);

    // setProducts(cart.products);
    // console.log("product", products);


    const checkOut = async () => {
        try {
            const response = await axios.post("http://localhost:5012/api/user/checkout", {
                products: list,
                quantity: quantityInCart,
                total: totalCart,
                isAccept
            });
            dispatch(
                oderSuccess(),
            );
            navigate("/home");


        } catch (error) {
            console.log(error);
        }
    }

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
                        <button 
                            className="cart-btn-checkout"
                            onClick={checkOut}
                            >
                            <i className="fa fa-shopping-cart"></i>Checkout
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;
