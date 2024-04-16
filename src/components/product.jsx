import Spinner from "./spinner";
import { Link } from "react-router-dom";
import { getStars } from "../utils";

function Product({ product }) {
    return (
        <article className="product fade-in">
            <Link to={`/products/${product.id}`} state={product}>
                <div>
                    <img src={product.display_image} alt="" />
                </div>

                <small>{product.vendor.name}</small>
                <h3>{product.name}</h3>
                <div>
                    <div>{...getStars(product.stars)}</div>
                    <p>{product.reviews} reviews</p>
                </div>

                <h2>${product.price / 100}</h2>
            </Link>
        </article>
    );
}

function ProductList({ title, data }) {
    return (
        <section className="product-section">
            <h3>{title}</h3>
            {data ? <div className="product-list">{data.count ? data.results.map((product) => <Product key={product.id} product={product} />) : <p>No Products at the moment</p>}</div> : <Spinner />}
        </section>
    );
}

export default ProductList;
