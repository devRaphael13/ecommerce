import { FiArrowRightCircle } from "react-icons/fi";
import femaleImg from "../assets/women2.png";
import maleImg from "../assets/men3.png"

function Fashion({ gender, gender_light, url, category, pronoun, image }) {
    return (
        <article className={`fashion ${gender}`}>
            <div>
                <h3>Fashion styles for {pronoun} </h3>
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
            <Fashion gender="male" gender_light="malelight" pronoun="Him" image={maleImg} />
            <Fashion gender="female" gender_light="femalelight" pronoun="Her" image={femaleImg}/>
        </section>
    );
}

export default FashionList;
