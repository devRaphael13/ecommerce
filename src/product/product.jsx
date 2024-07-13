import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Detail from "./components/detail";
import Reviews from "./components/reviews";
import ProductList from "../components/product";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Spinner from "../components/spinner";

import "./product.css";
import { dataFetch } from "../utils";

function ProductDetail() {
    const { productId } = useParams();
    const { state } = useLocation();
    const [vendorProducts, setVendorProducts] = useState(null);
    const [categoryProducts, setCategoryProducts] = useState(null);
    const [product, setProduct] = useState(state);
    const [reviews, setReviews] = useState(null);

    useEffect(() => {
        if (product) {
            dataFetch(`https://django-ecommerce-api.vercel.app/api/products/?category=${product.category.id}`, setCategoryProducts);
            dataFetch(`https://django-ecommerce-api.vercel.app/api/products/?vendor=${product.vendor.id}`, setVendorProducts);
            dataFetch(`https://django-ecommerce-api.vercel.app/api/reviews/?product=${productId}`, setReviews)
        } else {
            dataFetch(`https://django-ecommerce-api.vercel.app/api/products/${productId}`, setProduct);
        }

        if (product.id != productId) {
            window.location.reload()
        }
        
    }, [product, productId]);

    return (
        <div className="productdetail">
            <NavBar />
            <div className="product-detail-container fade-in">
                <Detail product={product} />
                <section className="product-description fade-in">
                    <h2>Product Details</h2>
                    {product ? <p>{product.description}</p> : <Spinner />}
                </section>
                <Reviews product={product} reviews={reviews}/>
                {product && (
                    <>
                        <ProductList title="You May Also Like" data={categoryProducts} />
                        <ProductList title={`More From ${product.vendor.name}`} data={vendorProducts} />
                    </>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default ProductDetail;
