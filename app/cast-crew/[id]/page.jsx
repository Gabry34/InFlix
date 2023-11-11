"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "@/components/Nav";
import CastCard from "@/components/CastCard";

const CastCrew = () => {
  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState({});
  const [crew, setCrew] = useState({});
  const currentURL = window.location.href;
  const urlSegments = currentURL.split("/");
  const lastSegment = urlSegments[urlSegments.length - 1];

  const removeDuplicates = (array) => {
    const uniqueArray = array.filter(
      (item, index, self) => index === self.findIndex((i) => i.id === item.id)
    );
    return uniqueArray;
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${lastSegment}?api_key=${process.env.API_KEY}&append_to_response=videos`
      )
      .then((response) => {
        const movieData = response.data;
        setMovie(movieData);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  console.log(movie);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${lastSegment}/credits?api_key=138dec1a639c4b6770dce3064a9d52e3&append_to_response=videos`
      )
      .then((response) => {
        const movieCast = response.data.cast;
        const uniqueCast = removeDuplicates(movieCast);
        setCast(uniqueCast);

        const movieCrew = response.data.crew;
        const uniqueCrew = removeDuplicates(movieCrew);
        setCrew(uniqueCrew);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  console.log(cast);
  return (
    <div>
      <Nav />
      <div className="px-44 py-16 flex flex-col gap-10">
        <h1 className=" text-center text-7xl">{movie.original_title}</h1>
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl">Cast</h1>
          <div className="flex flex-wrap gap-3">
            {Array.isArray(cast) &&
              cast.map((castMember) => (
                <div key={castMember.id}>
                  <CastCard cast={castMember} />
                </div>
              ))}
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl">Crew</h1>
          <div className="flex flex-wrap gap-3">
            {Array.isArray(crew) &&
              crew.map((castMember) => (
                <div key={castMember.id}>
                  <CastCard cast={castMember} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CastCrew;
