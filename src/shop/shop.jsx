import { useEffect, useRef, useState } from "react";

import Footer from "../components/footer";
import NavBar from "../components/navbar";
import ProductList from "../components/product";
import dataFetch from "../utils";
import "./shop.css";
import Spinner from "../components/spinner";

function Shop() {
    const [categories, setCategories] = useState(null);
    const [products, setProducts] = useState(null);
    const [vendors, setVendors] = useState(null);

    useEffect(() => {
        dataFetch("https://django-ecommerce-api.vercel.app/api/products/", setProducts);
        dataFetch("https://django-ecommerce-api.vercel.app/api/categories/?parents=none", setCategories);
        dataFetch("https://django-ecommerce-api.vercel.app/api/vendors", setVendors);
    }, []);

    const price = document.getElementById("price");
    const priceLabel = document.getElementById("price-label");

    if (price && priceLabel) {
        price.addEventListener("input", (e) => {
            priceLabel.innerHTML = `$ ${price.value}`;
        });
    }

    return (
        <div className="shop">
            <NavBar />
            <section className="shop-content">
                <aside>
                    <div className="filter">
                        <h3>Filter By Category</h3>
                        {categories ? (
                            categories.count ? (
                                categories.results.map((category) => (
                                    <div className="cat" key={category.id}>
                                        <input type="radio" />
                                        <label htmlFor={category.name}>{category.name}</label>
                                    </div>
                                ))
                            ) : (
                                <p>There's nothing to show</p>
                            )
                        ) : (
                            <Spinner />
                        )}
                    </div>
                    <div className="filter">
                        <h3>Filter By Price</h3>
                        <label id="price-label" htmlFor="price"></label>
                        <input id="price" name="price" type="range" min="1" step="1" max="99999" />
                    </div>
                    <div className="filter">
                        <h3>Filter By Rating</h3>
                        <p>Bullshit</p>
                        <p>Bullshit</p>
                        <p>Bullshit</p>
                        <p>Bullshit</p>
                        <p>Bullshit</p>
                    </div>
                    <div className="filter">
                        <h3>Filter By Brand</h3>
                        <p>Bullshit</p>
                        <p>Bullshit</p>
                        <p>Bullshit</p>
                        <p>Bullshit</p>
                        <p>Bullshit</p>
                        <p>Bullshit</p>
                    </div>
                </aside>
                <main>
                    <div className="ordering">
                        <div>
                            <button>Ascending</button>
                            <button>Descending</button>
                        </div>
                        <p>Showing 1-12 out of 40 results</p>
                    </div>
                    <ProductList data={products} />
                </main>
            </section>
            <Footer />
        </div>
    );
}

export default Shop;
