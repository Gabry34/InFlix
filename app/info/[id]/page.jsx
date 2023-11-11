"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "@/components/Nav";
import CastCard from "@/components/CastCard";
import Video from "@/components/Video";
import Image from "next/image";
import { FiPlay } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";

const InfoMovie = () => {
  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState({});
  const [video, setVideo] = useState({});

  useEffect(() => {
    const currentURL = window.location.href;
    const urlSegments = currentURL.split("/");
    const lastSegment = urlSegments[urlSegments.length - 1];
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${lastSegment}?api_key=${process.env.API_KEY}&append_to_response=videos`
      )
      .then((response) => {
        const movieData = response.data;
        setMovie(movieData);
        console.log(response.data.videos.results);
        const videos = response.data.videos.results;
        setVideo(videos);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    const currentURL = window.location.href;
    const urlSegments = currentURL.split("/");
    const lastSegment = urlSegments[urlSegments.length - 1];
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${lastSegment}/credits?api_key=138dec1a639c4b6770dce3064a9d52e3&append_to_response=videos`
      )
      .then((response) => {
        const movieCast = response.data.cast;
        setCast(movieCast);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  console.log(movie);

  const convertMinutesToHoursAndMinutes = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  };

  const getImageBig = (image) => {
    return "https://www.themoviedb.org/t/p/w1920_and_h800_face" + image;
  };

  const getImageSmall = (image) => {
    return "https://www.themoviedb.org/t/p/w300_and_h450_bestv2" + image;
  };

  const fallbackImage = "http://localhost:3000/src/assets/NoBackground.jpg";

  const backdropImage = movie.backdrop_path
    ? getImageBig(movie.backdrop_path)
    : fallbackImage;

  const openTrailer = () => {
    window.open(
      `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`,
      "_blank"
    );
  };

  const formatBudget = (budget) => {
    if (budget) {
      return budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    return "N/A";
  };

  const CastCrew = () => {
    const url = `/cast-crew/${movie.id}`;
    window.location.href = url;
  };

  return (
    <div>
      <Nav />
      <div
        className="w-full relative text-white p-0 h-[700px]"
        style={{
          backgroundImage: `url(${backdropImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className=" bg-black opacity-90 w-full h-full flex justify-center">
          <div className="px-52 py-28 w-full h-full flex">
            <div className="h-full flex items-center min-w-[320px]">
              <Image
                src={getImageSmall(movie.poster_path)}
                alt={movie.original_title}
                width={500}
                height={500}
                className="rounded-md"
              />
            </div>
            <div className="py-20 px-10 flex flex-col gap-2">
              <div>
                <h1 className="text-5xl font-Poppins">
                  {movie.original_title}
                </h1>
              </div>
              <div className="flex gap-2 items-center">
                <div className=" border-white rounded-sm border-[1px] w-5 flex items-center justify-center h-6">
                  T
                </div>
                <p className="">
                  {movie.release_date}(
                  {movie &&
                    movie.original_language &&
                    movie.original_language.toUpperCase()}
                  )
                </p>
                <p className=" text-[6px]">o</p>
                {movie.genres &&
                  movie.genres.map((genre) => (
                    <p key={genre.id}>{genre.name}</p>
                  ))}
                <p className=" text-[6px]">o</p>
                <p>{convertMinutesToHoursAndMinutes(movie.runtime)}</p>
              </div>
              <div className="flex gap-1 py-2">
                <p className="text-[30px]">
                  {Math.round(movie.vote_average)}/10
                </p>
                <p className="pt-5 text-[12px]">{movie.vote_count} votes</p>
              </div>
              <div>
                <p className="italic transform -skew-x-12">{movie.tagline}</p>
              </div>
              <div className="pt-2">
                <p>{movie.overview}</p>
              </div>
              <div className="pt-5">
                <button
                  onClick={openTrailer}
                  className="flex items-center gap-2 flex-row-reverse border-2 p-1 rounded-md"
                >
                  <FiPlay size={24} />
                  <p className="text-lg">Trailer</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-52 py-20 pb-5 flex flex-col gap-6">
        <h1 className="text-3xl">Actors in the foreground</h1>
        <div className="flex justify-center gap-3">
          {Array.isArray(cast) &&
            cast.slice(0, 9).map((castMember) => (
              <div key={castMember.id}>
                <CastCard cast={castMember} />
              </div>
            ))}
        </div>
        <div
          className="cursor-pointer w-fit flex gap-1 items-center"
          onClick={CastCrew}
        >
          <p>Complete cast and crew</p>
          <BsArrowRight size={20} />
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="w-3/4 h-[1px] border-t-[1px]"></div>
      </div>
      <div className="px-52 py-7 flex gap-10">
        <div className="flex gap-2 text-[17px]">
          <strong>Status:</strong>
          <p>{movie.status}</p>
        </div>
        <div className="flex gap-2 text-[17px]">
          <strong>Original language:</strong>
          <p>
            {movie.spoken_languages && movie.spoken_languages[0].english_name}
          </p>
        </div>
        <div className="flex gap-2 text-[17px]">
          <strong>Budget:</strong>
          <p>${formatBudget(movie.budget)},00</p>
        </div>
        <div className="flex gap-2 text-[17px]">
          <strong>Revenue:</strong>
          <p>${formatBudget(movie.revenue)},00</p>
        </div>
      </div>
      <Video />
    </div>
  );
};

export default InfoMovie;
