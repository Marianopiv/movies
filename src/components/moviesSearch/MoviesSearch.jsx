import React, { useContext, useState } from "react";
import { HiOutlineArrowSmLeft } from "react-icons/Hi";
import { HiOutlineSearch } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { MoviesContext } from "../../context/MoviesProvider";
import { getImg, slicePages } from "../../helper";
import useLoad from "../../hook/useLoad";
import usePagination from "../../hook/usePagination";
import Button from "../../UI/Button";
import Movie from "../movie/Movie";
import Paginacion from "../paginacion/Paginacion";
import SearchMenu from "../searchMenu/SearchMenu";
import "animate.css";

const MoviesSearch = () => {
  const { list, fetchData, fetchSearch, handleInput, searched, setSearched } =
    useContext(MoviesContext);
  const { toogleSearch, setToogleSearch } = useLoad();
  const { handlePageChange, page, setPage, pagination, setTotalPages } =
    usePagination();
  const handleSearch = () => {
    fetchSearch(searched);
    setToogleSearch(true);
  };

  const navigate = useNavigate();

  function limpiarCampo() {
    document.getElementById("buscador").value = "";
  }

  const reset = () => {
    fetchData();
    setSearched(null);
    navigate(-1);
  };

  const clear = () => {
    fetchData();
    limpiarCampo()
    setSearched(null);
  };

  return (
    <div className="animate__animated animate__fadeIn ">
      <div className="flex justify-between px-10 pt-10">
        <HiOutlineArrowSmLeft
          onClick={reset}
          className="w-14 h-8 text-aqua-50 hover:cursor-pointer z-50 "
        />
        <HiOutlineSearch
          onClick={() => setToogleSearch(!toogleSearch)}
          className="w-14 h-8 text-aqua-50 hover:cursor-pointer z-50 md:hidden "
        />
      </div>

      <div className="flex flex-col justify-center gap-4 md:flex-row items-center flex-wrap pb-8">
        <div className="flex md:hidden">
          {toogleSearch && (
            <SearchMenu
            searched={searched}
              toogleSearch={toogleSearch}
              handleInput={handleInput}
              handleSearch={handleSearch}
              clear={clear}
            />
          )}
        </div>
        <div className="hidden md:flex">
          <SearchMenu
          searched={searched}
            handleInput={handleInput}
            handleSearch={handleSearch}
            clear={clear}
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-8 justify-center">
        {list.length > 0 ? (
          list
            .filter((item) => item.backdrop_path)
            .map(
              ({
                id,
                title,
                vote_average,
                release_date,
                video,
                original_name,
                poster_path,
              }) => (
                <Movie
                  id={id}
                  key={id}
                  title={title || original_name}
                  poster={getImg(poster_path)}
                  vote={vote_average}
                  date={release_date}
                  video={video}
                />
              )
            )
        ) ||<h1>Loading</h1>: (
          <h3 className="text-center px-auto rounded-sm w-64 h-14 text-lg custom-text flex items-center justify-center text-white">
            No se encontraron resultados
          </h3>
        )}
      </div>
      <div className="flex justify-center gap-2 flex-wrap mx-2 pt-4">
        {!searched && (
          <Paginacion
            handlePageChange={handlePageChange}
            page={page}
            setPage={setPage}
            pagination={pagination}
            setTotalPages={setTotalPages}
          />
        )}
      </div>
    </div>
  );
};

export default MoviesSearch;
