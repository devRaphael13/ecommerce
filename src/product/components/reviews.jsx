import { getStars } from "../../utils";

function Reviews({ product, reviews }) {
    return (
        <section>
            <h2>Verified Customer Reviews</h2>
            <div>
                <div>
                    <div>
                        <h1>{product.stars}/5</h1>
                        {...getStars(product.stars)}
                        <h3>{product.reviews} Verified reviews</h3>
                    </div>
                </div>

                <div></div>
            </div>
        </section>
    );
}

export default Reviews;
