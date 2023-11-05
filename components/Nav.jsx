import React from "react";
import Burger from "./burger";
import SearchBar from "./SearchBar";

const Nav = () => {
  return (
    <div className="bg-customBlackNav w-full grid grid-cols-3 sticky top-0 z-40 p-2 px-0">
      <div className="flex items-center h-10 gap-5">
        <Burger />
        <a className="text-3xl" href="/">
          In<span className="text-red-500">Flix</span>
        </a>
      </div>
      <div className="flex items-center justify-center gap-5">
        <a href="" className="text-sm">
          About Us
        </a>
        <a href="" className="text-sm">
          Features
        </a>
      </div>
      <div className="flex items-center justify-end w-full">
        <SearchBar />
      </div>
    </div>
  );
};

export default Nav;
