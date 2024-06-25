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

                <div className="product-info">
                    <small>{product.vendor.name}</small>
                    <h3>{product.name}</h3>
                    <div className="product-star-container">
                        <div>{...getStars(product.stars)}</div>
                        <span>{product.reviews} reviews</span>
                    </div>

                    <h2>${product.price / 100}</h2>
                </div>
            </Link>
        </article>
    );
}

function ProductList({ title, data }) {
    return (
        <section className="product-section">
            <h2>{title}</h2>
            {data ? <div className="product-list">{data.count ? data.results.map((product) => <Product key={product.id} product={product} />) : <p>No Products at the moment</p>}</div> : <Spinner />}
        </section>
    );
}

export default ProductList;
