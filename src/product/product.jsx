import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Detail from "./components/detail";
import Description from "./components/description";
import Reviews from "./components/reviews";
import ProductList from "../components/product";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

import "./product.css";

function ProductDetail() {
    const { state } = useLocation();

    return (
        <div className="productdetail">
            <NavBar />
            <div className="product-detail-container">
                <Detail product={state} />
                <Description description={state.description} />
                <Reviews product={state} />
                <ProductList title="You May Also Like" data="" />
                <ProductList title={`More From ${state.vendor.name}`} data="" />
                <Footer />
            </div>
        </div>
    );
}

export default ProductDetail;
