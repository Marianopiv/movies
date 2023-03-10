import React, { useContext, useEffect, useState } from "react";
import { MoviesContext } from "../context/MoviesProvider";
const useAdd = () => {
  const { setToogleLoader } = useContext(MoviesContext);
  const [newMovie, setNewMovie] = useState({ file: "", name: "" });
  const [toogle, setToogle] = useState("option1");
  const [addedTrue, setAddedTrue] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const [error, setError] = useState(false);

  const getBase64 = (file) => {
    return new Promise((resolve) => {
      let fileInfo;
      let baseURL = "";
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        baseURL = reader.result;
        resolve(baseURL);
      };
    });
  };

  const handleInputFileChange = (event) => {
    const reader = new FileReader();
    let file = event;
    if (file.type!=="image/jpeg"&&file.type!=="image/png") {
      setError(true)
    }

    reader.onload = (event) => {
      const { loaded, total } = event;
      const percent = Math.round((loaded / total) * 100);
      setPercentage(percent);
    };
    reader.readAsDataURL(file);
    getBase64(file)
      .then((result) => {
        file["base64"] = result;
        setNewMovie({ ...newMovie, file: result });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleInputChange = (e) =>
    setNewMovie({ ...newMovie, name: e.target.value });

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleInputFileChange(file);
    setToogleLoader(true);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    document.addEventListener("dragover", handleDragOver);
    document.addEventListener("drop", handleDrop);

    return () => {
      document.removeEventListener("dragover", handleDragOver);
      document.removeEventListener("drop", handleDrop);
    };
  }, []);
  return {
    handleInputFileChange,
    newMovie,
    toogle,
    setToogle,
    addedTrue,
    setAddedTrue,
    handleInputChange,
    setPercentage,
    percentage,
    error,
    setError,
  };
};

export default useAdd;
