import React, { useContext, useState } from "react";
import { GiBackwardTime } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { MoviesContext } from "../../context/MoviesProvider";
import { getImg, slicePages } from "../../helper";
import useLoad from "../../hook/useLoad";
import Movie from "../movie/Movie";

const MoviesSearch = () => {
  const {
    list,
    fetchData,
    fetchSearch,
    handleInput,
    searched,
    setSearched,
  } = useContext(MoviesContext);
  const { toogleSearch, setToogleSearch } = useLoad();
  const [page, setPage] = useState(1);
  const pagination = [0,1, 2, 3, 4, 5, 6, 7, 8, 9];
  const handlePageChange = (pageNumber) => {
    fetchData(pageNumber);
  };
  const handleSearch = () => {
    fetchSearch(searched);
    setToogleSearch(true);
  };

  const navigate = useNavigate()

  const reset = () => {
    fetchData()
    setSearched(null);
    navigate(-1);
  };

  const clear = () => {
    fetchData();
    setSearched(null);
  };

  return (
    <div className="">
      <GiBackwardTime
        onClick={reset}
        className="w-14 h-24 text-white mx-auto hover:cursor-pointer z-50 "
      />
      <h3 className="text-white py-10 text2xl">Busca tu pelicula</h3>
      <div className="flex flex-col justify-center gap-4 md:flex-row items-center flex-wrap pb-8">
        <input onChange={handleInput} type="text" />
        <button onClick={handleSearch}>Search</button>
        <button onClick={clear}>Resetea Buscador</button>
      </div>
      <div className="flex flex-wrap gap-8 justify-center">
        {list.length>0?list.filter((item) => item.backdrop_path)
          .map(
            ({
              id,
              title,
              backdrop_path,
              vote_average,
              release_date,
              video,
              original_name,
            }) => (
              <Movie
                id={id}
                key={id}
                title={title || original_name}
                poster={getImg(backdrop_path)}
                vote={vote_average}
                date={release_date}
                video={video}
              />
            )
          ): <h3 className="text-white">No se encontraron resultados</h3>}
      </div>
      <div className="flex justify-center gap-2 flex-wrap mx-2 pt-4">
        {!searched && (
          <>
            <button
              className={`border-2 rounded-md p-1 ${
                page === 1 ? "bg-gray-500" : ""
              }`}
              onClick={() => setPage(page - 4)}
              disabled={page === 1}
            >
              Back
            </button>
            {slicePages(pagination, page, page + 4).map((item) => (
              <button
                className="border-2 rounded-md p-1"
                onClick={() => handlePageChange(item)}
              >
                {item}
              </button>
            ))}
            <button
              disabled={page === 5}
              className={`border-2 rounded-md p-1 ${
                page === 5 ? "bg-gray-500" : ""
              }`}
              onClick={() => setPage(page + 4)}
            >
              next
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default MoviesSearch;
