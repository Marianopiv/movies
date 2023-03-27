import React, { createContext, useEffect, useState } from "react";
import { get } from "../axios";
import { LANGUAGE } from "../config/config";
import { chooseMovie } from "../helper";

export const MoviesContext = createContext();
const MoviesProvider = ({ children }) => {
  const [list, setList] = useState(null);
  const [toogleMovie, setToogleMovie] = useState(false);
  const [toogleLoader, setToogleLoader] = useState(false);
  const [added, setAdded] = useState(
    JSON.parse(localStorage.getItem("favoritos")) || []
  );
  const [featured, setFeatured] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(null)

  const fetchData = async (page) => {
    const resultado = await get(`/popular${import.meta.env.VITE_API_KEY}&page=${page?page:1}&language=${LANGUAGE}`);
    if (resultado) {
      setList(resultado.results);
    }
  };

  const fetchFeatured = async () => {
    setLoading(true);
    const resultado = await get(`/popular${import.meta.env.VITE_API_KEY}&page=${Math.floor(Math.random()*4)}&language=${LANGUAGE}`);
    console.log(resultado)
    if (resultado) {
      const destacadoFinal = chooseMovie(resultado.results);
      setFeatured(destacadoFinal);
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  const addNewMovie = (movie) => {
    movie.id = Math.random().toString(36).substring(2, 15);
    setAdded([...added, movie]);
  };

  const fetchSearch = async (data) => {
    const result = await get(`search/multi?api_key=d552348db4772226059dbcff1f91d483&language=${LANGUAGE}&page=1&include_adult=false&query=${data}`)
  }
  useEffect(() => {
    fetchData();
    fetchFeatured();
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        list,
        setList,
        setToogleMovie,
        toogleMovie,
        setToogleLoader,
        toogleLoader,
        addNewMovie,
        added,
        featured,
        loading,
        fetchData,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesProvider;
