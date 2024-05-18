import { useEffect } from "react";
import { FiFilter } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { IoArrowDownSharp } from "react-icons/io5";
import { IoArrowUp } from "react-icons/io5";

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

        <button id="asc-btn">
          <IoArrowUp />
          Ascending
        </button>
        <button id="desc-btn">
          <IoArrowDownSharp />
          Descending
        </button>
        <button id="default-btn">
          <IoMdClose />
          Default
        </button>
      </div>
    </div>
  );
}

export default Ordering;
