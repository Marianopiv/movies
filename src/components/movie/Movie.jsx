import React, { useState } from "react";
import groupPlay from "../../assets/group-play.png";
import "../../home/home.css";
import star from "../../assets/star.png";
import playLittle from "../../assets/playLittle.png";
import { Link } from "react-router-dom";
const Movie = ({ title, poster, vote, date, id,video }) => {
  const [reveal, setReveal] = useState(false);

  return  (
    <Link to={`/dinamic-page/${id}`}>
      <div
        className="flex flex-col items-center relative hover:cursor-pointer"
        onMouseOut={() => setReveal(!reveal)}
      >
        {vote&&<img
          className="absolute left-8 bottom-4 z-50 w-5 h-5 mb-2 md:left-6"
          src={star}
        />}
        <p className="absolute text-white z-50 left-16 bottom-4 mb-1 md:left-14">
          {vote}
        </p>{" "}
        <div className="absolute w-80 h-48 md:w-48  md:h-32 bg-gradient-to-b from-gray-900 to-gray-900 hover:opacity-0 opacity-60 rounded-md"></div>{" "}
        <p className={`absolute text-white bottom-20 text-sm custom-text custom-movie md:top-10 ${vote?"md:left-3":"right-30"}`}>
          {title}
        </p>
        <img
          className="w-80 h-48  rounded-md md:w-48 md:h-32
    "
          src={poster}
          alt=""
        />
        <p className="absolute text-white z-50 bottom-4 mb-1 right-8">
          {date?.slice(0, 4)}
        </p>
      </div>
    </Link>
  );
};

export default Movie;
