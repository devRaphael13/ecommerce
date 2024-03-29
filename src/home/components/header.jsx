import { FaStar } from "react-icons/fa6";

import { GoArrowRight } from "react-icons/go";
import productImg from "../assets/shirt.png";
import Spinner from "../../components/spinner";

function Header({ data }) {
    if (!data) {
        return (
            <article className="spinner-margin">
                <Spinner padding_class="spinner-padding" />
            </article>
        );
    }

    return (
        <section className="header">
            <article className="featured-container">
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
                        <small>Versace</small>
                        <h3>Rose gold and black bracelets for Men</h3>
                        <div className="featured-product__review">
                            <div>
                                <FaStar className="star" />
                                <FaStar className="star" />
                                <FaStar className="star" />
                                <FaStar className="star" />
                                <FaStar className="star" />
                            </div>
                            <p>45 reviews</p>
                        </div>

                        <h2>$49.99</h2>
                        <div className="featured-product__details">
                            <a href="">View more</a>
                            <GoArrowRight />
                        </div>
                    </div>

                    <div>
                        <img src={productImg} alt="product image" />
                    </div>
                </div>
            </article>
        </section>
    );
}

export default Header;
