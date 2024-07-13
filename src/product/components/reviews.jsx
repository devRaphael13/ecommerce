import Spinner from "../../components/spinner";
import { getStars } from "../../utils";

function Reviews({ product, reviews }) {
    return (
        <section className="customer-section fade-in">
            <h2>Verified Customer Reviews</h2>
            <div className="customer-reviews">
                {reviews ? (
                    reviews.count ? (
                        <>
                            <div className="customer-stars">
                                {product && (
                                    <>
                                        <h1>{product.stars}/5</h1>
                                        <div>{...getStars(product.stars)}</div>
                                        <h3>{product.reviews} Verified reviews</h3>
                                    </>
                                )}
                            </div>

                            <div>
                                {reviews.results.map((rev) => (
                                    <div key={rev.id} className="comment">
                                        <div>{...getStars(rev.stars)}</div>
                                        <p>{rev.review}</p>
                                    </div>
                                ))}
                            </div>
                        </>
                    ) : (
                        <p>There are no reviews at the moment</p>
                    )
                ) : (
                    <Spinner />
                )}
            </div>
        </section>
    );
}

export default Reviews;
