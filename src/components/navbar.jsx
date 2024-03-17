import { GoSearch } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";

function NavBar() {
    const menu_items = document.getElementsByClassName("menu");

    window.addEventListener("resize", (e) => {
        for (let x of menu_items) {
            if (window.innerWidth < 720) {
                x.style.display = "none";
            } else {
                x.style.display = "block";
            }
        }
    });

    return (
        <nav>
            <ul>
                <li>
                    <a href="#">
                        <h3>ECOMMERCE</h3>
                    </a>
                </li>
                <li>
                    <a href="#">Products</a>
                </li>
                <li className="menu">
                    <a href="#">Today's Deals</a>
                </li>
                <li className="menu">
                    <a href="#">Gift Cards</a>
                </li>
                <li className="menu">
                    <a href="#">Registry & Gifting</a>
                </li>
            </ul>

            <ul>
                <li>
                    <IoSearchOutline />
                </li>
                <li>
                    <FiUser />
                </li>
                <li>
                    <button>
                        <IoCartOutline />
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
