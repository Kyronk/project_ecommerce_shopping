import React from "react";
import Navbar from "../../components/navbar/Navbar";
import ProductList from "../../components/product.list/ProductList";

const ProductListPage = () => {
    return (
        <>
            <Navbar />
            <div>ProductListPage</div>
            <ProductList />
        </>
    );
};

export default ProductListPage;
