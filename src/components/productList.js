import React from "react";
import { truncateString } from "../util";

export function ProductList({ productsData, loading }) {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 w-11/12 lg:w-3/3 mx-2 ">
      {loading ? (
        <h1 className="text-4xl text-center font-bold">Loading.....</h1>
      ) : (
        productsData.map((item) => (
          <div
            className="bg-white p-3 m-3 rounded-md flex justify-center items-center flex-col "
            key={item.id}
          >
            <img
              src={item.image}
              alt="product"
              style={{ width: "200px", height: "300px" }}
              className="py-5"
            />
            <p className="py-2 font-bold">{truncateString(item.title, 20)}</p>
            <p className="font-medium text-lg">$ {item.price}</p>
          </div>
        ))
      )}
    </div>
  );
}
