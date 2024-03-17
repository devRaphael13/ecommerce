function Vendor({ name }) {
    return (
        <article>
            <h3>{name}</h3>
        </article>
    );
}

function VendorList() {
    return (
        <section className="vendors">
            <h3>Shop by vendors</h3>
            <div>
                <Vendor name="Versace" />
                <Vendor name="Versace" />
                <Vendor name="Versace" />
                <Vendor name="Versace" />
                <Vendor name="Versace" /> 
                <Vendor name="Versace" />
                <Vendor name="Versace" />
                <Vendor name="Versace" />
                <Vendor name="Versace" />
                <Vendor name="Versace" />
            </div>
        </section>
    );
}

export default VendorList;
