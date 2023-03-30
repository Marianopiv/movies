import React, { useContext, useEffect, useState } from "react";
import { MoviesContext } from "../../context/MoviesProvider";
import { getImg, slicePages } from "../../helper";
import useAdd from "../../hook/useAdd";
import Movie from "../movie/Movie";
import "../../home/home.css";

const MoviesList = () => {
  const { list, added, fetchData } = useContext(MoviesContext);
  const { toogle, setToogle } = useAdd();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const pagination = [0,1, 2, 3, 4, 5, 6, 7, 8, 9];

  const ITEMS_PER_PAGE = 4;

  const handlePageChange = (pageNumber) => {
    fetchData(pageNumber);
  };

  useEffect(() => {
    console.log(page)
    list && setTotalPages(Math.ceil(list.length / ITEMS_PER_PAGE));
  }, [list, page]);

  return (
    <>
      <div
        className={`bg-brown-50 md:bg-transparent z-30  ${
          toogle === "option1" ? "py-8 md:py-0 md:pb-8" : "md:h-5/6 pt-10 md:pt-0"
        }  md:w-1/2  md:flex-col md:pl-6 lg:pl-10`}
      >
        <div className="custom-background bg-brown-50 absolute h-60 left-0 sm:hidden  w-screen bg-gradient-to-b from-transparent -z-10 to-brown-50 -bottom-60 "></div>
        <div className="flex justify-center items-center md:justify-center md:pl-16 pb-10 md:pb-6">
          <h3 className="custom-text opacity-60 text-cream-50 ">Ver:</h3>
          <select
            className="text-cream-50  custom-text bg-brown-50 md:bg-transparent"
            id="dropdown"
            name="dropdown"
            onChange={(e) => setToogle(e.target.value)}
          >
            <option className="bg-brown-50 text-white" value="option1">
              Populares
            </option>
            <option className="bg-brown-50 text-white" value="option2">
              Mis Peliculas
            </option>
          </select>
        </div>
        {toogle === "option1" ? (
          list && (
            <div className="flex z-50 justify-center flex-wrap gap-4 md:flex-col md:items-center lg:pl-10">
              {list
                .slice(ITEMS_PER_PAGE * (page - 1), ITEMS_PER_PAGE * page)
                .map(
                  ({
                    id,
                    title,
                    backdrop_path,
                    vote_average,
                    release_date,
                    video,
                  }) => (
                    <Movie
                      id={id}
                      key={id}
                      title={title}
                      poster={getImg(backdrop_path)}
                      vote={vote_average}
                      date={release_date}
                      video={video}
                      backdrop_path={backdrop_path}
                    />
                  )
                )}
            </div>
          )
        ) : added && added.length > 0 ? (
          <div className="flex justify-center flex-col  gap-6 w-screen md:w-auto md:h-auto lg:pl-10 ">
            {added.slice(0, 4).map(({ file, name, id }, index) => (
              <Movie id={id} key={id} title={name} poster={file} backdrop_path={file} />
            ))}
          </div>
        ) :added.length===0?(<p className="text-white h-96 text-center px-10 custom-text leading-7 md:text-right">No se encontraron peliculas propias, agregue nuevas para visualizarlas aqui</p>) : (
          <div className="sm:flex z-50 justify-center flex-wrap gap-6 md:flex-col md:items-center lg:pl-10 sm:invisible hidden">
            {list
              .slice(0, 4)
              .map(
                ({ id, title, backdrop_path, vote_average, release_date }) => (
                  <Movie
                    key={id}
                    title={title}
                    poster={getImg(backdrop_path)}
                    vote={vote_average}
                    date={release_date}
                  />
                )
              )}
          </div>
        )}
        {toogle === "option1" && (
          <div className="flex justify-center gap-2 flex-wrap mx-2 pt-4 lg:pl-10">
            <button
              className={`border-2 rounded-md p-1 ${
                page === 1 ? "bg-gray-500" : ""
              }`}
              onClick={() => setPage(page - 4)}
              disabled={page === 1}
            >
              Back
            </button>
            {slicePages(pagination, page, page + 4).map((item,index) => (
              <button
                key={index}
                className="border-2 rounded-md p-1"
                onClick={() => handlePageChange(item+2)}
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
          </div>
        )}
      </div>
    </>
  );
};

export default MoviesList;
