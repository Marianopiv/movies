import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MoviesContext } from "../../context/MoviesProvider";
import Button from "../../UI/Button";
import clip from "../../assets/clip.png";
import useAdd from "../../hook/useAdd";

const NewMovie = () => {
  const navigate = useNavigate();
  const {
    setToogleMovie,
    toogleMovie,
    toogleLoader,
    setToogleLoader,
    addNewMovie,
    added,
  } = useContext(MoviesContext);

  const {
    handleInputFileChange,
    newMovie,
    addedTrue,
    setAddedTrue,
    handleInputChange,
    percentage,
    setPercentage,
    error,
    setError
  } = useAdd();

  const handleClick = () => {
    setToogleMovie(!toogleMovie);
    setToogleLoader(false);
    setPercentage(0);
    localStorage.setItem("favoritos", JSON.stringify(added));
    navigate(-1);
  };

  const handleToogle = () => {
    setToogleLoader(true);
  };

  const loadImage = (e) => {
    handleInputFileChange(e.target.files[0]);
    handleToogle();
  };

  const handleAdd = () => {
    addNewMovie(newMovie);
    setAddedTrue(!addedTrue);
  };

  const handleReintentar = () => {
    setError(false)
    setToogleLoader(false)
  }

  if (addedTrue) {
    return (
      <div className="w-screen custom-text text-white flex flex-col items-center justify-center h-screen gap-10">
        <h3 className="text-2xl">¡Felicidades!</h3>
        <p className="w-2/3 opacity-70">
          {newMovie.name} fue correctamente subida.
        </p>
        <Button
          action={handleClick}
          text={"ir a home"}
          customClass={"bg-white text-black mt-10"}
        />
      </div>
    );
  } else {
    return (
      <div className="w-screen flex flex-col items-center justify-center h-screen md:mt-0 bg-brown-50 gap-16 z-50 ">
        <p className="custom-text text-aqua-50">agregar pelicula</p>
        {!toogleLoader ? (
          <>
            <div className="w-80 md:w-2/3  mb-5 custom-dot text-sm flex justify-center items-center ">
              <label className="hover:cursor-pointer w-80 md:w-screen  pl-5 md:pl-0 ">
                <span className="custom-text px-8  pt-8 pb-4 text-white flex gap-6 md:justify-center">
                  <img className="md:h-6" src={clip} alt="" />{" "}
                  <p className="flex md:hidden">Agregá un archivo</p>
                  <p className="hidden md:flex">
                    Agregá un archivo o arrastralo y soltalo aquí
                  </p>
                </span>
                <input
                  onChange={(e) => loadImage(e)}
                  className="text-brown-50 file:border-none file:bg-transparent file:text-brown-50 dropzone"
                  type="file"
                  name="backdrop_path"
                  id=""
                />
              </label>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col md:w-96">
              <p className={`custom-text text-cream-50 text-left text-sm pb-4 ${error?"text-center":""}`}>
                {error?"¡ERROR! no se pudo cargar la película":percentage < 100
                  ? `Cargando ${percentage}`
                  : `${percentage} % cargado!`}
              </p>
              <div className={`${error?"w-80":"w-72"} h-1 flex items-center bg-cream-50 opacity-80 rounded-full md:w-96`}>
                {percentage && percentage < 100 ? (
                  <div
                    className={`w-${percentage} h-2 text-center text-xs text-white ${!error?"bg-aqua-50 w-72":"bg-red-500 w-80"} md:w-96 `}
                  ></div>
                ) : (
                  <div
                    className={`w-72 h-2 text-center text-xs text-white ${!error?"bg-aqua-50 w-72":"bg-red-500 w-80"} md:w-96`}
                  ></div>
                )}
              </div>
              {percentage === 100 && (
                <p onClick={error&&handleReintentar}  className={`${error?"text-white hover:cursor-pointer":""} text-aqua-50 text-right custom-text mt-2`}>
                  {!error?"¡Listo!":"Reintentar"}
                </p>
              )}
            </div>
          </>
        )}
        <div className="border-b-white border-b mb-4 w-60 ">
          <input
            onChange={handleInputChange}
            className="custom-text text-center bg-transparent  text-white w-60  file:rounded-full file:border-0"
            name="title"
            placeholder="título"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-6 ">
          <Button
            customClass={`border dark:text-brown-50 bg-white ${
              percentage === 100 && newMovie.name &&!error ? "" : "opacity-60"
            }`}
            action={percentage === 100 && newMovie.name && !error ? handleAdd : undefined}
            text={"Subir Película"}
          />
          <Button
            customClass={"border pr-2 opacity-80 text-cream-50"}
            action={handleClick}
            text={"Salir"}
          />
        </div>
      </div>
    );
  }
};

export default NewMovie;
