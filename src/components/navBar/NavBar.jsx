import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import iconNav from "../../assets/iconNav.png";
import { MoviesContext } from "../../context/MoviesProvider";
import { getImg } from "../../helper";
import "./navbar.css";

const NavBar = () => {
  const { setToogleMovie, toogleMovie, featured } = useContext(MoviesContext);

  return (
    <div className="flex relative justify-center items-center w-auto gap-16 pt-5">
      {!toogleMovie && (
        <div className="md:hidden absolute w-screen h-screen top-0">
            {<div className="md:hidden absolute h-screen sm:h-96 w-screen bg-gradient-to-b from-transparent z-30 to-brown-50 bottom-22 "></div>}
            {<div className="md:hidden absolute h-96 w-screen bg-gradient-to-b from-transparent z-30 to-brown-50 bottom-4 "></div>}
          {<img
            className="w-screen absolute z-20 h-fit sm:h-fit object-cover sm:object-fill right-1 bg-gradient-to-b from-transparent to-brown-50"
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
          <p className=" text-4xl font-sans text-white z-50 mb-0.5">+</p>
        </Link>
      </div>
      <p className="z-20 navTitle">
        liteflix
      </p>
      <img className="rounded-full z-20" src={iconNav} alt="" />
    </div>
  );
};

export default NavBar;
