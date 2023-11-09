"use client";

import { useEffect, useState } from "react";
import React from "react";
import Nav from "@/components/Nav";
import axios from "axios";
import MovieCard from "@/components/MovieCard";

const SearchMovie = () => {
  const currentURL = window.location.href;
  const urlSegments = currentURL.split("/");
  const lastSegment = urlSegments[urlSegments.length - 1];
  const API_KEY = process.env.API_KEY;

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${lastSegment}&api_key=${API_KEY}&append_to_response=videos`
      )
      .then((response) => {
        const fetchedMovies = response.data.results;
        setMovies(fetchedMovies);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [lastSegment]);

  console.log(movies);

  return (
    <div className="">
      <Nav />
      <div className="w-full flex justify-center pt-10 pb-5">
        {movies.length > 0 ? (
          <h1 className="text-4xl">Results for "{decodeURI(lastSegment)}"</h1>
        ) : (
          <h1 className="text-4xl">
            No results found for "{decodeURI(lastSegment)}"
          </h1>
        )}
      </div>
      <div className="flex flex-wrap gap-2 pl-24 pt-10">
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
