import productImg from "../assets/bracelets.png";

function Vendor({ vendor }) {
    const tbackground = vendor.logo ? `url(${vendor.logo})` : "#E6EAE7";
    return (
        <article style={{ background: tbackground, backgroundPosition: "center" }}>
            <h3>{vendor.name}</h3>
        </article>
    );
}

function VendorList({ data }) {
    return (
        <section className="vendors">
            <h3>Shop by vendors</h3>
            <div>{data ? data.results.map((vendor) => <Vendor key={vendor.id} vendor={vendor} />) : <h3>No Vendors available</h3>}</div>
        </section>
    );
}

export default VendorList;
