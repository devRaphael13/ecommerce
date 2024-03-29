import Spinner from "../../components/spinner";

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
            {
                data ? (
                    <div>{data.count ? data.results.map((vendor) => <Vendor key={vendor.id} vendor={vendor} />) : <p>There are no Vendors at the moment</p>}</div>
                ) : (
                    <Spinner />
                )
            }
        </section>
    );
}

export default VendorList;
