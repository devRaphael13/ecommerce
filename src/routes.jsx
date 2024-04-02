import App from "./app/App"
import Home from "./home/home";

const routes = [
    {path: "/", element: <Home />, errorElement: <App />}
]

export default routes