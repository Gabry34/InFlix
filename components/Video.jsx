"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

const Video = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const currentURL = window.location.href;
    const urlSegments = currentURL.split("/");
    const lastSegment = urlSegments[urlSegments.length - 1];
    const API_KEY = process.env.API_KEY;
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${lastSegment}?api_key=${API_KEY}&append_to_response=videos`
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
    <div className="px-52">
      <h1 className="text-4xl font-Poppins">Media</h1>
      <div className="flex w-full justify-center gap-10 py-10">
        {videos.map((video) => (
          <iframe
            key={video.key}
            width="400"
            height="215"
            src={`https://www.youtube.com/embed/${video.key}`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        ))}
      </div>
    </div>
  );
};

export default Video;
