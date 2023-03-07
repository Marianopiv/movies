import React, { useContext } from "react";
import Button from "../UI/Button";
import "./home.css";
import arrow from "../assets/Path 2.png";
import plus from "../assets/plus.png";
import MoviesList from "../components/moviesList/MoviesList";
import { MoviesContext } from "../context/MoviesProvider";
const Home = () => {
  const { featured } = useContext(MoviesContext);

  return (
    <div
      className="flex w-screen flex-col items-center gap-10"
    >
      <div className="flex flex-col items-center gap-4 z-20 mt-56">
        <h3 className="custom-text text-white">original de liteflix</h3>
        <h1 className="custom-title">{featured && featured.title}</h1>
      </div>
        <div className="flex flex-col gap-10 items-center text-cream-50 z-50">
          <Button icon={arrow} text={"reproducir"} />
          <Button customClass={"border border-zinc-500"} icon={plus} text={"mi lista"} />
          <MoviesList />
        </div>
    </div>
  );
};

export default Home;
