import Nav from "@/components/Nav";
import PopularMovie from "@/components/sliders/PopularMovie";
import RandomMovie from "@/components/RandomMovie";
import UpcomingMovies from "@/components/sliders/UpcomingMovies";
import TopRatedMovies from "@/components/sliders/TopRatedMovies";

export default function Home() {
  const apiKey = process.env.REACT_APP_API_KEY;
  return (
    <div className="bg-customBlack min-h-screen overflow-x-hidden">
      <Nav />
      <div>
        <div>
          <RandomMovie />
          <PopularMovie apiKey={apiKey} />
          <UpcomingMovies apiKey={apiKey} />
          <TopRatedMovies apiKey={apiKey} />
        </div>
      </div>
    </div>
  );
}
