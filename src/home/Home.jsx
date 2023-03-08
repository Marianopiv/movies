import React, { useContext } from "react";
import Button from "../UI/Button";
import "./home.css";
import arrow from "../assets/Path 2.png";
import plus from "../assets/plus.png";
import MoviesList from "../components/moviesList/MoviesList";
import { MoviesContext } from "../context/MoviesProvider";
import { getImg } from "../helper";
const Home = () => {
  const { featured } = useContext(MoviesContext);


  return (
    <div
      className={`flex w-screen flex-col md:flex-row items-center md:relative md:items-center`}
    >
      <img className="hidden md:flex md:absolute w-screen h-screen object-cover overflow-y-visible" src={featured&&getImg(featured.backdrop_path)} alt="" />
      <div className="flex flex-col items-center gap-4 z-40 mt-56 md w-1/2 md:mt-0 md:items-baseline md:pl-8">
        <h3 className="custom-text text-white pt-2 pb-1">original de liteflix</h3>
        <h1 className="custom-title">{featured && featured.title}</h1>
        <div className="flex flex-col gap-5 h-38 justify-end  text-cream-50 z-50 md:flex-row">
          <Button icon={arrow} text={"reproducir"} />
          <Button customClass={"border border-zinc-500 md:bg-transparent"} icon={plus} text={"mi lista"} />
        </div>
      </div>
          <MoviesList />
    </div>
  );
};

export default Home;
