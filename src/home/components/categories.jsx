import { GoArrowRight } from "react-icons/go";

function Category({ name}) {
    return (
        <article className="category">
            <h3>{name}</h3>
        </article>
    );
}

function Categories({data}) {
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
                {
                    data ? data.results.map((cat) => <Category key={cat.id} name={cat.name} />): <h3>No categories available</h3>
                }
            </div>
        </section>
    );
}

export default Categories;
