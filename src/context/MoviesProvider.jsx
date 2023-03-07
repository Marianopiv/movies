import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const MoviesContext = createContext();
const MoviesProvider = ({ children }) => {
  const [list, setList] = useState(null);
  const [toogleMovie, setToogleMovie] = useState(false);
  const [toogleLoader, setToogleLoader] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const [added, setAdded] = useState(
    JSON.parse(localStorage.getItem("favoritos")) || []
  );
  const [featured, setFeatured] = useState(null);
  const [loading, setLoading] = useState(false);
  const endpoint =
    "https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20";

  const featuredEndpoint =
    "https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20";
  const fetchData = async () => {
    try {
      const response = await axios.get(endpoint);
      setList(response.data.results);
    } catch (error) {
      console.log("no anduvo");
    }
  };

  const fetchFeatured = async () => {
    setLoading(true);
    try {
      const response = await axios.get(featuredEndpoint);
      const destacado = response.data.results[Math.ceil(Math.random() * 10)];
      setFeatured(destacado);
      console.log(destacado);
      setLoading(false);
    } catch (error) {
      console.log("no anduvo");
    }
  };

  const load = (percentage) => {
    if (percentage < 100) {
      setPercentage(percentage + 20);
      setTimeout(() => {
        load(percentage + 20);
      }, 1000);
    }
  };

  const addNewMovie = (movie) => {
    movie.id = Math.random().toString(36).substring(2, 15);
    setAdded([...added, movie]);
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
        percentage,
        setPercentage,
        load,
        addNewMovie,
        added,
        featured,
        loading,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesProvider;
