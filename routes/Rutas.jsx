import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MoviesProvider from "../src/context/MoviesProvider";
import Home from "../src/home/Home";
import WithNavbar from "./layout/WithNavbar";
import NewMovie from "./../src/components/newMovie/NewMovie"

const Rutas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WithNavbar />}>
          <Route index element={<Home />} />
        <Route path="new-movie" element={<NewMovie />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Rutas;
