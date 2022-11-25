import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import ProductList from "../../components/product.list/ProductList";

const ProductListPage = () => {
    return (
        <>
            <Navbar />
            <ProductList />

            <Footer />
        </>
    );
};

export default ProductListPage;
