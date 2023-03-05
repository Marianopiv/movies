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
      className="flex w-screen flex-col items-center gap-28 mt-20 
   "
    >
      <div className="absolute h-screen w-screen bg-gradient-to-b from-transparent bottom-52 to-brown-50"></div>
      <div className="flex flex-col justify-end items-center gap-4 z-20">
        <h3 className="custom-text text-cream-50">original de liteflix</h3>
        <h1 className="custom-title text-5xl">{featured && featured.title}</h1>
      </div>
        <div className="flex flex-col gap-10 items-center text-cream-50 z-50">
          <Button icon={arrow} text={"reproducir"} />
          <Button customClass={"border"} icon={plus} text={"mi lista"} />
          <MoviesList />
        </div>
    </div>
  );
};

export default Home;
