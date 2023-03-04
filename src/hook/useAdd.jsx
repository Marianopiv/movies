import React, { useState } from "react";

const useAdd = () => {
  const [newMovie, setNewMovie] = useState({});
  const [toogle, setToogle] = useState("option1");
  

  const handleInput = (e) => {
    const { name, value } = e.target;
    setNewMovie({ ...newMovie, [name]: value });
    console.log(newMovie);
  };
  
  
  return { handleInput, newMovie,toogle,setToogle};
};

export default useAdd;
