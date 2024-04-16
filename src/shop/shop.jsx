import { useEffect, useState } from "react";

import NavBar from "../components/navbar";
import ProductList from "../components/product";
import { dataFetch } from "../utils";
import Filter from "./components/filter";
import Ordering from "./components/ordering";
import "./shop.css";

function Shop() {
    const [categories, setCategories] = useState(null);
    const [products, setProducts] = useState(null);
    const [showFilter, setShowFilter] = useState(true);

    window.addEventListener("resize", () => {
        if (window.innerWidth < 720) {
            setShowFilter(true);
        }
    });

    useEffect(() => {
        dataFetch("https://django-ecommerce-api.vercel.app/api/products/", setProducts);
        dataFetch("https://django-ecommerce-api.vercel.app/api/categories/?parent=true", setCategories);
    }, []);

    return (
        <div className="shop">
            <NavBar />
            <section className="shop-content">
                {showFilter && <Filter data={categories} />}
                <main>
                    <Ordering showFilter={showFilter} setShowFilter={setShowFilter} />
                    <ProductList data={products} />
                </main>
            </section>
        </div>
    );
}

export default Shop;
