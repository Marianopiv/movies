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
      <div className="bg-brown-50 md:bg-transparent z-50 py-16 md:w-1/2 md:flex-col md:justify-end">
        <div className="flex justify-center items-center pb-7 md:justify-end">
          <h3 className="custom-text opacity-60 text-cream-50">Ver:</h3>
          <select
            className="text-white custom-text bg-brown-50 md:bg-transparent"
            id="dropdown"
            name="dropdown"
            onChange={(e)=>setToogle(e.target.value)}
          >
            <option value="option1">Populares</option>
            <option value="option2">Mis Peliculas</option>
          </select>
        </div>
        {toogle==="option1"?list && (
          <div className="flex justify-center flex-wrap gap-6 md:flex-col md:items-end">
            {list.slice(0, 4).map(({ id, title, backdrop_path }) => (
              <Movie key={id} title={title} poster={getImg(backdrop_path)} />
            ))}
          </div>
        )
        :
        added && added.length > 0 && (
          <div className="flex justify-center flex-wrap gap-6">
            {added.map(({ file, name }, index) => (
              <Movie key={index} title={name} poster={file} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default MoviesList;
