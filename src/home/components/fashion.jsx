import { FiArrowRightCircle } from "react-icons/fi";

function Fashion({ gender, url, category }) {
    return (
        <article className={gender}>
            <div>
                <h3>Fashion styles for him/her</h3>
                <p>Shop male/female clothings shoes and jwelleries</p>

                <a href="#">
                    <div>
                        <img src="" alt="sub category image" />
                        <FiArrowRightCircle />
                    </div>
                </a>
            </div>
            <div>
                <img src="" alt="Category Image" />
            </div>
        </article>
    );
}

function FashionList() {
    return (
        <section>
            <Fashion gender="male" />
            <Fashion gender="female" />
        </section>
    );
}

export default FashionList;
