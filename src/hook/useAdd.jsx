import React, { useState } from "react";

const useAdd = () => {
  const [newMovie, setNewMovie] = useState({});
  const [toogle, setToogle] = useState("option1");
  const [addedTrue, setAddedTrue] = useState(false)  

  const handleInput = (e) => {
    const { name, value } = e.target;
    setNewMovie({ ...newMovie, [name]: value });
    console.log(newMovie);
  };
  
  
  return { handleInput, newMovie,toogle,setToogle,addedTrue,setAddedTrue};
};

export default useAdd;
