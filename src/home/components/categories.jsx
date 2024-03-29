import { GoArrowRight } from "react-icons/go";
import Spinner from "../../components/spinner";

function Category({ name }) {
    return (
        <article className="category">
            <h3>{name}</h3>
        </article>
    );
}

function Categories({ data }) {
    return (
        <section className="categories">
            <div>
                <h3>Shop by Category</h3>
                <div className="categories__list">
                    <a href="">View more</a>
                    <GoArrowRight />
                </div>
            </div>
            {data ? (
                <div className="category-container">{data.count ? data.results.map((cat) => <Category key={cat.id} name={cat.name} />) : <p>There are no Categories at the moment</p>}</div>
            ) : (
                <Spinner />
            )}
        </section>
    );
}

export default Categories;
