import { useState, useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

function NavBar() {
    const [size, setSize] = useState(window.innerWidth);

    useEffect(() => {
        const menu_items = document.getElementsByClassName("items");
        const menu = document.getElementById("menu");

        for (let x of menu_items) {
            if (size < 720) {
                x.style.display = "none";
                menu.style.display = "block";
            } else {
                x.style.display = "block";
                menu.style.display = "none";
            }
        }
    }, [size]);

    window.addEventListener("resize", (e) => {
        setSize(window.innerWidth);
    });

    // const dialog = document.getElementById("modal");
    // dialog.showModal();

    return (
        <nav>
            <dialog id="modal">
                <h2>Hello People</h2>
            </dialog>

            <ul>
                <li>
                    <a href="#">
                        <h3>ECOMMERCE</h3>
                    </a>
                </li>
                <li>
                    <a href="#">Products</a>
                </li>
                <li className="items">
                    <a href="#">Category</a>
                </li>
                <li className="items">
                    <a href="#">Today's Deals</a>
                </li>
                <li className="items">
                    <a href="#">Gift Cards</a>
                </li>
                <li className="items">
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

                <li id="menu">
                    <button>
                        <HiOutlineMenuAlt3 />
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
