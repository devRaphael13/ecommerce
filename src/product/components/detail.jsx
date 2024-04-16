import { MdAddShoppingCart } from "react-icons/md";
import { getStars } from "../../utils";

function Detail({ product }) {
    return (
        <main>
            <div>
                <div>
                    <img src={product.display_image} alt="Product image" />
                </div>
                <div>
                    <div>smaller images</div>
                    <div>smaller images</div>
                    <div>smaller images</div>
                    <div>smaller images</div>
                </div>
            </div>
            <div>
                <h2 className="product-name">{product.name}</h2>
                <h2>${product.price / 100}</h2>
                {product.is_available ? <p>In Stock</p> : <p>Out Of Stock</p>}
                {...getStars(product.stars)} <span>({product.reviews} verified reviews)</span>
                <button>
                    ADD TO CART
                    <MdAddShoppingCart />
                </button>
            </div>
        </main>
    );
}

export default Detail;
