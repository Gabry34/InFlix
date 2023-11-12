"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../cards/MovieCard";
import SmallMovieCard from "../cards/smallMovieCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const TopRatedMovies = ({ apiKey }) => {
  const [movies, setMovies] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const moviesPerPage = 6;
  const scrollContainerRef = React.useRef(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    console.log("API Key:", process.env.REACT_APP_API_KEY);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&append_to_response=videos`
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
  }, [moviesPerPage]);

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
    <div className="w-full flex flex-col justify-center py-10 px-10 md:py-0 xs:px-3">
      <h1 className="font-Poppins text-4xl mb-8 pl-7 md:mb-2 md:text-2xl xs:pl-0">
        Top Rated
      </h1>
      <div className="w-full flex justify-center items-center">
        <div className="flex items-center justify-center md:items-start md:justify-start md:min-h-[90px] xs:hidden">
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
              <div className="md:hidden">
                <MovieCard movie={movie} />
              </div>
              <div className="hidden md:block">
                <SmallMovieCard movie={movie} />
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center md:items-start md:justify-start md:min-h-[90px] xs:hidden">
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
