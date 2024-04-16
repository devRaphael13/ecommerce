import { useEffect, useState } from "react";

import Footer from "../components/footer";
import NavBar from "../components/navbar";
import Categories from "./components/categories";
import FashionList from "./components/fashion";
import Header from "./components/header";
import ProductList from "../components/product";
import VendorList from "./components/vendor";
import Deals from "./components/deals";
import { dataFetch } from "../utils";

import "./home.css";

import ecommerce from "./assets/shopping.png";

function Home() {
    const [categories, setCategories] = useState(null);
    const [newProducts, setNewProducts] = useState(null);
    const [techProducts, setTechProducts] = useState(null);
    const [vendors, setVendors] = useState(null);
    const [featured, setFeatured] = useState(null);

    useEffect(() => {
        dataFetch("https://django-ecommerce-api.vercel.app/api/categories/?limit=100", setCategories);
        dataFetch("https://django-ecommerce-api.vercel.app/api/products/?limit=6&ordering=-datetime_created", setNewProducts);
        dataFetch("https://django-ecommerce-api.vercel.app/api/products/?limit=6&category=14", setTechProducts);
        dataFetch("https://django-ecommerce-api.vercel.app/api/vendors/", setVendors);
        dataFetch("https://django-ecommerce-api.vercel.app/api/products/2", setFeatured);
    }, []);

    return (
        <main>
            <NavBar/>
            <Header data={featured} />
            <div className="home-content">
                <Categories data={categories} />
                <Deals />
                <section>
                    <div className="shipping">
                        <div>
                            <h1>ECOMMERCE DELIVERS TO YOU</h1>
                            <p>World-wide shipping for all products. We ship to over 100 countries and regions, get products shipped right to your door step.</p>
                        </div>
                        <div>
                            <img src={ecommerce} alt="Shipping image" />
                        </div>
                    </div>
                </section>
                <ProductList title="New Products" data={newProducts} />
                <FashionList />
                <ProductList title="Must have tech devices for you" name="test" data={techProducts} />
                <VendorList data={vendors} />
            </div>
            <Footer />
        </main>
    );
}

export default Home;
