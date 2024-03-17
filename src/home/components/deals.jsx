import { GoArrowRight } from "react-icons/go";
import productImg from "../assets/bracelets.png";

function Deal({ name, text, image }) {
    return (
        <div className="deal">
            <div>
                <h3>{name}</h3>
                <p>{text}</p>
                <div>
                    <a href="">See more</a>
                    <GoArrowRight />
                </div>
            </div>
            <div>
                <img src={productImg} alt="" />
            </div>
        </div>
    );
}

function Deals() {
    return (
        <section className="deals">
            <Deal name="Daily Essentials" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore suscipit laudantium ratione deserun" />
            <Deal name="Deals & Promotions" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore suscipit laudantium ratione deserun" />
        </section>
    );
}

export default Deals;
