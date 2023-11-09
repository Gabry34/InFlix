"use client";

import React, { useState } from "react";
import { GoSearch } from "react-icons/go";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      const url = `/search/${searchValue}`;
      window.location.href = url;
    }
  };

  const search = () => {
    const url = `/search/${searchValue}`;
    window.location.href = url;
  };

  return (
    <div className="flex items-center bg-customBlack rounded-full border-2 border-zinc-500 justify-center w-[350px] h-[35px] py-3 pl-3 pr-2 mr-4">
      <input
        type="text"
        className="bg-customBlack w-full py-0.5 focus:outline-0"
        placeholder="Search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={handleSearch}
      />
      <GoSearch
        size={24}
        className="cursor-pointer"
        onClick={() => {
          search();
        }}
      />
    </div>
  );
};

export default SearchBar;
