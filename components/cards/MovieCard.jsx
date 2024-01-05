import Image from "next/image";
import React from "react";

const MovieCard = ({ movie }) => {
  const getImage = (image) => {
    return "https://www.themoviedb.org/t/p/w220_and_h330_face" + image;
  };

  const image = "http://localhost:3000/src/assets/NoImage.jpg";

  const formattedVoteAverage = movie.vote_average.toFixed(1);

  const infoMovie = () => {
    const url = `/info/${movie.id}`;
    window.location.href = url;
  };

  if (!movie.poster_path) {
    return null;
  }

  return (
    <div
      className="w-[220px] shadow-black-md rounded-lg cursor-pointer h-454 m-3 sm:w-full sm:h-fit"
      onClick={infoMovie}
    >
      <div className="w-full flex justify-center">
        <img
          src={getImage(movie.poster_path)}
          alt="image"
          className="w-[300px] rounded-t-lg"
        />
      </div>
      <div className="p-1 bg-customBlackNav w-9 h-9 flex justify-center items-center rounded-full border-white border-2 relative bottom-5 ml-2">
        <h1 className="text-white">{formattedVoteAverage}</h1>
      </div>
      <div className="px-2 flex flex-col justify-around pb-3 gap-1">
        <h1 className="font-Poppins text-white font-extralight">
          {movie.title}
        </h1>
        <p className="font-extralight text-opacity-40 text-white">
          {movie.release_date}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
