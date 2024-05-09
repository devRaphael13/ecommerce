import { GoArrowRight } from "react-icons/go";
import Spinner from "../../components/spinner";
import { Link } from "react-router-dom";

function Category({ name }) {
    return (
        <Link to="/products">
            <article className="category fade-in">
                <h3>{name}</h3>
            </article>
        </Link>
    );
}

function Categories({ data }) {
    return (
        <section className="categories">
            <div>
                <h2>Shop by Category</h2>
                <div className="categories__list">
                    <a href="">View more</a>
                    <GoArrowRight />
                </div>
            </div>
            {data ? (
                <div className="category-container">
                    {data.count ? data.results.map((cat) => <Category key={cat.id} name={cat.name} />) : <p>There are no Categories at the moment</p>}
                </div>
            ) : (
                <Spinner />
            )}
        </section>
    );
}

export default Categories;
