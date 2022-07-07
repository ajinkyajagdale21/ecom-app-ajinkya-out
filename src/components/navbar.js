import React from "react";

export function Navbar({ sidebar, showSidebar }) {
  return (
    <nav className="w-full p-7 rounded-b-lg flex justify-center items-center sticky top-0 left-0 mb-5 bg-white shadow-lg shadow-slate-200  ">
      {sidebar ? (
        <i
          className="fa-solid fa-xmark fa-2x  absolute left-8"
          onClick={showSidebar}
        ></i>
      ) : (
        <i
          className="fa-solid fa-bars fa-2x  absolute left-8 "
          onClick={showSidebar}
        ></i>
      )}
      <h1 className="text-pink-500 text-3xl font-semibold">Cart IT!</h1>
    </nav>
  );
}
