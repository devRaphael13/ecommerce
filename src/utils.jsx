function dataFetch(url, func) {
    fetch(url, { method: "GET", mode: "cors", headers: { "Content-Type": "application/json" } })
        .then((data) => data.json())
        .then((data) => func(data));
}

export default dataFetch;
