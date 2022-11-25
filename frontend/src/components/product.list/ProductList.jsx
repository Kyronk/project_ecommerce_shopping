import React, { useEffect, useState } from "react";
import queryString from "query-string";
import axios from "axios";

import "./ProductList.scss";

const ProductList = () => {
    const [productList, setProductList] = useState("");

    const [pagination, setPagination] = useState({
        page: 1,
        totalPage: 1,
        userRows: 1,
    });

    const [filter, setFilter] = useState({
        page: 1,
        limit: 30,
    });

    const getProductList = async () => {
        const paramString = queryString.stringify(filter);
        // console.log(paramString);
        // const response = await axios.get('http://localhost:5000/users');
        // const response = await axios.get('http://localhost:5000/users?page=2&limit=6');
        const response = await axios.get(
            `http://localhost:5012/api/user/product-list?${paramString}`
        );

        console.log(response);

        const { product, pagination } = response.data;
        console.log("list", product);
        const { totalPage } = pagination;
        // console.log(typeof totalPage)
        // console.log(typeof data);
        // console.log(users);
        if (response.status === 200) {
            setProductList(product);
            console.log("ProductList", productList);
            setPagination(pagination);
            // setPageCount(totalPage);
        }
    };

    useEffect(() => {
        getProductList();
    }, [filter]);

    // fix lại img của product

    return (
        <>
            {/* <div>ProductList</div>
            <div className="row">
                {   productList&&
                    productList.map( (item, index) => {
                        return(
                            <div className="col-4" key={item._id}>
                        <img src={item.img} alt="" />
                        <h4>{item.title}</h4>
                        <div className="rating">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                        </div>
                        <p>$ {item.price}</p>
                    </div>
                        )
                    })}
            </div> */}

            <div className="small-container">
                <h2 className="tittle-featured">Featured Products</h2>
                <div className="row row-2">
                    <h2>All Products</h2>
                    <select name="" id="">
                        <option value="">Default Shorting</option>
                        <option value="">Short by price</option>
                        <option value="">Short by popularity</option>
                        <option value="">Short by rating</option>
                        <option value="">Short by sale</option>
                    </select>
                </div>

                <div className="row">
                    
                        {productList &&
                            productList.map((item, index) => {
                                return (
                                    <div className="col-4" key={item._id}>
                                        <img src={item.img} alt="" />
                                        <h4>{item.title}</h4>
                                        {/* <div className="rating">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-regular fa-star"></i>
                                            <i className="fa-regular fa-star"></i>
                                        </div> */}
                                        <p>$ {item.price}</p>
                                    </div>
                                );
                            })}
                    
                </div>
            </div>
        </>
    );
};

export default ProductList;
