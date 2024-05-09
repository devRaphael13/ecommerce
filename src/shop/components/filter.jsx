import { FaStar } from "react-icons/fa6";
import Spinner from "../../components/spinner";
import { useEffect } from "react";

function Category({categories, categoryFilter }) {
    const cSelect = document.getElementsByClassName("c-select");

    for (let choice of cSelect) {
        choice.addEventListener("click", (e) => {
            categoryFilter.current = parseInt(e.target.value)
        });
    }
    return (
        <div className="filter">
            <h3>Category</h3>
            {categories ? (
                categories.count ? (
                    categories.results.map((category) => (
                        <div className="cat" key={category.id}>
                            <input className="c-select" type="radio" value={category.id} name="category" />
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
function Price({ priceFilter }) {
    useEffect(() => {
        const price = document.getElementById("price");
        const priceLabel = document.getElementById("price-label");

        if (price && priceLabel) {
            price.addEventListener("input", () => {
                priceFilter.current = parseInt(price.value);
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
            <input id="price" name="price" type="range" min="100" step="100" max="99999" />
        </div>
    );
}

function Rating({ ratingFilter }) {
    useEffect(() => {
        const starSelect = document.getElementsByClassName("star-filter");
        for (const elem of starSelect) {
            elem.addEventListener("click", (e) => {
                ratingFilter.current = parseInt(e.target.value);
            });
        }
    });

    return (
        <div className="filter">
            <h3>Rating</h3>
            <div>
                <div className="star-container">
                    <input type="radio" value="5" name="star-filter" className="star-filter" />
                    <div className="star-select">
                        <FaStar className="yellow_star" />
                        <FaStar className="yellow_star" />
                        <FaStar className="yellow_star" />
                        <FaStar className="yellow_star" />
                        <FaStar className="yellow_star" />
                    </div>
                </div>

                <div className="star-container">
                    <input type="radio" value="4" name="star-filter" className="star-filter" />
                    <div className="star-select">
                        <FaStar className="yellow_star" />
                        <FaStar className="yellow_star" />
                        <FaStar className="yellow_star" />
                        <FaStar className="yellow_star" />
                        <FaStar className="star" />
                        <span> & above</span>
                    </div>
                </div>

                <div className="star-container">
                    <input type="radio" value="3" name="star-filter" className="star-filter" />
                    <div className="star-select">
                        <FaStar className="yellow_star" />
                        <FaStar className="yellow_star" />
                        <FaStar className="yellow_star" />
                        <FaStar className="star" />
                        <FaStar className="star" />
                        <span> & above</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Filter({ data, categoryFilter, priceFilter, ratingFilter }) {
    return (
        <aside>
            <Category categories={data} categoryFilter={categoryFilter}/>
            <Price priceFilter={priceFilter} />
            <Rating ratingFilter={ratingFilter} />
            <button id="btn" className="filter-btn">
                APPLY
            </button>
        </aside>
    );
}

export default Filter;
