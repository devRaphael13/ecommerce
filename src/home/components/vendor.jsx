import productImg from "../assets/bracelets.png";

function Vendor({ name, image }) {
    return (
        <article style={{ background: `url(${productImg})`, backgroundPosition: "center" }}>
            <h3>{name}</h3>
        </article>
    );
}

function VendorList() {
    return (
        <section className="vendors">
            <h3>Shop by vendors</h3>
            <div>
                <Vendor name="Versace" image={productImg} />
                <Vendor name="Versace" image={productImg} />
                <Vendor name="Versace" image={productImg} />
                <Vendor name="Versace" image={productImg} />
                <Vendor name="Versace" image={productImg} />
                <Vendor name="Versace" image={productImg} />
                <Vendor name="Versace" image={productImg} />
                <Vendor name="Versace" image={productImg} />
                <Vendor name="Versace" image={productImg} />
                <Vendor name="Versace" image={productImg} />
            </div>
        </section>
    );
}

export default VendorList;
