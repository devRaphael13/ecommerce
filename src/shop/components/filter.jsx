import { FaStar } from "react-icons/fa6";
import Spinner from "../../components/spinner";
import { useEffect } from "react";

function Category({ categories }) {
    return (
        <div className="filter">
            <h3>Category</h3>
            {categories ? (
                categories.count ? (
                    categories.results.map((category) => (
                        <div className="cat" key={category.id}>
                            <input type="radio" />
                            <label htmlFor={category.name}>{category.name}</label>
                        </div>
                    ))
                ) : (
                    <p>There's nothing to show</p>
                )
            ) : (
                <Spinner />
            )}
        </div>
    );
}
function Price() {
    useEffect(() => {
        const price = document.getElementById("price");
        const priceLabel = document.getElementById("price-label");

        if (price && priceLabel) {
            price.addEventListener("input", () => {
                priceLabel.innerHTML = `$ ${price.value}`;
            });
        }
    });

    return (
        <div className="filter">
            <h3>Price</h3>
            <label id="price-label" htmlFor="price">
                $ 0
            </label>
            <input id="price" name="price" type="range" min="1" step="1" max="99999" />
        </div>
    );
}

function Rating() {
    return (
        <div className="filter">
            <h3>Rating</h3>
            <div>
                <div>
                    <FaStar className="yellow_star" />
                    <FaStar className="yellow_star" />
                    <FaStar className="yellow_star" />
                    <FaStar className="yellow_star" />
                    <FaStar className="yellow_star" />
                </div>
                <div>
                    <FaStar className="yellow_star" />
                    <FaStar className="yellow_star" />
                    <FaStar className="yellow_star" />
                    <FaStar className="yellow_star" />
                    <FaStar className="star" />
                    <span> & above</span>
                </div>

                <div>
                    <FaStar className="yellow_star" />
                    <FaStar className="yellow_star" />
                    <FaStar className="yellow_star" />
                    <FaStar className="star" />
                    <FaStar className="star" />
                    <span> & above</span>
                </div>
            </div>
        </div>
    );
}

function Filter({ data }) {
    return (
        <aside>
            <Category categories={data} />
            <Price />
            <Rating />
        </aside>
    );
}

export default Filter;
