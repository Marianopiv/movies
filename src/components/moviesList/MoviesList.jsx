import React, { useContext, useEffect, useState } from "react";
import arrow from "../../assets/arrow.png";
import { MoviesContext } from "../../context/MoviesProvider";
import { getImg } from "../../helper";
import useAdd from "../../hook/useAdd";
import Movie from "../movie/Movie";
import "../../home/home.css";

const MoviesList = () => {
  const { list, added, fetchData } = useContext(MoviesContext);
  const { toogle, setToogle } = useAdd();
  const [random, setRandom] = useState(0);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const pagination = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const ITEMS_PER_PAGE = 4; // Number of items to display per page

  useEffect(() => {
    setRandom(Math.round(Math.random() * 14));
  }, []);

  const handlePageChange = (pageNumber) => {
    fetchData(pageNumber);
  };

  const slicePages = (arr, num1, num2) => {
    return arr.slice(num1, num2);
  };

  useEffect(() => {
    list && setTotalPages(Math.ceil(list.length / ITEMS_PER_PAGE));
    console.log(page);
  }, [list, page]);

  return (
    <>
      <div
        className={`bg-brown-50 md:bg-transparent z-30 py-16 ${
          toogle === "option1" ? "md:py-0 md:pt-10" : "md:py-16"
        }  md:w-1/2 md:flex-col md:pl-6 lg:pl-10 lg:pt-4`}
      >
        <div className="custom-background bg-brown-50 absolute h-60 left-0 sm:hidden  w-screen bg-gradient-to-b from-transparent -z-10 to-brown-50 -bottom-60 "></div>
        <div className="flex justify-center items-center pb-7 md:justify-center md:pl-16">
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
            <div className="flex z-50 justify-center flex-wrap gap-4 md:flex-col md:items-center overflow-y-scroll lg:pl-10">
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
                    />
                  )
                )}
            </div>
          )
        ) : added && added.length > 0 ? (
          <div className="flex justify-center flex-col gap-6 w-screen md:w-auto md:h-96 lg:pl-10 md:justify-start">
            {added.slice(0, 4).map(({ file, name, id }, index) => (
              <Movie id={id} key={id} title={name} poster={file} />
            ))}
          </div>
        ) : (
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
        {
          <div className="flex justify-center gap-2 flex-wrap mx-2">
            <button
              className={`border-2 rounded-md p-1 ${
                page === 1 ? "bg-gray-500" : ""
              }`}
              onClick={() => setPage(page - 1)}
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
              onClick={() => setPage(page + 1)}
            >
              Forward
            </button>
          </div>
        }
      </div>
    </>
  );
};

export default MoviesList;
