"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Categories from "@/data/categories.json";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

const PopularMovie = () => {
  const scrollContainerRef = React.useRef(null);

  const scrollSmooth = (element, to, duration) => {
    const start = element.scrollLeft;
    const change = to - start;
    const increment = 20;
    let currentTime = 0;

    const animateScroll = () => {
      currentTime += increment;
      const val = Math.easeInOutQuad(currentTime, start, change, duration);
      element.scrollLeft = val;
      if (currentTime < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    animateScroll();
  };

  Math.easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const slideRight = () => {
    const container = scrollContainerRef.current;
    const scrollAmount = container.clientWidth;
    const newScrollLeft = container.scrollLeft + scrollAmount;
    scrollSmooth(container, newScrollLeft, 700);
  };

  const slideLeft = () => {
    const container = scrollContainerRef.current;
    const scrollAmount = container.clientWidth;
    const newScrollLeft = container.scrollLeft - scrollAmount;
    scrollSmooth(container, newScrollLeft, 700);
  };

  return (
    <div className="w-full flex flex-col justify-center pt-20 px-10 pb-5 xs:px-3">
      <div className="w-full flex justify-center items-center">
        <div className="flex items-center justify-center sm:hidden">
          <IoIosArrowBack
            size={32}
            color="white"
            className="cursor-pointer"
            onClick={slideLeft}
          />
        </div>
        <div
          ref={scrollContainerRef}
          className="popular overflow-hidden overflow-x-scroll flex gap-3"
        >
          {Categories.map((category) => (
            <Link
              key={category.id}
              className="min-w-[300px] h-[150px] rounded-xl relative cursor-pointer"
              href={`/genre/${category.name}`}
            >
              <div className="w-full h-full relative z-10">
                <Image
                  src={category.image}
                  alt="image"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
              </div>
              <div className="w-full h-full bg-black absolute top-0 left-0 bg-opacity-60 rounded-xl z-10 p-2 flex items-end">
                <h1 className="text-2xl text-white font-Poppins">
                  {category.name}
                </h1>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex items-center justify-center sm:hidden">
          <IoIosArrowForward
            size={32}
            color="white"
            className="cursor-pointer"
            onClick={slideRight}
          />
        </div>
      </div>
    </div>
  );
};

export default PopularMovie;
