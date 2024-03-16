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

function ProductList({ title, name }) {
    return (
        <section>
            <h3>{title}</h3>
            <Product name={name} vendor="vendor"/>
            <Product name={name} vendor="vendor"/>
            <Product name={name} vendor="vendor"/>
            <Product name={name} vendor="vendor"/>
        </section>
    );
}

export default ProductList;
