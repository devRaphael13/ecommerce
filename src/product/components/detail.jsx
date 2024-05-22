import { MdAddShoppingCart } from "react-icons/md";
import { getStars } from "../../utils";
import Spinner from "../../components/spinner";

function Detail({ product }) {
    return (
        <>
            {product ? (
                <main>
                    <div className="product-detail-image">
                        <div>
                            <img src={product.display_image} alt="Product image" />
                        </div>

                        <div>{/* Baby images for scrolling */}</div>
                        
                    </div>
                    
                    <div>
                        <h2 className="product-name">{product.name}</h2>
                        <h2>${product.price / 100}</h2>
                        {product.is_available ? <p>In Stock</p> : <p>Out Of Stock</p>}
                        <div>
                            {...getStars(product.stars)}
                            <span>({product.reviews} verified reviews)</span>
                        </div>
                        <button className="add-to-cart-btn">
                            ADD TO CART
                            <MdAddShoppingCart size={20} />
                        </button>
                    </div>
                </main>
            ) : (
                <Spinner />
            )}
        </>
    );
}

export default Detail;
