import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MoviesProvider, { MoviesContext } from "../src/context/MoviesProvider";
import Home from "../src/home/Home";
import WithNavbar from "./layout/WithNavbar";
import NewMovie from "./../src/components/newMovie/NewMovie";
import Loading from "../src/UI/Loading";
import DinamicPage from "../src/components/dinamicPage/DinamicPage";
import MoviesSearch from "../src/components/moviesSearch/MoviesSearch";

const Rutas = () => {
  const { loading } = useContext(MoviesContext);

  return (
    <BrowserRouter>
      <Routes>
        {loading ? (
          <Route path="/" element={<Loading />} />
        ) : (
          <>
            <Route path="/" element={<WithNavbar />}>
              <Route index element={<Home />} />
              <Route path="new-movie" element={<NewMovie />} />
            </Route>
            <Route path="dinamic-page/:id" element={<DinamicPage />} />
            <Route path ="movie-search" element={<MoviesSearch/>}/>
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default Rutas;
