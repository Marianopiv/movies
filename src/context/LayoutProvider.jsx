import React, { createContext, useContext, useEffect, useState } from "react";
import { getImg } from "../helper";
import { MoviesContext } from "./MoviesProvider";

export const LayoutContext = createContext();
const LayoutProvider = ({ children }) => {
  const { toogleMovie, featured } = useContext(MoviesContext);

  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const desktopStyles = (param) => ({
    backgroundImage: `url(${param && getImg(param.backdrop_path)})`,
    backgroundSize: "cover",
    overflow: "hidden",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  });
  const mobileStyles = (param) => ({
    backgroundImage: `url(${param && getImg(param.poster_path)})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  });
  return (
    <LayoutContext.Provider value={{ width, desktopStyles, mobileStyles }}>
      {children}
    </LayoutContext.Provider>
  );
};

export default LayoutProvider;
