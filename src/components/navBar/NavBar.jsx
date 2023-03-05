import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import iconNav from "../../assets/iconNav.png";
import { MoviesContext } from "../../context/MoviesProvider";
import { getImg } from "../../helper";
import "./navbar.css";

const NavBar = () => {
  const { setToogleMovie, toogleMovie, featured } = useContext(MoviesContext);

  return (
    <div className="flex justify-center items-center w-auto gap-16 mt-5  ">
      {!toogleMovie && (
        <div className="absolute w-screen h-screen top-0 ">
          {<img
            className="w-screen z-50 h-2/3  top-10 object-cover right-1 opacity-60  "
            src={featured && getImg(featured.poster_path)}
            alt=""
            srcset=""
          />}
        </div>
      )}
      <div
        className={`text-white rounded-full border flex justify-center items-center w-9 h-9 pb-2 z-50 ${
          toogleMovie ? "invisible" : ""
        }`}
      >
        <Link className="z-50 hover:cursor-pointer" onClick={() => setToogleMovie(!toogleMovie)} to={"/new-movie"}>
          <p className=" text-3xl font-sans text-white z-50">+</p>
        </Link>
      </div>
      <p className="text-aqua-50 text-2xl z-20 tracking-widest font-[10]">
        liteflix
      </p>
      <img className="rounded-full z-20" src={iconNav} alt="" />
    </div>
  );
};

export default NavBar;
