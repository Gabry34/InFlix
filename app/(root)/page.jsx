import Nav from "@/components/Nav";
import PopularMovie from "@/components/sliders/PopularMovie";
import RandomMovie from "@/components/RandomMovie";
import UpcomingMovies from "@/components/sliders/UpcomingMovies";
import TopRatedMovies from "@/components/sliders/TopRatedMovies";
import Categories from "@/components/sliders/Categories";

export default function Home() {
  const apiKey = process.env.REACT_APP_API_KEY;
  return (
    <div className="bg-customBlack min-h-screen overflow-x-hidden">
      <Nav />
      <div>
        <div>
          <RandomMovie apiKey={apiKey} />
          <Categories />
          <PopularMovie apiKey={apiKey} />
          <UpcomingMovies apiKey={apiKey} />
          <TopRatedMovies apiKey={apiKey} />
        </div>
      </div>
    </div>
  );
}
