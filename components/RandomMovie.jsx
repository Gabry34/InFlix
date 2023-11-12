"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

const RandomMovie = () => {
  const movies = [
    {
      image: "/MovieImage/Barbie.jpg",
      name: "/MovieLogo/Barbie-logo.png",
      date: "2023-07-19",
      description:
        "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
      vote: "7.4",
      width: "400",
      time: "1h 53m",
      id: 346698,
    },
    {
      image: "/MovieImage/elemental.jpg",
      name: "/MovieLogo/elemental-logo.png",
      date: "2023-06-14",
      description:
        "In a city where fire, water, land and air residents live together, a fiery young woman and a go-with-the-flow guy will discover something elemental: how much they have in common.",
      vote: "7.8",
      width: "500",
      time: "1h 42m",
      id: 976573,
    },
    {
      image: "/MovieImage/TheFlash.jpg",
      name: "/MovieLogo/The-Flash-Movie-Logo-PNG.png",
      date: "2023-06-13",
      description:
        "When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
      vote: "7.0",
      width: "500",
      time: "2h 24m",
      id: 298618,
    },
    {
      image: "/MovieImage/FastX.jpg",
      name: "/MovieLogo/FastX-logo.png",
      date: "2023-05-17",
      description:
        "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
      vote: "7.3",
      width: "400",
      time: "2h 22m",
      id: 385687,
    },
    {
      image: "/MovieImage/ResidentEvilDeathIsland.jpeg",
      name: "/MovieLogo/ResidentEvilDeathIsland-logo.png",
      date: "2023-06-22",
      description:
        "In San Francisco, Jill Valentine is dealing with a zombie outbreak and a new T-Virus, Leon Kennedy is on the trail of a kidnapped DARPA scientist, and Claire Redfield is investigating a monstrous fish that is killing whales in the bay. Joined by Chris Redfield and Rebecca Chambers, they discover the trail of clues from their separate cases all converge on the same location, Alcatraz Island, where a new evil has taken residence and awaits their arrival.",
      vote: "7.6",
      width: "800",
      time: "1h 31m",
      id: 1083862,
    },
    {
      image: "/MovieImage/TransformersRiseoftheBeasts.jpg",
      name: "/MovieLogo/TransformersRiseoftheBeasts-logo.png",
      date: "2023-08-15",
      description:
        "When a new threat capable of destroying the entire planet emerges, Optimus Prime and the Autobots must team up with a powerful faction known as the Maximals. With the fate of humanity hanging in the balance, humans Noah and Elena will do whatever it takes to help the Transformers as they engage in the ultimate battle to save Earth.",
      vote: "7.5",
      width: "800",
      time: "2h 7m",
      id: 667538,
    },
  ];

  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const [activeDotIndex, setActiveDotIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (currentMovieIndex + 1) % movies.length;
      setCurrentMovieIndex(nextIndex);
      setActiveDotIndex(nextIndex);
    }, 10000);

    return () => clearInterval(timer);
  }, [currentMovieIndex, movies.length]);

  const showMovieImage = (index) => {
    setCurrentMovieIndex(index);
    setActiveDotIndex(index);
  };

  const infoMovie = () => {
    const url = `/info/${movies[currentMovieIndex].id}`;
    window.location.href = url;
  };

  return (
    <>
      <div
        className="w-screen flex flex-col justify-center items-center cursor-pointer"
        onClick={infoMovie}
      >
        <div
          className="w-full relative text-white p-4 h-[700px] md:h-[500px] sm:max-h-[300px] xs:max-h-[200px]"
          style={{
            backgroundImage: `url(${movies[currentMovieIndex].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black w-full h-full sm:bg-none">
            <div className="w-1/2 h-full flex flex-col gap-5 pl-20 pt-20 lg:w-full lg:px-20 md:pt-5 sm:p-0 sm:justify-center sm:items-center">
              <Image
                src={movies[currentMovieIndex].name}
                alt="image"
                width={parseInt(movies[currentMovieIndex].width)}
                height={500}
                className=""
              />
              <div className="flex flex-col gap-5 sm:hidden">
                <div className="flex gap-5">
                  <strong>{movies[currentMovieIndex].vote}</strong>
                  <strong>{movies[currentMovieIndex].date}</strong>
                  <strong>{movies[currentMovieIndex].time}</strong>
                </div>
                <div>
                  <p>{movies[currentMovieIndex].description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-0 flex justify-center items-center gap-5">
        {movies.map((movie, index) => (
          <p
            key={index}
            className={`text-5xl cursor-pointer ${
              index === activeDotIndex ? "text-white" : "text-gray-500"
            }`}
            onClick={() => showMovieImage(index)}
          >
            .
          </p>
        ))}
      </div>
    </>
  );
};

export default RandomMovie;
