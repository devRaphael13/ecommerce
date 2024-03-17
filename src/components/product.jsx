import { CiStar } from "react-icons/ci";
import productImg from "../home/assets/bracelets.png";

function Product({ vendor, image, name, stars, customers, price }) {
    return (
        <article className="product">
            <div>
                <img src={productImg} alt="" />
            </div>

            <small>Versace</small>
            <h3>Product Name</h3>
            <div>
                <div>
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                </div>
                <p>45 reviews</p>
            </div>

            <h2>$49.99</h2>
        </article>
    );
}

function ProductList({ title, name }) {
    return (
        <section>
            <h3>{title}</h3>
            <div className="product-list">
                <Product name={name} vendor="vendor" />
                <Product name={name} vendor="vendor" />
                <Product name={name} vendor="vendor" />
                <Product name={name} vendor="vendor" />
                <Product name={name} vendor="vendor" />
            </div>
        </section>
    );
}

export default ProductList;
