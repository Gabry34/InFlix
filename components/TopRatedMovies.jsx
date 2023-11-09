"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const TopRatedMovies = () => {
  const [movies, setMovies] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const moviesPerPage = 6;
  const scrollContainerRef = React.useRef(null);
  const API_KEY = process.env.API_KEY;

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&append_to_response=videos`
      )
      .then((response) => {
        const allMovies = response.data.results;
        setMovies([
          ...allMovies.slice(-moviesPerPage),
          ...allMovies,
          ...allMovies.slice(0, moviesPerPage),
        ]);
        setStartIndex(moviesPerPage);
        console.log(movies);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

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
    <div className="w-full flex flex-col justify-center py-10 px-10">
      <h1 className="font-Poppins text-4xl mb-8 pl-7">Top Rated</h1>
      <div className="w-full flex justify-center items-center">
        <div className="flex items-center justify-center">
          <IoIosArrowBack
            size={32}
            className="cursor-pointer"
            onClick={slideLeft}
          />
        </div>
        <div
          ref={scrollContainerRef}
          className="popular overflow-hidden overflow-x-scroll flex gap-2"
        >
          {movies.map((movie, index) => (
            <div key={index}>
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <IoIosArrowForward
            size={32}
            className="cursor-pointer"
            onClick={slideRight}
          />
        </div>
      </div>
    </div>
  );
};

export default TopRatedMovies;
