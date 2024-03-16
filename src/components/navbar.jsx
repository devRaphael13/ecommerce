import { GoSearch } from "react-icons/go";
import { FiUser } from "react-icons/fi";
import { BsCart2 } from "react-icons/bs";

function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <a href="#">
                        <h3>LOGO</h3>
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
                    <GoSearch />
                </li>
                <li>
                    <FiUser />
                </li>
                <li>
                    <button>
                        <BsCart2 />
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
