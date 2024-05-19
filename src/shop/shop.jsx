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
    const [showFilter, setShowFilter] = useState(true);
    
    const categoryFilter = useRef(null);
    const priceFilter = useRef(null);
    const ratingFilter = useRef(null);
    const defaultProducts = useRef(null);

    window.addEventListener("resize", () => {
        if (window.innerWidth < 720) {
            setShowFilter(true);
        }
    });
    
    // Fetch all products
    
    useEffect(() => {
        dataFetch("https://django-ecommerce-api.vercel.app/api/products/", setProducts);
        dataFetch("https://django-ecommerce-api.vercel.app/api/categories/?parent=true", setCategories);
    }, []);

    // Set Default Products
    useEffect(() => {
        if (defaultProducts.current) return
        else defaultProducts.current = products
    }, [products])
    
    // Filter
    
    useEffect(() => {
        const clear = document.getElementById("clear-btn");
        const btn = document.getElementById("btn");

        clear.addEventListener("click", (e) => {
            categoryFilter.current = null;
            priceFilter.current = null;
            ratingFilter.current = null;
            setProducts(defaultProducts.current);
        });
        
        btn.addEventListener("click", (e) => {
            let filter_str = "?";
            let query_param = [];

            if (categoryFilter.current) query_param.push(`category=${categoryFilter.current}`);
            if (priceFilter.current) query_param.push(`price_lte=${priceFilter.current * 100}`);
            if (ratingFilter.current) query_param.push(`stars_gte=${ratingFilter.current}`);
            
            filter_str += query_param.length > 1 ? query_param[0] : query_param.join("&")
            dataFetch(`https://django-ecommerce-api.vercel.app/api/products/${filter_str}`, setProducts);
        });
    }, [products]);
    
    // Ordering
    
    useEffect(() => {
        const defaultBtn = document.getElementById("default-btn");
        const ascBtn = document.getElementById("asc-btn");
        const descBtn = document.getElementById("desc-btn");
        
        const productCopy = {...products}

        // Ascending order
        
        ascBtn.addEventListener("click", (e) => {
            let res = [...products?.results]
            res.sort(compareFn)
            setProducts({...products, results: res})
        })
        
        // Descending order
        
        descBtn.addEventListener("click", (e) => {
            let res = [...products?.results]
            res.sort(compareFn)
            res.reverse()
            setProducts({...products, results: res})
        })
        
        const compareFn = (a, b) => {
            if (a.name < b.name) return -1
            else return 1
        }
        
        // Default order

        defaultBtn.addEventListener("click", (e) => {setProducts(productCopy)})
        
    }, [products]);
    
    return (
        <div className="shop">
            <NavBar />
            <section className="shop-content">
                {showFilter && <Filter data={categories} {...{ categoryFilter, priceFilter, ratingFilter }} />}
                <main>
                    <Ordering showFilter={showFilter} setShowFilter={setShowFilter} />
                    <ProductList data={products} />
                </main>
            </section>
        </div>
    );
}

export default Shop;
