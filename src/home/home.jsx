import NavBar from "../components/navbar";
import Categories from "./components/categories";
import Fashion from "./components/fashion";
import Header from "./components/header";
import ProductList from "./components/product_list";


function Home() {
    return (
        <main>
            <NavBar />
            <Header />
            <Categories />

            <section>
                <div>
                    <h1>ECOMMERCE DELIVERS TO YOU</h1>
                    <p>World-wide shipping for all products. We ship to over 100 countries and regions, get products shipped right to your door step.</p>
                </div>
                <img src="" alt="Shipping image" />
            </section>
            <ProductList title="New Products" />
            <Fashion gender="Male" />
            <Fashion gender="Female" />
            <ProductList title="Must have tech devices for you" />
        </main>
    );
}

export default Home;
