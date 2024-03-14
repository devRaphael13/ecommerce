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
                <small>{customers} review</small>
            </div>
            <h2>{price}</h2>
        </article>
    );
}

export default Product