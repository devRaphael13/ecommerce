import { useEffect, useRef, useState } from "react";

import NavBar from "../components/navbar";
import ProductList from "../components/product";
import { dataFetch } from "../utils";
import Filter from "./components/filter";
import Ordering from "./components/ordering";
import "./shop.css";

function Shop() {
    const [categories, setCategories] = useState(null);
    const [products, setProducts] = useState(null);
    const [filteredProducts, setFilteredProducts] = useState(null);
    const [showFilter, setShowFilter] = useState(true);

    const categoryFilter = useRef(null);
    const priceFilter = useRef(null);
    const ratingFilter = useRef(null);

    window.addEventListener("resize", () => {
        if (window.innerWidth < 720) {
            setShowFilter(true);
        }
    });

    // Fetch all products

    useEffect(() => {
        dataFetch("https://django-ecommerce-api.vercel.app/api/products/", setProducts);
        dataFetch("https://django-ecommerce-api.vercel.app/api/categories/?parent=true", setCategories);
    });

    // Filter

    useEffect(() => {
        const clear = document.getElementById("clear-btn");
        clear.addEventListener("click", (e) => {
            categoryFilter.current = null;
            priceFilter.current = null;
            ratingFilter.current = null;
            setFilteredProducts(null);
        });

        const btn = document.getElementById("btn");
        btn.addEventListener("click", (e) => {
            let filter_str = "?";
            let query_param = [];

            if (categoryFilter.current) query_param.push(`category=${categoryFilter.current}`);
            if (priceFilter.current) query_param.push(`price_lte=${priceFilter.current * 100}`);
            if (ratingFilter.current) query_param.push(`stars_gte=${ratingFilter.current}`);

            filter_str += query_param.length > 1 ? query_param[0] : query_param.join("&")

            dataFetch(`https://django-ecommerce-api.vercel.app/api/products/${filter_str}`, setFilteredProducts);
        });
    }, [filteredProducts]);

    // Ordering

    useEffect(() => {
        const defaultBtn = document.getElementById("default-btn");
        const ascBtn = document.getElementById("asc-btn");
        const descBtn = document.getElementById("desc-btn");
    });

    return (
        <div className="shop">
            <NavBar />
            <section className="shop-content">
                {showFilter && <Filter data={categories} {...{ categoryFilter, priceFilter, ratingFilter }} />}
                <main>
                    <Ordering showFilter={showFilter} setShowFilter={setShowFilter} />
                    <ProductList data={filteredProducts || products} />
                </main>
            </section>
        </div>
    );
}

export default Shop;
