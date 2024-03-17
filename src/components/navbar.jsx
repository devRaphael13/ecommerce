import { GoSearch } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";

function NavBar() {
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
                <li>
                    <a href="#">Today's Deals</a>
                </li>
                <li>
                    <a href="#">Gift Cards</a>
                </li>
                <li>
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
