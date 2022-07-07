import React from "react";

export const Pagination = ({ setVisibleItems, loading }) => {
  function showMoreItems() {
    setVisibleItems((prev) => prev + 15);
  }

  return (
    <div className="flex items-center justify-center ">
      {loading ? (
        ""
      ) : (
        <button
          className="btn bg-red-400 m-5 p-2 text-xl  text-white font-bold rounded-md"
          onClick={showMoreItems}
        >
          Load more ...
        </button>
      )}
    </div>
  );
};
