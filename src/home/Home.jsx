import React from "react";
import NavBar from "../components/navBar/NavBar";
import Button from "../UI/Button";
import "./home.css";
import arrow from "../assets/Path 2.png";
import plus from "../assets/plus.png";
import MoviesList from "../components/moviesList/MoviesList";
const Home = () => {
  return (
    <div
      className="flex w-screen flex-col items-center gap-28 mt-20
     "
    >
      <div className="flex flex-col justify-end items-center gap-4">
        <h3 className="custom-text text-cream-50">Original de Liteflix</h3>
        <h1 className="custom-title">la casa de papel</h1>
        <div className="flex flex-col gap-10 items-center">
          <Button icon={arrow} text={"reproducir"} />
          <Button customClass={"border"} icon={plus} text={"mi lista"} />
          <MoviesList />
        </div>
      </div>
    </div>
  );
};

export default Home;
