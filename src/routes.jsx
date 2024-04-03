import App from "./app/App"
import Home from "./home/home";
import Shop from "./shop/shop";

const routes = [
    {path: "/", element: <Home />, errorElement: <App />},
    {path: "/products", element: <Shop />}
]

export default routes