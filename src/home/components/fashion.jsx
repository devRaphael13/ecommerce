function Fashion({ gender, url, category }) {
    return (
        <section className={gender}>
            <h1>
                {gender}
            </h1>
            <div>
                <h3>Fashion styles for him/her</h3>
                <p>Shop male/female clothings shoes and jwelleries</p>

                <a href="#">
                    <div>
                        <img src="" alt="sub category image" />
                        arrow svg
                    </div>
                </a>
            </div>
            <div>
                <img src="" alt="Category Image" />
            </div>
        </section>
    );
}

export default Fashion