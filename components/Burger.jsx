import React from "react";

const burger = () => {
  return (
    <div className="dropdown pl-1">
      <label
        className=" btn-solid-primary my-2 rounded-none bg-transparent"
        tabIndex="0"
      >
        <div className="h-10 flex items-center">
          <button className="relative group">
            <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all ring-0 ring-gray-300">
              <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10"></div>
                <div className="bg-white h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10 delay-75"></div>
                <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10 delay-150"></div>

                <div className="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12">
                  <div className="absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45"></div>
                  <div className="absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45"></div>
                </div>
              </div>
            </div>
          </button>
        </div>
      </label>
      <div className="dropdown-menu dropdown-menu-bottom-right rounded-none bg-customBlackNav py-0 mt-2 w-96 rounded-br-lg border-none">
        <a className=" pl-2 pt-5">CATEGORIES</a>
        <a tabIndex="-1" className="dropdown-item text-sm" href="/genre/drama">
          Drama
        </a>
        <a tabIndex="-1" className="dropdown-item text-sm" href="/genre/horror">
          Horror
        </a>
        <a tabIndex="-1" className="dropdown-item text-sm" href="/genre/action">
          Action
        </a>
        <a
          tabIndex="-1"
          className="dropdown-item text-sm"
          href="/genre/adventure"
        >
          Adventure
        </a>
        <a
          tabIndex="-1"
          className="dropdown-item text-sm"
          href="/genre/animation"
        >
          Animation
        </a>
        <a tabIndex="-1" className="dropdown-item text-sm" href="/genre/comedy">
          Comedy
        </a>
        <a tabIndex="-1" className="dropdown-item text-sm" href="/genre/crime">
          Crime
        </a>
        <a
          tabIndex="-1"
          className="dropdown-item text-sm"
          href="/genre/documentary"
        >
          Documentary
        </a>
        <a
          tabIndex="-1"
          className="dropdown-item text-sm"
          href="/genre/romance"
        >
          Romance
        </a>
        <a tabIndex="-1" className="dropdown-item text-sm" href="/genre/war">
          War
        </a>
        <div className="w-6/6 h-0.1 border border-white opacity-10 my-2"></div>
        <a tabIndex="-1" className="dropdown-item text-sm">
          About Us
        </a>
        <a tabIndex="-1" className="dropdown-item text-sm mb-3">
          Features
        </a>
      </div>
    </div>
  );
};

export default burger;
