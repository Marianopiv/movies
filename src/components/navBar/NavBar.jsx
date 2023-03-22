import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import iconNav from "../../assets/iconNav.png";
import menu from "../../assets/menu.png";
import bell from "../../assets/bell.png";
import { MoviesContext } from "../../context/MoviesProvider";
import { getImg } from "../../helper";
import "./navbar.css";
import cross from "../../assets/plus.png"
const NavBar = () => {
  const { setToogleMovie, toogleMovie, featured } = useContext(MoviesContext);

  return (
    <div
      className={`flex relative justify-center items-center w-auto md:w-screen gap-16 md:gap-0 md:justify-around  pt-5 ${
        toogleMovie ? "md:hidden" : ""
      }`}
    >
      {!toogleMovie && (
        <div className="md:hidden absolute w-screen h-screen top-0">
          {
            <div className="md:hidden absolute h-screen sm:h-96 w-screen bg-gradient-to-b from-transparent z-30 to-brown-50 bottom-18 sm:-bottom-8 "></div>
          }
          {
            <div className="md:hidden absolute h-96 w-screen bg-gradient-to-b from-transparent z-30 to-brown-50 bottom-8 sm:-bottom-10 "></div>
          }
          {
            <img
              className="w-screen absolute z-20 h-fit sm:h-fit object-cover sm:object-fill right-1 bg-gradient-to-b from-transparent to-brown-50"
              src={featured && getImg(featured.poster_path)}
              alt=""
            />
          }
        </div>
      )}
      <div
        
        className={`text-white flex justify-center md:w-fit items-center md:border-0  w-9 h-9 py-auto z-50 md:hidden ${
          toogleMovie ? "invisible" : ""
        }`}
      >
        <Link
          className="z-50 hover:cursor-pointer md:flex md:items-center"
          onClick={() => setToogleMovie(!toogleMovie)}
          to={"/new-movie"}
        >
          <p className="md:flex my-auto text-4xl md:text-3xl font-sans text-white z-50 mb-3  md:mb-0 md:pt-1 md:pr-2">
            +
          </p>
          <p className="hidden md:flex custom-text text-white md:pt-3 md:pr-40 text-sm">
            Agregar película
          </p>
        </Link>
      </div>
      <p className="z-50 pl-2 navTitle md:hidden">miravos</p>
      <div className="hidden md:flex gap-10 items-center">
        <p className="z-50 relative navTitle">miravos</p>
        <div
          className={`hidden md:flex text-white rounded-full border justify-center md:w-fit items-center md:border-0  w-9 h-9 pb-2 z-20 ${
            toogleMovie ? "invisible" : ""
          }`}
        >
          <Link
            className="z-50 hover:cursor-pointer md:flex md:items-center"
            onClick={() => setToogleMovie(!toogleMovie)}
            to={"/new-movie"}
          >
            <p className=" text-4xl md:text-3xl font-sans text-white z-50 mb-0.5 md:mb-0 md:pt-1 md:pr-2">
              +
            </p>
            <p className="hidden md:flex custom-text text-white md:pt-3 text-sm">
              Agregar película
            </p>
          </Link>
        </div>
      </div>
      <div className="hidden md:flex z-50 text-black gap-6 h-3 md:items-center">
        <img className="w-6 h-3" src={menu} alt="" />
        <div className="relative">
          <span className="absolute inline-flex h-2 w-2 rounded-full bg-aqua-50"></span>

          <img className="h-5 " src={bell} alt="" />
        </div>
        <img className="rounded-full z-20 h-7" src={iconNav} alt="" />
      </div>
      <img className="md:hidden rounded-full z-20" src={iconNav} alt="" />
    </div>
  );
};

export default NavBar;
