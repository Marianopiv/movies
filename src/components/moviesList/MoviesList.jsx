import React, { useContext } from "react";
import arrow from "../../assets/arrow.png";
import { MoviesContext } from "../../context/MoviesProvider";
import { getImg } from "../../helper";
import Movie from "../movie/Movie";

const MoviesList = () => {
  const { list, setList } = useContext(MoviesContext);
  return (
    <>
      <div className="bg-brown-50">
        <div className="flex justify-center items-center">
          <h3 className="text-white custom-text">Ver: Populares</h3>
          <img className="h-2 pl-1" src={arrow} alt="" />
        </div>
        {list && (
          <div className="flex justify-center flex-wrap gap-6">
            {list.slice(0, 4).map(({ id, title, backdrop_path }) => (
              <Movie key={id} title={title} poster={getImg(backdrop_path)} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default MoviesList;
