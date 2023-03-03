import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const MoviesContext = createContext();
const MoviesProvider = ({ children }) => {
  const [list, setList] = useState(null);

  const endpoint =
    "https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20";

  const fetchData = async () => {
    try {
      const response = await axios.get(
        endpoint
      );
      console.log(response.data.results);
      setList(response.data.results);
    } catch (error) {
      console.log("no anduvo");
    }
  };

  useEffect(() => {
      fetchData();
  }, []);

  return (
    <MoviesContext.Provider value={{ list, setList }}>
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesProvider;
