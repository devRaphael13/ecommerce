import { FiArrowRightCircle } from "react-icons/fi";

function Fashion({ gender, gender_light, url, category, pronoun, image }) {
    return (
        <article className={`fashion ${gender}`}>
            <div>
                <h2>Fashion styles for {pronoun} </h2>
                <p>Shop {gender} clothings shoes and jwelleries</p>

                <a href="#">
                    <div className={`${gender_light}`}>
                        <p>View Top Products</p>
                        <FiArrowRightCircle />
                    </div>
                </a>
            </div>
        </article>
    );
}

function FashionList() {
    return (
        <section className="fashions">
            <Fashion gender="male" gender_light="malelight" pronoun="Him"/>
            <Fashion gender="female" gender_light="femalelight" pronoun="Her"/>
        </section>
    );
}

export default FashionList;
