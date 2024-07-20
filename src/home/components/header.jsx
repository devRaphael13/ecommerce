import { Link } from "react-router-dom";

import { FaStar } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { GoArrowRight } from "react-icons/go";
import { Product } from "../../components/product";
import Spinner from "../../components/spinner";

function Header({ data }) {
    if (!data) {
        return (
            <article className="spinner-margin">
                <Spinner padding_class="spinner-padding" />
            </article>
        );
    }

    const starMap = [];
    let stars = data.stars;

    for (let i = 0; i < 5; i++) {
        if (stars) {
            starMap.push(<FaStar className="yellow_star" />);
            stars -= 1;
        } else {
            starMap.push(<FaStar className="star" />);
        }
    }

    return (
        <section className="header">
            <article className="featured-container fade-in">
                <div className="featured-category">
                    <h1>Discover Our BestSellers</h1>
                    <p>
                        Revamp your wardrobe with our handpicked selection of bestsellers. From chic dresses to trendy accessories, find the perfect pieces to elevate your style. Our customers'
                        favorites are sure to become yours too!
                    </p>

                    <Link className="btn" to="/products">
                        View More
                    </Link>
                </div>

                <div className="featured-product">
                    <Swiper
                        spaceBetween={5}
                        slidesPerView={3}
                        loop={true}
                        pagination={{
                            dynamicBullets: true,
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay, Pagination]}
                        style={{
                            "--swiper-pagination-color": "#F59B2B",
                        }}
                    >
                        {data.results.map((product) => (
                            <SwiperSlide key={product.id}>
                                <Product product={product} featuredSlide="featured-slide" />
                            </SwiperSlide>
                        ))}
                        {data.results.map((product) => (
                            <SwiperSlide key={product.id}>
                                <Product product={product} featuredSlide="featured-slide" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </article>
        </section>
    );
}

export default Header;
