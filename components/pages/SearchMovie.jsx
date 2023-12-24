"use client";

import { useEffect, useState } from "react";
import React from "react";
import Nav from "@/components/Nav";
import axios from "axios";
import MovieCard from "@/components/cards/MovieCard";

const SearchMovie = ({ apiKey }) => {
  const [movies, setMovies] = useState([]);
  const currentURL = window.location.href;
  const urlSegments = currentURL.split("/");
  const lastSegment = urlSegments[urlSegments.length - 1];

  useEffect(() => {
    const currentURL = window.location.href;
    const urlSegments = currentURL.split("/");
    const lastSegment = urlSegments[urlSegments.length - 1];
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${lastSegment}&api_key=${apiKey}&append_to_response=videos`
      )
      .then((response) => {
        const fetchedMovies = response.data.results;
        setMovies(fetchedMovies);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  console.log(movies);

  return (
    <div className="w-full">
      <Nav />
      <div className="w-full flex justify-center pt-10 pb-5">
        {movies.length > 0 ? (
          <h1 className="text-4xl text-white">
            Results for &ldquo;{decodeURI(lastSegment)}&rdquo;
          </h1>
        ) : (
          <h1 className="text-4xl text-white">
            No results found for &ldquo;{decodeURI(lastSegment)}&rdquo;
          </h1>
        )}
      </div>
      <div className="flex flex-wrap justify-center gap-2 pt-10">
        {movies.map((movie, index) => (
          <div key={index}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchMovie;
