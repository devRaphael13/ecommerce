function Vendor({name}) {
    return (
        <article>
            <h3>{name}</h3>
        </article>
    )
}

function VendorList() {
    return (
        <section>
            <h2>Shop by vendors</h2>
            <Vendor name="Versace" />
            <Vendor name="Versace" />
            <Vendor name="Versace" />
            <Vendor name="Versace" />
            <Vendor name="Versace" />
        </section>
    );
}

export default VendorList