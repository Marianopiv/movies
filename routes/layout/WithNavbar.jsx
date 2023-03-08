import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../src/components/navBar/NavBar";
import { MoviesContext } from "../../src/context/MoviesProvider";

const WithNavbar = () => {
  const { featured } = useContext(MoviesContext);
  return (
    <div className={``}>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default WithNavbar;
