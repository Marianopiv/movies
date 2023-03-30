import React, { useState } from "react";
import groupPlay from "../../assets/group-play.png";
import "../../home/home.css";
import star from "../../assets/star.png";
import { Link } from "react-router-dom";
import Loading from "../../UI/Loading";
const Movie = ({ title, poster, vote, date, id, video, backdrop_path }) => {
  const [reveal, setReveal] = useState(false);

  return (
    <Link to={`/dinamic-page/${id}`}>
      <div
        className={`flex flex-col items-center relative hover:cursor-pointer ${backdrop_path?"":"animate__animated animate__fadeIn"}`}
        onMouseOut={() => setReveal(!reveal)}
      >
        {vote && (
          <img
            className="absolute left-8 bottom-4 z-50 w-5 h-5 mb-2 md:left-6 pointer-events-none"
            src={star}
          />
        )}
        <p className="absolute text-white z-50 left-16 bottom-4 mb-1 md:left-14 pointer-events-none">
          {vote}
        </p>{" "}
        <div
          className={` ${
            backdrop_path
              ? "absolute w-80 h-48 md:w-48  md:h-32 bg-gradient-to-b from-gray-900 to-gray-900 hover:opacity-0 opacity-60 rounded-md"
              : ""
          }`}
        ></div>{" "}
        {backdrop_path && (
          <p
            className={`absolute pointer-events-none text-white bottom-20 text-sm custom-text custom-movie md:top-10 ${
              vote ? "md:left-3" : "right-30"
            }`}
          >
            {title}
          </p>
        )}
        <img
          className={` ${
            backdrop_path ? "h-48 w-80 rounded-md md:w-48 md:h-32" : "h-96 rounded-md hover:border"
          }  `}
          src={poster}
          alt=""
        />
        <p className="absolute text-white z-50 bottom-4 mb-1 right-8 pointer-events-none">
          {date?.slice(0, 4)}
        </p>
      </div>
    </Link>
  );
};

export default Movie;
