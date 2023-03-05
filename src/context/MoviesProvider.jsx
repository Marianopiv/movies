import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const MoviesContext = createContext();
const MoviesProvider = ({ children }) => {
  const [list, setList] = useState(null);
  const [toogleMovie, setToogleMovie] = useState(false);
  const [toogleLoader, setToogleLoader] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const [added, setAdded] = useState([]);
  const [featured, setFeatured] = useState(null);
  const [loading, setLoading] = useState(false)
  const endpoint =
    "https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20";

  const featuredEndpoint = "https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20"  
  const fetchData = async () => {
    try {
      const response = await axios.get(endpoint);
      console.log(response.data.results);
      setList(response.data.results);
    } catch (error) {
      console.log("no anduvo");
    }
  };

  const fetchFeatured = async () => {
    setLoading(true)
    try {
      const response = await axios.get(featuredEndpoint)
      setFeatured((response.data.results.find((item,index)=>Math.floor(Math.random()*response.data.results.length)===index)));
      featured!==undefined?setLoading(false):fetchFeatured()
    } catch (error) {
      console.log("no anduvo");
    }
  }

  const load = (percentage) => {
    if (percentage < 100) {
      setPercentage(percentage + 20);
      setTimeout(() => {
        load(percentage + 20);
      }, 1000);
    }
  };

  const addNewMovie = (movie) => {
    const myObjString = JSON.stringify(movie);
    const id = Math.random().toString(36).substring(2, 15);
    localStorage.setItem(id, myObjString);
  };

  const getMovies = () => {
    let favMovies = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const item = JSON.parse(localStorage.getItem(key));
      favMovies.push(item);
    }
    setAdded(favMovies);
  };
  useEffect(() => {
    fetchData();
    getMovies();
    fetchFeatured()
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
        loading
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesProvider;
