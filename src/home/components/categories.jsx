import { GoArrowRight } from "react-icons/go";
import productImg from "../assets/tanjiro5.jpg";


function Category() {
    return (
        <article className="category">
            <div>
                <img src={productImg} alt="Category picture" />
                <h3>Category Name</h3>
            </div>
        </article>
    );
}

function Categories() {
    return (
        <section className="categories">
            <div>
                <h3>Shop by Category</h3>
                <div className="categories__list">
                    <a href="">View more</a>
                    <GoArrowRight />
                </div>
            </div>
            <div className="category-container">
                <Category />
                <Category />
                <Category />
                <Category />
                <Category />
                <Category />
                <Category />
            </div>
        </section>
    );
}

export default Categories;
