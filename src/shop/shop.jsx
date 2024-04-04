import { useEffect, useState } from "react";

import NavBar from "../components/navbar";
import ProductList from "../components/product";
import dataFetch from "../utils";
import Filter from "./components/filter";
import Ordering from "./components/ordering";
import "./shop.css";

function Shop() {
    const [categories, setCategories] = useState(null);
    const [products, setProducts] = useState(null);
    const [size, setSize] = useState(window.innerWidth);
    const [showFilter, setShowFilter] = useState(true)

    window.addEventListener("resize", () => {
        if (size > 720) {
            setShowFilter(true)
        }
    })

    useEffect(() => {
        dataFetch("https://django-ecommerce-api.vercel.app/api/products/", setProducts);
        dataFetch("https://django-ecommerce-api.vercel.app/api/categories/?parents=none", setCategories);
    }, []);

    return (
        <div className="shop">
            <NavBar size={size} setSize={setSize} />
            <section className="shop-content">
                {showFilter && <Filter data={categories} />}
                <main>
                    <Ordering showFilter={showFilter} setShowFilter={setShowFilter} size={size} />
                    <ProductList data={products} />
                </main>
            </section>
        </div>
    );
}

export default Shop;
