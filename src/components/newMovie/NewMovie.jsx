import React, { useContext, useEffect } from "react";
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
    percentage,
    setPercentage,
    load,
    addNewMovie,
  } = useContext(MoviesContext);

  const { handleInput, newMovie, addedTrue, setAddedTrue } = useAdd();

  const handleClick = () => {
    setToogleMovie(!toogleMovie);
    setToogleLoader(false);
    setPercentage(0);
    navigate(-1);
  };

  const handleToogle = () => {
    setToogleLoader(true);
    load(percentage);
    console.log(newMovie);
  };

  const loadImage = (e) => {
    handleInput(e);
    handleToogle();
  };

  const handleAdd = () => {
    addNewMovie(newMovie);
    setAddedTrue(!addedTrue);
  };

  if (addedTrue) {
    return (
      <div className="w-screen custom-text text-white flex flex-col items-center justify-center h-3/4 gap-10">
        <h3 className="text-2xl">¡Felicidades!</h3>
        <p className="w-2/3 opacity-70">Liteflix The Movie fue correctamente subida.</p>
        <Button action={handleClick} text={"ir a home"}  customClass={"bg-white text-black mt-10"}/>
      </div>
    );
  } else {
    return (
      <div className="w-screen flex flex-col items-center justify-center mt-14 bg-brown-50 gap-16 z-50 ">
        <p className="custom-text text-aqua-50">agregar pelicula</p>
        {!toogleLoader ? (
          <>
            <div className="w-80  mb-5 custom-dot text-sm flex justify-center items-center ">
              <label className="hover:cursor-pointer w-80 pl-5 ">
                <span className="custom-text px-8 pt-8 pb-4 text-white flex gap-6">
                  <img className="" src={clip} alt="" /> Agregá un archivo
                </span>
                <input
                  onChange={(e) => loadImage(e)}
                  className="text-brown-50 file:border-none file:bg-transparent file:text-brown-50"
                  type="file"
                  name="backdrop_path"
                  id=""
                />
              </label>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col ">
              <p className="custom-text text-cream-50 text-left text-sm pb-4">
                {percentage < 100 ? `Cargando ${percentage}` : "100 % cargado!"}
              </p>
              <div class="w-72 h-1 flex items-center bg-cream-50 opacity-80 rounded-full">
                {percentage && percentage < 100 ? (
                  <div
                    class={`w-${percentage} h-2  text-center text-xs text-white bg-aqua-50`}
                  ></div>
                ) : (
                  <div
                    class={`w-72 h-2  text-center text-xs text-white bg-aqua-50`}
                  ></div>
                )}
              </div>
              {percentage === 100 && (
                <p className="text-aqua-50 text-right custom-text mt-2">
                  ¡Listo!
                </p>
              )}
            </div>
          </>
        )}
        <div className="border-b-white border-b mb-4 w-60 ">
          <input
            onChange={handleInput}
            className="custom-text text-center bg-transparent  text-white w-60  file:rounded-full file:border-0"
            name="title"
            placeholder="título"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-6 ">
          <Button
            customClass={`border pr-2 bg-white ${
              percentage === 100 ? "" : "opacity-60"
            }`}
            action={percentage === 100 ? handleAdd : undefined}
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
