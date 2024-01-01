"use client";

import axios from "axios";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { TbPointFilled } from "react-icons/tb";

const RandomMovie = ({ apiKey }) => {
  const [movies, setMovies] = useState([]);
  const [logo, setLogo] = useState("");
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&append_to_response=videos`
      )
      .then((response) => {
        const allMovies = response.data.results;
        setMovies(allMovies.slice(0, 5));
      })
      .catch((err) => {
        console.error("API Request Error:", err);
      });
  }, []);

  const getLogo = (id) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzhkZWMxYTYzOWM0YjY3NzBkY2UzMDY0YTlkNTJlMyIsInN1YiI6IjY0ZTBhYmFiNWFiODFhMDExYzJmMGY0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o3uPig8ACD_quyvswyEr5VidN5DmzqdetP2y9buPJG4",
      },
    };

    fetch(`https://api.themoviedb.org/3/movie/${id}/images`, options)
      .then((response) => response.json())
      .then((response) => {
        setLogo(response.logos[0].file_path);
      })
      .catch((err) => console.error(err));
  };

  const getImageBig = (image) => {
    return "https://www.themoviedb.org/t/p/w1920_and_h800_face" + image;
  };

  const getImageSmall = (image) => {
    return "https://www.themoviedb.org/t/p/original" + image;
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (num2 >= movies.length) {
        setNum1(0);
        setNum2(1);
      } else {
        setNum1(num1 + 1);
        setNum2(num2 + 1);
      }
    }, 10000);
    return () => clearInterval(intervalId);
  }, [num1, num2, movies]);

  const infoMovie = (id) => {
    const url = `/info/${id}`;
    window.location.href = url;
  };

  return (
    <>
      <div className="w-screen flex flex-col justify-center items-center cursor-pointer">
        {movies.slice(num1, num2).map((movie) => (
          <div
            className="w-full relative text-white p-4 h-[700px] md:h-[500px] sm:max-h-[300px] xs:max-h-[200px]"
            style={{
              backgroundImage: `url(${getImageBig(movie.backdrop_path)})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            key={movie.id}
          >
            <div className="absolute flex flex-col justify-between inset-0 bg-gradient-to-l from-transparent to-black w-full h-full md:bg-none">
              <div
                className="w-full h-full px-20 py-16 md:flex md:justify-center md:items-center md:p-0"
                onClick={() => {
                  infoMovie(movie.id);
                }}
              >
                <logo>{getLogo(movie.id)}</logo>
                <Image
                  src={getImageSmall(logo)}
                  alt="logo"
                  width={400}
                  height={200}
                  className="sm:hidden"
                />
                <Image
                  src={getImageSmall(logo)}
                  alt="logo"
                  width={260}
                  height={200}
                  className="hidden sm:flex xs:hidden"
                />
                <Image
                  src={getImageSmall(logo)}
                  alt="logo"
                  width={170}
                  height={200}
                  className="hidden xs:flex"
                />
                <div className="flex flex-col gap-5 pt-5 md:hidden">
                  <div className="flex gap-5">
                    <div className=" border-white rounded-sm border-[1px] w-5 flex items-center justify-center h-6">
                      T
                    </div>
                    <strong>
                      {parseFloat(movie.vote_average).toFixed(1)}/10
                    </strong>
                    <strong>{movie.release_date}</strong>
                    <strong>{movie.original_language}</strong>
                  </div>
                  <div className="w-1/2">
                    <p>{movie.overview}</p>
                  </div>
                </div>
              </div>
              <div className="px-20 pb-2 w-full flex justify-center items-center cursor-default">
                <div className="flex items-center gap-5">
                  {movies.map((movie, index) => (
                    <div key={index}>
                      <TbPointFilled
                        size={15}
                        color={index === num1 ? "white" : "#989898"}
                        className="cursor-pointer"
                        onClick={() => {
                          setNum1(index);
                          setNum2(index + 1);
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RandomMovie;
