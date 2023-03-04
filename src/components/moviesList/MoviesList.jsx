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
      <div className="bg-brown-50 mb-5">
        <div className="flex justify-center items-center">
          <h3 className="custom-text">Ver</h3>
          <select
            className="text-white custom-text bg-brown-50"
            id="dropdown"
            name="dropdown"
            onChange={(e)=>setToogle(e.target.value)}
          >
            <option value="option1">Populares:</option>
            <option value="option2">Favoritas:</option>
          </select>
        </div>
        {toogle==="option1"?list && (
          <div className="flex justify-center flex-wrap gap-6">
            {list.slice(0, 4).map(({ id, title, backdrop_path }) => (
              <Movie key={id} title={title} poster={getImg(backdrop_path)} />
            ))}
          </div>
        )
        :
        added && added.length > 0 && (
          <div className="flex justify-center flex-wrap gap-6">
            {added.map(({ title, backdrop_path }, index) => (
              <Movie key={index} title={title} poster={backdrop_path} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default MoviesList;
