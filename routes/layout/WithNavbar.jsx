import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../src/components/navBar/NavBar";
import { MoviesContext } from "../../src/context/MoviesProvider";
import { getImg } from "../../src/helper";

const WithNavbar = () => {
  const { setToogleMovie, toogleMovie, featured } = useContext(MoviesContext);
  return (
    <>
      {!toogleMovie ? (
        <div
          style={{
            backgroundImage: `url(${
              featured && getImg(featured.backdrop_path)
            })`,
            backgroundSize: "cover",
            overflow: "hidden",
          }}
          className={`h-screen`}
        >
          <NavBar />
          <Outlet />
        </div>
      ) : (
        <div
          className={`h-screen`}
        >
          <NavBar />
          <Outlet />
        </div>
      )}
    </>
  );
};

export default WithNavbar;
