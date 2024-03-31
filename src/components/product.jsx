import { FaStar } from "react-icons/fa6";
import productImg from "../home/assets/bracelets.png";
import Spinner from "./spinner";

function Product({ product }) {
    const starMap = [];
    let stars = product.stars;

    for (let i = 0; i < 5; i++) {
        if (stars) {
            starMap.push(<FaStar className="yellow_star" />);
            stars -= 1;
        } else {
            starMap.push(<FaStar className="star" />);
        }
    }

    return (
        <article className="product">
            <div>
                <img src={product.display_image} alt="" />
            </div>

            <small>{product.vendor.name}</small>
            <h3>{product.name}</h3>
            <div>
                <div>{...starMap}</div>
                <p>{product.reviews} reviews</p>
            </div>

            <h2>${product.price / 100}</h2>
        </article>
    );
}

function ProductList({ title, data }) {
    return (
        <section className="product-section">
            <h3>{title}</h3>
            {data ? (
                <div className="product-list">{data.count ? data.results.map((product) => <Product key={product.id} product={product} />) : <p>No Products at the moment</p>}</div>
            ) : (
                <Spinner />
            )}
        </section>
    );
}

export default ProductList;
