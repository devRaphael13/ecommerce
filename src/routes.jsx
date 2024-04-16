import App from "./app/App";
import Home from "./home/home";
import Shop from "./shop/shop";
import ProductDetail from "./product/product";

const routes = [
    { path: "/", element: <Home />, errorElement: <App /> },
    { path: "/products", element: <Shop /> },
    { path: "/products/:productId", element: <ProductDetail /> },
];

export default routes;
