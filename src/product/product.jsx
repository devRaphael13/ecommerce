import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Detail from "./components/detail";
import Description from "./components/description";
import Reviews from "./components/reviews";
import ProductList from "../components/product";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

import "./product.css";
import { dataFetch } from "../utils";

function ProductDetail() {
    const { productId } = useParams();
    const { state } = useLocation();
    const [vendorProducts, setVendorProducts] = useState(null);
    const [categoryProducts, setCategoryProducts] = useState(null);

    useEffect(() => {
        if (state) {
            dataFetch(`https://django-ecommerce-api.vercel.app/api/products/?category=${state.category.id}`, setCategoryProducts);
            dataFetch(`https://django-ecommerce-api.vercel.app/api/products/?vendor=${state.vendor.id}`, setVendorProducts);
        }
    });

    return (
        <div className="productdetail">
            <NavBar />
            <div className="product-detail-container">
                <Detail product={state} />
                <Description description={state.description} />
                <Reviews product={state} />
                <ProductList title="You May Also Like" data={categoryProducts} />
                <ProductList title={`More From ${state.vendor.name}`} data={vendorProducts} />
            </div>
            <Footer />
        </div>
    );
}

export default ProductDetail;
