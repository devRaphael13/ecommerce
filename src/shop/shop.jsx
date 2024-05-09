import { useEffect, useRef, useState } from "react";

import NavBar from "../components/navbar";
import ProductList from "../components/product";
import { dataFetch } from "../utils";
import Filter from "./components/filter";
import Ordering from "./components/ordering";
import "./shop.css";
import { useLocation } from "react-router-dom";

function Shop() {
    const [categories, setCategories] = useState(null);
    const [products, setProducts] = useState(null);
    const [showFilter, setShowFilter] = useState(true);
    
    const categoryFilter = useRef(null)
    const priceFilter = useRef(null)
    const ratingFilter = useRef(null)

    window.addEventListener("resize", () => {
        if (window.innerWidth < 720) {
            setShowFilter(true);
        }
    });

    useEffect(() => {
        dataFetch("https://django-ecommerce-api.vercel.app/api/products/", setProducts);
        dataFetch("https://django-ecommerce-api.vercel.app/api/categories/?parent=true", setCategories);
        
        const btn = document.getElementById("btn")
        btn.addEventListener("click", (e) => {
            console.log(categoryFilter.current, priceFilter.current, ratingFilter.current)
        })
    }, []);

    return (
        <div className="shop">
            <NavBar />
            <section className="shop-content">
                {showFilter && <Filter data={categories} {...{categoryFilter, priceFilter, ratingFilter}}/>}
                <main>
                    <Ordering showFilter={showFilter} setShowFilter={setShowFilter} />
                    <ProductList data={products} />
                </main>
            </section>
        </div>
    );
}

export default Shop;
