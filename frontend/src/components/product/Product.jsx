import "./Product.scss";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams,Link} from "react-router-dom";

const Product = () => {

    const [product, setProduct] = useState()
    const {id} = useParams();

    useEffect(() => {
        getSimpleUser();
    }, [])

    const getSimpleUser = async () => {
        const response = await axios.get(`http://localhost:5012/api/user/product-item/${id}`);
        const getProductItem = response.data;
        setProduct(getProductItem);
        console.log(product)
    }
    return (
        <div>
            {/* <div>item of products</div>
            <img src={product.img} alt="" />
            <h4>{product.title}</h4> */}
        </div>
    );
};

export default Product;
