function Spinner({padding_class}) {
    return (
        <article className={`spinner ${padding_class}`}>
            <span className="loader"></span>;
        </article>
    );
}

export default Spinner;
