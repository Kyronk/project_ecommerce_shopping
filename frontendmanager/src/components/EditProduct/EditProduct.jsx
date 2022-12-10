import React, { useEffect, useState, useCallback } from "react";

import axios from "axios";
import { useParams, Link, NavLink } from "react-router-dom";
import { useRef } from "react";
const EditProduct = () => {
    const colorRef = useRef();

    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [img, setImg] = useState("");

    const [product, setProduct] = useState({});

    // const getProduct = useCallback(async () => {
    //     const response = await axios.get(
    //         `http://localhost:5012/api/admin/products/${id}`
    //     );

    //     const product = await response.data;
    //     // setTitle(product.title);
    //     // setPrice(product.price);
    //     // setImg(product.img);
    //     return product;
    // }, [id]);
    const fetchDataCall = async ({ api }) => {
        let apiReturn = await axios
            .get(api)
            .then(async function (response) {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
        return apiReturn;
    };

    useEffect(() => {
        const fetchData = async (api) => {
            let response = await fetchDataCall({ api: api });
            setProduct(response);
        };

        fetchData(`http://localhost:5012/api/admin/products/${id}`);
    }, [id]);

    const updateProduct = async (event) => {
        event.preventDefault();
        try {
            // await axios.patch(
            //     `http://localhost:5012/api/admin/product/${id}`,
            //     {
            //         title,
            //         price,
            //         img
            //     }
            // );
            console.log(colorRef.current.target.value);
        } catch (err) {
            console.log(err);
        }
    };

    const updateColor = (color, type) => {
        let newProductColor = [];
        switch (type) {
            case "add":
                const newColor = colorRef.current.target.value;
                newProductColor = product.color;
                newProductColor.push(newColor);
                break;
            case "remove":
                newProductColor = product.color.filter(
                    (item) => item !== color
                );
                break;
            default:
                break;
        }
        setProduct({ ...product, color: newProductColor });
    };

    return (
        <>
            <h1>edit product page</h1>
            <div className="user-profile">
                <div className="user-profile_container">
                    <div className="user-profile_title">Edit User Profile</div>
                    <div className="user-profile_content">
                        <form onSubmit={updateProduct}>
                            <div className="user-details">
                                <div className="input-box">
                                    <span className="details">
                                        Title product
                                    </span>
                                    <input
                                        type="text"
                                        placeholder="Enter your first name"
                                        required
                                        onChange={(e) =>
                                            setTitle(e.target.value)
                                        }
                                        value={product?.title}
                                    />
                                </div>
                                <div className="input-box">
                                    <span className="details">
                                        Image product
                                    </span>
                                    <input
                                        type="text"
                                        placeholder="Enter your last name"
                                        required
                                        onChange={(e) => setImg(e.target.value)}
                                        value={product?.img}
                                    />
                                </div>
                                <div className="input-box">
                                    <span className="details">
                                        Price product
                                    </span>
                                    <input
                                        type="text"
                                        placeholder="Enter your username"
                                        required
                                        onChange={(e) =>
                                            setPrice(e.target.value)
                                        }
                                        value={product?.price}
                                    />
                                </div>
                                <div>
                                    <span className="details">Colors</span>
                                    <div className="color_container">
                                        {product?.color?.map((c, index) => {
                                            return (
                                                <div
                                                    key={index}
                                                    className="color_product"
                                                    style={{
                                                        backgroundColor: `${c}`,
                                                    }}
                                                    onClick={() =>
                                                        updateColor(c, "remove")
                                                    }
                                                ></div>
                                            );
                                        })}
                                    </div>
                                    <input
                                        ref={colorRef}
                                        type="color"
                                        onChange={(e) => (colorRef.current = e)}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => updateColor("", "add")}
                                    >
                                        Add Color
                                    </button>
                                </div>

                                {/* <div className="input-box">
                                    <span className="details">Email</span>
                                    <input
                                        type="text"
                                        placeholder="Enter your email"
                                        required
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        value={email}
                                    />
                                </div> */}

                                {/* <div className="input-box">
                                    <span className="details">Address</span>
                                    <input
                                        type="text"
                                        placeholder="Enter your address"
                                        required
                                        onChange={(e) =>
                                            setAddress(e.target.value)
                                        }
                                        value={address}
                                    />
                                </div> */}
                            </div>
                            <div className="button">
                                <input type="submit" value="Update" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditProduct;
