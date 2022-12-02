import "./Product.scss";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams,Link} from "react-router-dom";
import { useDispatch } from "react-redux";

import { addProduct, addProductEnd } from "../../redux/cartSlice";

const Product = () => {

    const [product, setProduct] = useState({})
    const {id} = useParams();
    const [quantity, setQuantity] = useState(1);

    const dispatch = useDispatch();
    // console.log(id);
    
    useEffect(() => {
        getItem();
    }, [])
    
    const getItem = async () => {
        const response = await axios.get(`http://localhost:5012/api/user/product-item/${id}`);
        const getProductItem = response.data;
        setProduct(getProductItem);

        // setProduct(getProductItem)
        // console.log("item", typeof response.data.price );
    }

    const handleAddToCart = () => {
        dispatch(
            addProduct({
                    ...product,
                    quantity
            }),
            addProduct(),
        )
        // setQuantity(1);
        // dispatch(
        //     addProduct({
        //         ...product,
        //         color,
        //         quantity,
        //         size,
        //     })
        // )
    }

    const handleQuantity = (type) => {
        
        if(type === 'inc') {
            setQuantity(quantity + 1);
        }else {
            // if (quantity === 1) return; // cach 1 
            quantity > 1 && setQuantity(quantity - 1);
        }
    }


    return (
        <>
            <div className="item-page_container simple-product">
            <div className="item-page_row">
                <div className="item-page_col-2">
                    <img src={product.img} width="100%" alt="" id="productImg"/>

                
                </div>
    
    
                <div className="item-page_col-2">
                    {/* <p>Home / T-shirt</p> */}
                    <h1>{product.title}</h1>
                    <h4>$ {product.price} dove</h4>

                    {/* {product.color?.map((c) => {
                                    return(
                                        < option 
                                            color={c} 
                                            key={c}
                                            
                                        />)
                            })} */}

                    {/* <select className="" id="">
                        <option value="">Select</option>
                        <option value="">XXL</option>
                        <option value="">XL</option>
                        <option value="">Large</option>
                        <option value="">Medium</option>
                        <option value="">Small</option>
                    </select> */}

                    {/* <div className="product_count-product">
                        <i class="fa-solid fa-minus"></i>
                    </div>

                    <input type="number" />

                    <div className="product_count-product">
                        <i class="fa-solid fa-plus"></i>
                    </div> */}


                        <i 
                            style={{cursor: "pointer"}}
                            className="fa-solid fa-minus"
                            onClick={() => handleQuantity('dec')}
                            ></i>
                    {/* <span className="product_quantity">{quantity}</span> */}
                    <span className="product_quantity">{quantity}</span>
                    <i 
                        style={{cursor: "pointer"}}
                        className="fa-solid fa-plus"
                        onClick={() => handleQuantity('inc')}
                        ></i>

                    <Link to="" >
                        <button className="btn" onClick={handleAddToCart}>
                            Add to cart
                            <i className="fa-solid fa-cart-shopping" style={{color: "white"}}></i>
                        </button>

                    </Link>
                    <h3>Product Details <i className="fa-solid fa-indent"></i></h3>
                    <br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos eveniet quae cupiditate animi. Sequi aperiam consequuntur iusto possimus nostrum rem quis totam saepe, nesciunt quibusdam iste voluptate, veniam ut laboriosam?</p>
                </div>
            </div>
        </div>

        </>
    );
};

export default Product;
