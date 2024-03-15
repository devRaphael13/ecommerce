import { CiStar } from "react-icons/ci";

function Product({ vendor, image, name, stars, customers, price }) {
    return (
        <article>
            <div>
                <img src={image} alt="" />
            </div>

            <small>{vendor}</small>
            <h3>{name}</h3>
            <div>
                {stars}
                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
                <small>{customers} review</small>
            </div>
            <h2>{price}</h2>
        </article>
    );
}

function ProductList({ title }) {
    return (
        <section>
            <h1>{title}</h1>
            <Product />
            <Product />
            <Product />
            <Product />
        </section>
    );
}

export default ProductList;
