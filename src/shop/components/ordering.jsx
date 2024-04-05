import { useEffect } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

function Ordering({ size, showFilter, setShowFilter }) {
    useEffect(() => {
        const filterBtn = document.getElementById("filter");
        if (filterBtn) {
            filterBtn.addEventListener("click", () => {
                if (size < 720) setShowFilter(!showFilter);
            });
        }
    });

    return (
        <div className="ordering">
            <div>
                {size < 720 && (
                    <button id="filter">
                        <HiOutlineMenuAlt3 />
                    </button>
                )}

                <button>Ascending</button>
                <button>Descending</button>
            </div>
        </div>
    );
}

export default Ordering;
