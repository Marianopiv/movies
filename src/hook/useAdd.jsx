import React, { useState } from "react";

const useAdd = () => {
  const [newMovie, setNewMovie] = useState({ file: "", name: "" });
  const [toogle, setToogle] = useState("option1");
  const [addedTrue, setAddedTrue] = useState(false);
  const [percentage, setPercentage] = useState(0);

  const getBase64 = (file) => {
    return new Promise((resolve) => {
      let fileInfo;
      let baseURL = "";
      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...

      reader.onload = () => {
        // Make a fileInfo Object
        console.log("Called", reader);
        baseURL = reader.result;
        console.log(baseURL);
        resolve(baseURL);
      };
      console.log(fileInfo);
    });
  };

  const handleInputFileChange = (e) => {
    let file;
    file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const image = new Image();
      image.onload = () => {
        const percent = Math.round((image.naturalWidth * image.naturalHeight) / (event.total / 100));
        setPercentage(Math.min(percent,100));
      };
      image.src = event.target.result;
    };
    reader.readAsDataURL(file);
    getBase64(file)
      .then((result) => {
        file["base64"] = result;
        console.log("File Is", file);
        setNewMovie({ ...newMovie, file: result });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleInputChange = (e) =>
    setNewMovie({ ...newMovie, name: e.target.value });

  return {
    handleInputFileChange,
    newMovie,
    toogle,
    setToogle,
    addedTrue,
    setAddedTrue,
    handleInputChange,
    setPercentage,
    percentage
  };
};

export default useAdd;
