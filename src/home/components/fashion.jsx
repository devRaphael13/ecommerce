import { FiArrowRightCircle } from "react-icons/fi";
import productImg from "../assets/bracelets.png";

function Fashion({ gender, gender_light, url, category, pronoun }) {
    return (
        <article className={`fashion ${gender}`}>
            <div>
                <h3>Fashion styles for {pronoun} </h3>
                <p>Shop {gender} clothings shoes and jwelleries</p>

                <a href="#">
                    <div className={`${gender_light}`}>
                        <img src={productImg} alt="sub category image" />
                        <p>Top product in these category</p>
                        <FiArrowRightCircle />
                    </div>
                </a>
            </div>
            <div className="fashion__category-image">
                <img src={productImg} alt="Category Image" />
            </div>
        </article>
    );
}

function FashionList() {
    return (
        <section className="fashions">
            <Fashion gender="male" gender_light="malelight" pronoun="Him" />
            <Fashion gender="female" gender_light="femalelight" pronoun="Her" />
        </section>
    );
}

export default FashionList;
