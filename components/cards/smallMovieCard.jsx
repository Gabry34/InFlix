import Image from "next/image";
import React from "react";

export default function smallMovieCard({ movie }) {
  const getImageMovie = (image) => {
    return "https://www.themoviedb.org/t/p/w250_and_h141_face" + image;
  };
  const infoMovie = (id) => {
    const url = `/info/${id}`;
    window.location.href = url;
  };
  return (
    <div
      onClick={() => {
        infoMovie(movie.id);
      }}
    >
      <div
        key={movie.id}
        className="min-w-[250px] flex flex-col gap-1 cursor-pointer"
      >
        <div>
          {movie.backdrop_path ? (
            <img
              src={getImageMovie(movie.backdrop_path)}
              alt="image"
              className="rounded-md w-[300px]"
            />
          ) : (
            <img
              src="/NoPersonMovieImage.png"
              alt="image"
              className="w-[300px] rounded-md"
            />
          )}
        </div>
        <p className="pb-1 text-white">{movie.title}</p>
      </div>
    </div>
  );
}
