import React from "react";

export function Slider() {
  return (
    <div className="bg-white ml-5 mr-5 p-5 rounded-xl w-3/12 sticky">
      <h1 className="font-bold text-xl py-3">Sort</h1>
      <button className="btn bg-red-300 p-2 m-1 rounded text-white">
        Price : Low To High
      </button>
      <button className="btn bg-red-300 p-2 m-1 rounded text-white">
        Price : High to Low
      </button>
      <h1 className="font-bold text-xl py-3">Filter</h1>
    </div>
  );
}
