import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MoviesContext } from "../../context/MoviesProvider";
import "./navbar.css";
import { HiOutlineSearch } from "react-icons/hi";
const NavBar = () => {
  const {
    setToogleMovie,
    toogleMovie,
    setToogleSearch,
  } = useContext(MoviesContext);
  const navigate = useNavigate();

  const handleSearch = () => {
    setToogleSearch(true);
    navigate("/movie-search");
  };
  return (
    <div
      className={`flex relative justify-center items-center w-auto md:w-screen gap-16 md:px-12 md:justify-between  pt-5 ${
        toogleMovie ? "md:hidden" : ""
      }`}
    >
      {!toogleMovie && (
        <div className="md:hidden absolute w-screen h-screen top-0">
          {
            <div className="md:hidden absolute h-screen sm:h-96 w-screen bg-gradient-to-b from-transparent z-30 to-brown-50 bottom-18 sm:-bottom-8 "></div>
          }
          <div className="md:hidden absolute h-96 w-screen bg-gradient-to-b from-transparent z-30 to-brown-50 bottom-8 sm:-bottom-10 "></div>
        </div>
      )}
      <div
        className={`text-white hover:text-aqua-50   flex justify-center md:w-fit items-center md:border-0  w-9 h-9 py-auto z-50 md:hidden ${
          toogleMovie ? "invisible" : ""
        }`}
      >
        <Link
          className="z-50 hover:cursor-pointer md:flex md:items-center hover:text-aqua-50  "
          onClick={() => setToogleMovie(!toogleMovie)}
          to={"/new-movie"}
        >
          <p className="md:flex my-auto text-4xl md:text-3xl font-sans text-white z-50 mb-3  md:mb-0 md:pt-1 md:pr-2 hover:text-aqua-50  ">
            +
          </p>
          <p className="hidden md:flex custom-text text-white md:pt-3 md:pr-40 text-sm hover:text-aqua-50">
            Agregar película
          </p>
        </Link>
      </div>
      <p className="z-50 pl-2 navTitle md:hidden">Pivflix</p>
      <div className="hidden md:flex gap-10 items-center">
        <p className="z-50 relative navTitle">Pivflix</p>
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
      <div onClick={handleSearch} className="hidden md:flex z-50 hover:text-aqua-50      text-black gap-6 md:items-center hover:cursor-pointer">
        <p className="custom-text text-white hover:text-aqua-50 pt-1  text-sm">Buscar pelicula</p>

        <HiOutlineSearch
          
          className="w-14 h-8 text-white hover:text-aqua-50 z-50"
        />
      </div>
      <HiOutlineSearch
        onClick={handleSearch}
        className="w-14 h-8 text-white hover:cursor-pointer z-50 md:hidden hover:text-aqua-50"
      />
    </div>
  );
};

export default NavBar;
