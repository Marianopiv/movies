import React, { useContext, useEffect } from "react";
import arrow from "../../assets/arrow.png";
import { MoviesContext } from "../../context/MoviesProvider";
import { getImg } from "../../helper";
import useAdd from "../../hook/useAdd";
import Movie from "../movie/Movie";
import "../../home/home.css"

const MoviesList = () => {
  const { list,added } = useContext(MoviesContext);
  const {toogle,setToogle,error,setError} = useAdd()

  return (
    <>
      <div className={`bg-brown-50 md:bg-transparent z-50 py-16 ${toogle==="option1"?"md:py-0 md:pt-10":"md:py-16"}  md:w-1/2 md:flex-col md:pl-6 lg:pl-10 lg:pt-4`} >
        <div className="flex justify-center items-center pb-7 md:justify-center md:pl-16">
          <h3 className="custom-text opacity-60 text-cream-50 ">Ver:</h3>
          <select
            className="text-cream-50  custom-text bg-brown-50 md:bg-transparent"
            id="dropdown"
            name="dropdown"
            onChange={(e)=>setToogle(e.target.value)}
          >
            <option className="bg-brown-50 text-white" value="option1">Populares</option>
            <option className="bg-brown-50 text-white" value="option2">Mis Peliculas</option>
          </select>
        </div>
        {toogle==="option1"?list && (
          <div className="flex justify-center flex-wrap gap-6 md:flex-col md:items-center lg:pl-10 ">
            {list.slice(0, 4).map(({ id, title, backdrop_path,vote_average,release_date }) => (
              <Movie key={id} title={title} poster={getImg(backdrop_path)} vote={vote_average} date={release_date} />
            ))}
          </div>
        )
        :
        added && added.length > 0 ? (
          <div className="flex justify-center flex-col gap-6 w-screen md:w-auto md:h-96 lg:pl-10 md:justify-start">
            {added.slice(0, 4).map(({ file, name }, index) => (
              <Movie key={index} title={name} poster={file} />
            ))}
          </div>
        ):<div className="sm:flex justify-center flex-wrap gap-6 md:flex-col md:items-center lg:pl-10 sm:invisible hidden">
        {list.slice(0, 4).map(({ id, title, backdrop_path,vote_average,release_date }) => (
          <Movie key={id} title={title} poster={getImg(backdrop_path)} vote={vote_average} date={release_date} />
        ))}
      </div>}
      </div>
    </>
  );
};

export default MoviesList;
