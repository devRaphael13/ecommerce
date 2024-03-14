import { GoSearch } from "react-icons/go";
function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <a href="#">
                        <h1>LOGO</h1>
                    </a>
                </li>

                <li>
                    <a href="#">Products</a>
                </li>
                <li>
                    <a href="#">Today's Deals</a>
                </li>
            </ul>

            <ul>
                <li>
                    <GoSearch />
                    <p>Search</p>
                </li>
                <li>Profile</li>
            </ul>
        </nav>
    );
}

export default NavBar