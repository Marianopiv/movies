import React, { useContext } from "react";
import Button from "../UI/Button";
import "./home.css";
import arrow from "../assets/Path 2.png";
import plus from "../assets/plus.png";
import MoviesList from "../components/moviesList/MoviesList";
import { MoviesContext } from "../context/MoviesProvider";
import { getImg } from "../helper";
const Home = () => {
  const { featured,list } = useContext(MoviesContext);

  return (
    <div
      className={`flex w-screen flex-col md:flex-row items-center md:relative md:items-center h-auto md:h-screen`}
    >
      <div className="flex flex-col items-center gap-4 z-40 mt-56  md:w-2/3 md:mt-0 md:items-baseline md:pl-12 lg:pt-56 lg:h-auto lg:pl-14 lg:w-2/3">
        <h3 className="custom-text text-white pt-2 pb-1">
          original de miravos
        </h3>
        <h1 className="custom-title md:text-left">
          {featured && featured.title}
        </h1>
        <div className="flex flex-col gap-5 h-38 justify-end  text-cream-50 z-50 lg:flex-row">
          <Button icon={arrow} text={"reproducir"} />
          <Button
            customClass={"border border-zinc-500 md:bg-transparent"}
            icon={plus}
            text={"mi lista"}
          />
        </div>
      </div>
      <MoviesList />
    </div>
  );
};

export default Home;
