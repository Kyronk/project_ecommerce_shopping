import "./Product.scss";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams,Link} from "react-router-dom";

const Product = () => {

    const [product, setProduct] = useState({})
    const {id} = useParams();
    // console.log(id);
    
    useEffect(() => {
        getItem();
    }, [])
    
    const getItem = async () => {
        const response = await axios.get(`http://localhost:5012/api/user/product-item/${id}`);
        const getProductItem = response.data;
        setProduct(getProductItem);
        setProduct(getProductItem)
        console.log("item", response.data );
    }


    return (
        <>
            <div className="item-page_container simple-product">
            <div className="item-page_row">
                <div className="item-page_col-2">
                    <img src={product.img} width="100%" alt="" id="productImg"/>

                
                </div>
    
    
                <div className="item-page_col-2">
                    <p>Home / T-shirt</p>
                    <h1>{product.title}</h1>
                    <h4>$ {product.price}</h4>
                    <select name="" id="">
                        <option value="">Select</option>
                        <option value="">XXL</option>
                        <option value="">XL</option>
                        <option value="">Large</option>
                        <option value="">Medium</option>
                        <option value="">Small</option>
                    </select>
                    <input type="number" value="1"/>
                    <Link to="" >
                        <button className="btn">
                            Add to cart
                            <i class="fa-solid fa-cart-shopping" style={{color: "white"}}></i>
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
