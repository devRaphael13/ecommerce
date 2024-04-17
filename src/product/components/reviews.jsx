import { getStars } from "../../utils";

function Reviews({ product, reviews }) {
    return (
        <section className="customer-section">
            <h2>Verified Customer Reviews</h2>
            <div className="customer-reviews">
                <div className="customer-stars">
                    <h1>{product.stars}/5</h1>
                    <div>{...getStars(product.stars)}</div>
                    <h3>{product.reviews} Verified reviews</h3>
                </div>

                <div>
                    <div className="comment">
                        <div>{...getStars(product.stars)}</div>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit illum commodi cum ad corrupti, debitis exercitationem excepturi dolores doloribus, inventore quod
                            omnis possimus placeat quia veniam animi obcaecati consequuntur repellendus.
                        </p>
                    </div>
                    <div className="comment">
                        <div>{...getStars(product.stars)}</div>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit illum commodi cum ad corrupti, debitis exercitationem excepturi dolores doloribus, inventore quod
                            omnis possimus placeat quia veniam animi obcaecati consequuntur repellendus.
                        </p>
                    </div>
                    <div className="comment">
                        <div>{...getStars(product.stars)}</div>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit illum commodi cum ad corrupti, debitis exercitationem excepturi dolores doloribus, inventore quod
                            omnis possimus placeat quia veniam animi obcaecati consequuntur repellendus.
                        </p>
                    </div>
                    <div className="comment">
                        <div>{...getStars(product.stars)}</div>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit illum commodi cum ad corrupti, debitis exercitationem excepturi dolores doloribus, inventore quod
                            omnis possimus placeat quia veniam animi obcaecati consequuntur repellendus.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Reviews;
