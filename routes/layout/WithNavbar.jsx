import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../src/components/navBar/NavBar";
import { LayoutContext } from "../../src/context/LayoutProvider";
import { MoviesContext } from "../../src/context/MoviesProvider";
import { getImg } from "../../src/helper";

const WithNavbar = () => {
  const { toogleMovie, featured } = useContext(MoviesContext);
  const { width, desktopStyles, mobileStyles } = useContext(LayoutContext);

  return (
    <>
      {!toogleMovie ? (
        <div style={width > 768 ? desktopStyles(featured) : mobileStyles(featured)} className={``}>
          <NavBar />
          <Outlet />
        </div>
      ) : (
        <div className={``}>
          <NavBar />
          <Outlet />
        </div>
      )}
    </>
  );
};

export default WithNavbar;
