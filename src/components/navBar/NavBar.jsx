import React from "react";
import { Link } from "react-router-dom";
import iconNav from "../../assets/iconNav.png";

const NavBar = () => {
  return (
    <div className="flex justify-center items-center w-auto gap-16 mt-5">
      <div className="text-white rounded-full border flex justify-center items-center w-9 h-9 pb-2">
        <p className=" text-3xl font-sans">+</p>
      </div>
      <p className="text-aqua-50 text-2xl tracking-widest font-[10]">
        liteflix
      </p>
      <img className="rounded-full" src={iconNav} alt="" />
    </div>
  );
};

export default NavBar;
