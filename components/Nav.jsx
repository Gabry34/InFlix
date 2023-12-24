import React from "react";
import Burger from "@/components/Burger";
import SearchBar from "@/components/SearchBar";

const Nav = () => {
  return (
    <div className="bg-customBlackNav w-full grid grid-cols-3 sticky top-0 z-40 p-2 px-0 sm:grid-cols-2">
      <div className="flex items-center h-10 gap-5">
        <Burger />
        <a className="text-3xl text-white" href="/" lang="x-inflix">
          In<span className="text-red-500">Flix</span>
        </a>
      </div>
      <div className="flex items-center justify-center gap-5 sm:hidden"></div>
      <div className="flex items-center justify-end w-full">
        <SearchBar />
      </div>
    </div>
  );
};

export default Nav;
