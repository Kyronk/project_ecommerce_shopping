import React, { useEffect, useState } from "react";
import "./Product.scss";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const Product = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        getItemInList();
    }, []);

    const getItemInList = async () => {
        const response = await axios.get(
            `http://localhost:5012/api/admin/products/${id}`
        );
        const getDataItem = response.data;
        setProduct(getDataItem);

        console.log(getDataItem.color);
    };

    return (
        <div className="product_container">
            <div className="img_container">
                <img src={product.img} alt=""/>
            </div>

            <div className="info_container">
                <h4 className="title_product">{product.title}</h4>
                <span className="desc_product">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maiores ipsum voluptatum possimus unde ducimus fuga velit
                    nam tempora. Veritatis rerum nesciunt vel sed et eius quis
                    soluta nisi cupiditate ipsa?
                </span>
                <span className="price_product">$ {product.price} </span>

                <div className="color_container">
                    <span> color list:</span>
                    {product.color?.map((c, index) => {
                        return (
                            <div
                                key={index}
                                className="color_product"
                                style={{ backgroundColor: `${c}` }}
                            ></div>
                        );
                    })}
                </div>
                <div className="size_container">
                    <span>size: </span>
                    {product.size?.map((size, index) => {
                        return (
                            <div key={index} className="size_product">
                                <span>{size}</span>
                            </div>
                        );
                    })}
                </div>

                <button className="btn_view btn_delete">Delete</button>
                <button className="btn_view btn_update">Update</button>
            </div>
        </div>
    );
};

export default Product;
