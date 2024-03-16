import Footer from "../components/footer";
import NavBar from "../components/navbar";
import Categories from "./components/categories";
import FashionList from "./components/fashion";
import Header from "./components/header";
import ProductList from "../components/product";
import VendorList from "./components/vendor";
import Deals from "./components/deals";

import "./home.css";

import productImg from "./assets/tanjiro5.jpg";

function Home() {
    return (
        <main>
            <NavBar />
            <Header />
            <Categories />
            <Deals />
            <section>
                <div className="shipping">
                    <div>
                        <h1>ECOMMERCE DELIVERS TO YOU</h1>
                        <p>World-wide shipping for all products. We ship to over 100 countries and regions, get products shipped right to your door step.</p>
                    </div>
                    <div>
                        <img src={productImg} alt="Shipping image" />
                    </div>
                </div>
            </section>
            <ProductList title="New Products" />
            <FashionList />
            <ProductList title="Must have tech devices for you" name="test" />
            <VendorList />
            <Footer />
        </main>
    );
}

export default Home;
