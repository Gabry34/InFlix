"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

const Video = ({ apiKey }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const currentURL = window.location.href;
    const urlSegments = currentURL.split("/");
    const lastSegment = urlSegments[urlSegments.length - 1];
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${lastSegment}?api_key=${apiKey}&append_to_response=videos`
      )
      .then((response) => {
        console.log(response.data.videos.results);
        setVideos(response.data.videos.results.slice(0, 3));
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="px-52 sm:px-5">
      <h1 className="text-4xl text-white font-Poppins">Media</h1>
      <div className="flex w-full justify-center gap-10 py-10 md:gap-3 sm:flex-col">
        {videos.map((video) => (
          <iframe
            key={video.key}
            src={`https://www.youtube.com/embed/${video.key}`}
            frameBorder="0"
            allowFullScreen
            className="w-[400px] h-[215px] md:w-[200px] md:h-[150px] sm:min-w-full sm:min-h-[300px]"
          ></iframe>
        ))}
      </div>
    </div>
  );
};

export default Video;
