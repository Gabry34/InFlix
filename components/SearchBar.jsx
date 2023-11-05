"use client";

import React, { useState } from "react";
import axios from "axios";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      const url = `/Search/${searchValue}`;
      window.location.href = url;
    }
  };

  return (
    <div className="flex items-center bg-customBlack rounded-full border-2 border-zinc-500 justify-center w-[350px] h-[35px] p-3 px-4 mr-4">
      <input
        type="text"
        className="bg-customBlack w-full py-0.5 focus:outline-0"
        placeholder="Search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={handleSearch}
      />
      <img
        src="http://localhost:3000/src/assets/search.svg"
        className="w-5 h-[18px]"
      />
    </div>
  );
};

export default SearchBar;
