import React, { useEffect, useState } from "react";
import queryString from "query-string";
import axios from "axios";

const ProductList = () => {
    const [productList, setProductList] = useState("");

    const [pagination, setPagination] = useState({
        page: 1,
        totalPage: 1,
        userRows: 1,
    });

    const [filter, setFilter] = useState({
        page: 1,
        limit: 6,
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
        console.log("list", product)
        const { totalPage } = pagination;
        // console.log(typeof totalPage)
        // console.log(typeof data);
        // console.log(users);
        if (response.status === 200) {
            setProductList(product);
            console.log("ProductList", productList)
            setPagination(pagination);
            // setPageCount(totalPage);
        }
    };

    useEffect(() => {
        getProductList();
    }, [filter]);

    return (
        <>
            <div>ProductList</div>
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
            </div>
        </>
    );
};

export default ProductList;
