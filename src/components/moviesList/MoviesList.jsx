import React, { useContext, useEffect } from "react";
import arrow from "../../assets/arrow.png";
import { MoviesContext } from "../../context/MoviesProvider";
import { getImg } from "../../helper";
import useAdd from "../../hook/useAdd";
import Movie from "../movie/Movie";

const MoviesList = () => {
  const { list,added } = useContext(MoviesContext);
  const {toogle,setToogle} = useAdd()

  return (
    <>
      <div className="bg-brown-50 md:bg-transparent z-50 py-16 md:py-0 md:w-1/2 md:flex-col md:pl-6 lg:pl-10 lg:pt-4">
        <div className="flex justify-center items-center pb-7 md:justify-center md:pl-16">
          <h3 className="custom-text opacity-60 text-cream-50">Ver:</h3>
          <select
            className="text-white custom-text bg-brown-50 md:bg-transparent"
            id="dropdown"
            name="dropdown"
            onChange={(e)=>setToogle(e.target.value)}
          >
            <option className="bg-brown-50 custom-text " value="option1">Populares</option>
            <option className="bg-brown-50 custom-text " value="option2">Mis Peliculas</option>
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
          <div className="flex justify-center flex-wrap flex-col gap-6 lg:pl-10 md:h-screen md:justify-start">
            {added.slice(0, 4).map(({ file, name }, index) => (
              <Movie key={index} title={name} poster={file} />
            ))}
          </div>
        ):<div className="w-screen h-screen"></div>}
      </div>
    </>
  );
};

export default MoviesList;
