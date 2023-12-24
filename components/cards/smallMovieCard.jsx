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
        <p className="pb-1 text-white">{movie.title}</p>
      </div>
    </div>
  );
}
