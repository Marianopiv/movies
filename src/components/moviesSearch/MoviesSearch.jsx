import React, { useContext, useState } from "react";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
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
import Loading from "../../UI/Loading";

const MoviesSearch = () => {
  const { list, fetchData, fetchSearch, handleInput, searched,setSearched,toogleSearch,setToogleSearch,toogleLoader,setToogleLoader } =
    useContext(MoviesContext);
  const { handlePageChange, page, setPage, pagination, setTotalPages } =
    usePagination();
  const handleSearch = () => {
    setToogleLoader(true)
    fetchSearch(searched);
    setToogleSearch(true);
    setTimeout(function() {
      setToogleLoader(false)
    }, 1000);
    
  };

  const navigate = useNavigate();

  function limpiarCampo() {
    document.getElementById("buscador").value = "";
  }

  const reset = () => {
    fetchData();
    setSearched(null);
    setToogleSearch(false)
    navigate(-1);
  };

  const clear = () => {
    fetchData();
    limpiarCampo()
    setSearched(null);
  };
  return (
    <div className="animate__animated w-screen animate__fadeIn h-screen ">
      <div className="flex justify-between px-10 pt-10">
        <HiOutlineArrowSmLeft
          onClick={reset}
          className="w-14 h-8 text-aqua-50 hover:cursor-pointer z-50 "
        />
        <HiOutlineSearch
          onClick={() => setToogleSearch(!toogleSearch)}
          className="w-14 h-8 text-aqua-50 hover:cursor-pointer z-50 py-1 md:hidden "
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
      <div className="flex flex-wrap gap-8 justify-center z-50 ">
      {toogleLoader ? (
        <div className="flex h-fit pt-20 justify-center dark:bg-brown-50 animate__animated animate__fadeIn">
          <Loading dinamic={true}/>
        </div>):list.length > 0 ? (
          list
            .filter((item) => item.poster_path)
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
        ) : (
          <h3 className="text-center px-auto rounded-sm w-screen h-screen text-lg custom-text flex  pt-10 justify-center text-white">
            No se encontraron resultados para {searched?.value}
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
