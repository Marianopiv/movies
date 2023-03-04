import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import iconNav from "../../assets/iconNav.png";
import { MoviesContext } from "../../context/MoviesProvider";

const NavBar = () => {
  const {setToogleMovie,toogleMovie} = useContext(MoviesContext)

  return (
    <div className="flex justify-center items-center w-auto gap-16 mt-5 bg-transparent">
      <div className={`text-white rounded-full border flex justify-center items-center w-9 h-9 pb-2 ${toogleMovie?"invisible":""}`}>
        <Link onClick={()=>setToogleMovie(!toogleMovie)} to={"/new-movie"}><p className=" text-3xl font-sans text-white">+</p></Link>
      </div>
      <p className="text-aqua-50 text-2xl tracking-widest font-[10]">
        liteflix
      </p>
      <img className="rounded-full" src={iconNav} alt="" />
      
    </div>
  );
};

export default NavBar;
