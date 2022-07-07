import React from "react";

export function Slider({ sidebar, storeProductsData, setProductsData }) {
  const sortByAscendingPrice = () => {
    setProductsData((prev) => {
      const copyArray = [...prev];
      return copyArray.sort((a, b) => {
        return a.price - b.price;
      });
    });
  };

  const sortByDecendingPrice = () => {
    setProductsData((prev) => {
      const copyArray = [...prev];
      return copyArray.sort((a, b) => {
        return b.price - a.price;
      });
    });
  };

  const filterbyPrice = (e) => {
    const filteredArray = storeProductsData.filter((item) => {
      return item.price >= e.target.value;
    });

    setProductsData(filteredArray);
  };

  return (
    <div className={sidebar ? "sidebar-active" : "sidebar"}>
      <h1 className="font-bold text-xl py-3">Sort</h1>
      <button
        className="btn bg-red-300 p-2 m-1 rounded text-white"
        onClick={sortByAscendingPrice}
      >
        Price : Low To High
      </button>
      <button
        className="btn bg-red-300 p-2 m-1 rounded text-white"
        onClick={sortByDecendingPrice}
      >
        Price : High to Low
      </button>
      <h1 className="font-bold text-xl py-3">Filter By price</h1>
      <div className="flex flex-col">
        <label>
          <input type="checkbox" value={5} onChange={filterbyPrice} /> $5 and
          ABOVE
        </label>
        <label>
          <input type="checkbox" value={40} onChange={filterbyPrice} /> $40 and
          ABOVE
        </label>
        <label>
          <input type="checkbox" value={80} onChange={filterbyPrice} /> $80 and
          ABOVE
        </label>
        <label>
          <input type="checkbox" value={110} onChange={filterbyPrice} /> $110
          and ABOVE
        </label>
        <label>
          <input type="checkbox" value={200} onChange={filterbyPrice} /> $200
          and ABOVE
        </label>
      </div>
    </div>
  );
}
