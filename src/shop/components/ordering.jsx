import { useEffect } from "react";
import { FiFilter } from "react-icons/fi";

function Ordering({ showFilter, setShowFilter }) {
    useEffect(() => {
        const filterBtn = document.getElementById("filter");
        if (filterBtn) {
            filterBtn.addEventListener("click", () => {
                if (window.innerWidth < 720) setShowFilter(!showFilter);
            });
        }
    });

    return (
        <div className="ordering">
            <div>
                {window.innerWidth < 720 && (
                    <button id="filter">
                        <FiFilter />
                    </button>
                )}

                <button>Ascending</button>
                <button>Descending</button>
            </div>
        </div>
    );
}

export default Ordering;
