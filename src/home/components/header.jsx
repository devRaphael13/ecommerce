import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";

import { GoArrowRight } from "react-icons/go";
import productImg from "../assets/bracelets.png"

function Featured({ name, text, product }) {
    return (
        <article className="featured-container">
            <div className="featured-category">
                <h1>SHOP {name}</h1>
                <p>{text}</p>
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
    );
}

function Header() {
    return (
        <section className="header">
            <Featured name="Men's Fashion" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea sint neque, ipsum laboriosam perferendis" />
        </section>
    );
}

export default Header;
