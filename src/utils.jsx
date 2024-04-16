import { FaStar } from "react-icons/fa6";

function dataFetch(url, func) {
    fetch(url, { method: "GET", mode: "cors", headers: { "Content-Type": "application/json" } })
        .then((data) => data.json())
        .then((data) => func(data))
        .catch((err) => console.log("error"));
}

function getStars(stars) {
    const starMap = [];

    for (let i = 0; i < 5; i++) {
        if (stars) {
            starMap.push(<FaStar className="yellow_star" />);
            stars -= 1;
        } else {
            starMap.push(<FaStar className="star" />);
        }
    }

    return starMap
}

export { dataFetch, getStars };
