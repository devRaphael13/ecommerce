import { Link } from "react-router-dom";
import Spinner from "../../components/spinner";

function Vendor({ vendor }) {
    const tbackground = vendor.logo ? `url(${vendor.logo})` : "#E6EAE7";
    return (
        <Link to="/products">
            <article style={{ background: tbackground, backgroundPosition: "center" }}>
                <h3>{vendor.name}</h3>
            </article>
        </Link>
    );
}

function VendorList({ data }) {
    return (
        <section className="vendors">
            <h2>Shop by vendors</h2>
            {data ? <div>{data.count ? data.results.map((vendor) => <Vendor key={vendor.id} vendor={vendor} />) : <p>There are no Vendors at the moment</p>}</div> : <Spinner />}
        </section>
    );
}

export default VendorList;
