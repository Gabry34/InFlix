"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "@/components/Nav";
import Image from "next/image";

const Person = () => {
  const [person, setPerson] = useState({});
  const [personMovies, setPersonMovies] = useState({});

  useEffect(() => {
    const currentURL = window.location.href;
    const urlSegments = currentURL.split("/");
    const lastSegment = urlSegments[urlSegments.length - 1];
    axios
      .get(
        `https://api.themoviedb.org/3/person/${lastSegment}?api_key=${process.env.API_KEY}&append_to_response=videos`
      )
      .then((response) => {
        const personData = response.data;
        setPerson(personData);

        axios
          .get(
            `https://api.themoviedb.org/3/person/${personData.id}/movie_credits?api_key=138dec1a639c4b6770dce3064a9d52e3&append_to_response=videos`
          )
          .then((response) => {
            const personMoviesData = response.data.cast;
            setPersonMovies(personMoviesData);
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  console.log(person);
  console.log(personMovies);

  const getImage = (image) => {
    return "https://www.themoviedb.org/t/p/w300_and_h450_bestv2" + image;
  };

  const getImageMovie = (image) => {
    return "https://www.themoviedb.org/t/p/w250_and_h141_face" + image;
  };

  const getGender = (n) => {
    if (n === 1) {
      return "Female";
    } else {
      return "Male";
    }
  };

  let year = new Date().getFullYear();

  const getAge = (year, birth) => {
    return year - new Date(birth).getFullYear();
  };
  const currentYear = new Date().getFullYear();

  const infoMovie = (id) => {
    const url = `/info/${id}`;
    window.location.href = url;
  };

  console.log(person);
  return (
    <div>
      <Nav />
      <div className="w-full px-48 py-20 flex flex-col gap-5">
        <div className="flex gap-10">
          <div className="w-1/4">
            <Image
              src={getImage(person.profile_path)}
              alt="image"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="w-3/4 flex flex-col gap-5">
            <h1 className="text-4xl pb-3 mb-3">{person.name}</h1>
            <div className="flex flex-col gap-6">
              <div className="flex gap-3">
                <strong>Known for:</strong>
                <p>{person.known_for_department}</p>
              </div>
              <div className="flex gap-3">
                <strong>Gender:</strong>
                <p>{getGender(person.gender)}</p>
              </div>
              <div className="flex gap-3">
                <strong>Birthday:</strong>
                <p>
                  {person.birthday} ({getAge(currentYear, person.birthday)}{" "}
                  years old)
                </p>
              </div>
              <div className="flex gap-3">
                <strong>Birth place:</strong>
                <p>{person.place_of_birth}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4">
          <h1 className="text-3xl">Biography</h1>
          <p>{person.biography}</p>
        </div>
        <div className="pt-3">
          <h1 className="text-3xl">Famous movies</h1>
          <div className="personmovies overflow-hidden overflow-x-scroll flex gap-3 mt-2">
            {Array.isArray(personMovies) &&
              personMovies.map((movie) => (
                <div
                  className="min-w-[250px] flex flex-col gap-1 cursor-pointer"
                  onClick={() => infoMovie(movie.id)}
                >
                  <div>
                    {movie.backdrop_path ? (
                      <Image
                        src={getImageMovie(movie.backdrop_path)}
                        alt="image"
                        width={300}
                        height={200}
                        className="rounded-md"
                      />
                    ) : (
                      <Image
                        src="/NoPersonMovieImage.png"
                        alt="image"
                        width={300}
                        height={200}
                        className="rounded-md"
                      />
                    )}
                  </div>
                  <p key={movie.id} className="pb-1">
                    {movie.title}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Person;
