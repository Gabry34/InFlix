"use client";

import Nav from "@/components/Nav";
import PopularMovie from "@/components/PopularMovie";
import RandomMovie from "@/components/RandomMovie";
import UpcomingMovies from "@/components/UpcomingMovies";
import TopRatedMovies from "@/components/TopRatedMovies";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-customBlack min-h-screen overflow-x-hidden">
      <Nav />
      <div>
        <div>
          <RandomMovie />
          <PopularMovie />
          <UpcomingMovies />
          <TopRatedMovies />
        </div>
      </div>
    </div>
  );
}
