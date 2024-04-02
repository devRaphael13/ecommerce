import { FaStar } from "react-icons/fa6";

import { GoArrowRight } from "react-icons/go";
import Spinner from "../../components/spinner";

function Header({ data }) {
    if (!data) {
        return (
            <article className="spinner-margin">
                <Spinner padding_class="spinner-padding" />
            </article>
        );
    }

    const starMap = [];
    let stars = data.stars;

    for (let i = 0; i < 5; i++) {
        if (stars) {
            starMap.push(<FaStar className="yellow_star" />);
            stars -= 1;
        } else {
            starMap.push(<FaStar className="star" />);
        }
    }

    return (
        <section className="header">
            <article className="featured-container fade-in">
                <div className="featured-category">
                    <h1>SHOP Fashion Category</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quo deserunt consequatur voluptatibus ratione nisi voluptatem, ullam veniam unde, sint perspiciatis, adipisci
                        dolorum odit animi laboriosam! Quidem quam iusto rerum?
                    </p>
                    <a className="btn" href="#">
                        View more
                    </a>
                </div>

                <div className="featured-product">
                    <div>
                        <small>{data.vendor.name}</small>
                        <h3>{data.name}</h3>
                        <div className="featured-product__review">
                            <div>
                                {...starMap}
                            </div>
                            <p>{data.reviews}</p>
                        </div>

                        <h2>${data.price/100}</h2>
                        <div className="featured-product__details">
                            <a href="">View more</a>
                            <GoArrowRight />
                        </div>
                    </div>

                    <div>
                        <img src={data.display_image} alt="product image" />
                    </div>
                </div>
            </article>
        </section>
    );
}

export default Header;
