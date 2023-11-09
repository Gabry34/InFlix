"use client";

import { useEffect, useState } from "react";
import React from "react";
import Nav from "@/components/Nav";
import axios from "axios";
import MovieCard from "@/components/MovieCard";

const GenreMovie = () => {
  const currentURL = window.location.href;
  const urlSegments = currentURL.split("/");
  const lastSegment = urlSegments[urlSegments.length - 1];
  const API_KEY = process.env.API_KEY;

  const getGenreId = () => {
    if (lastSegment === "drama") {
      return 18;
    } else if (lastSegment === "horror") {
      return 27;
    } else if (lastSegment === "action") {
      return 28;
    } else if (lastSegment === "adventure") {
      return 12;
    } else if (lastSegment === "animation") {
      return 16;
    } else if (lastSegment === "comedy") {
      return 35;
    } else if (lastSegment === "crime") {
      return 80;
    } else if (lastSegment === "documentary") {
      return 99;
    } else if (lastSegment === "romance") {
      return 10749;
    } else if (lastSegment === "war") {
      return 10752;
    }
  };

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const genreId = getGenreId();

    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`
      )
      .then((response) => {
        const fetchedMovies = response.data.results;
        setMovies(fetchedMovies);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [lastSegment]);

  return (
    <div className="">
      <Nav />
      <div className="w-full flex justify-center pt-10 pb-5">
        <h1 className="text-4xl">{lastSegment}</h1>
      </div>
      <div className="flex flex-wrap gap-2 pl-24 pt-2">
        {movies.map((movie, index) => (
          <div key={index}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenreMovie;
