import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { get } from "../axios";
import { API_SEARCH, LANGUAGE } from "../config/config";
import { chooseMovie } from "../helper";

export const MoviesContext = createContext();
const MoviesProvider = ({ children }) => {
  const [list, setList] = useState(null);
  const [toogleMovie, setToogleMovie] = useState(false);
  const [toogleLoader, setToogleLoader] = useState(false);
  const [toogleSearch, setToogleSearch] = useState(false);
  const [added, setAdded] = useState(
    JSON.parse(localStorage.getItem("favoritos")) || []
  );
  const [featured, setFeatured] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(null);

  const fetchData = async (page) => {
    const resultado = await get(
      `/popular${import.meta.env.VITE_API_KEY}&page=${
        page ? page : 1
      }&language=${LANGUAGE}`
    );
    if (resultado) {
      setList(resultado.results);
    }
  };

  const fetchFeatured = async () => {
    setLoading(true);
    const resultado = await get(
      `/popular${import.meta.env.VITE_API_KEY}&page=${
        1 + Math.floor(Math.random() * 8)
      }&language=${LANGUAGE}`
    );
    if (resultado) {
      const destacadoFinal = chooseMovie(resultado.results);
      setFeatured(destacadoFinal);
      !featured && !destacadoFinal ? fetchFeatured() : setLoading(false);
    } else {
      setLoading(false);
    }
  };

  const addNewMovie = (movie) => {
    movie.id = Math.random().toString(36).substring(2, 15);
    setAdded([...added, movie]);
  };

  const fetchSearch = async (searched) => {
    const { value } = searched;
    const result = await axios.get(API_SEARCH + value);
    setList(result.data.results);
  };

  const handleInput = (e) => {
    const { value } = e.target;
    setSearched({ ...searched, value });
  };

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
        setLoading,
        fetchData,
        fetchSearch,
        handleInput,
        searched,
        setSearched,
        setFeatured,
        toogleSearch,
        setToogleSearch,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesProvider;
