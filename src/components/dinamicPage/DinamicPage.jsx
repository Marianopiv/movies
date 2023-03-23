import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LayoutContext } from "../../context/LayoutProvider";
import { MoviesContext } from "../../context/MoviesProvider";
import { getImg } from "../../helper";
import { GiBackwardTime } from 'react-icons/gi';

const DinamicPage = () => {
  const { list, added } = useContext(MoviesContext);
  const { width, desktopStyles, mobileStyles } = useContext(LayoutContext);
  const [chosen, setChosen] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (list) {
      setChosen(list.find((item) => item.id === Number(id)));
    }
  }, [list.id, chosen]);
  console.log(chosen);

  const navigate = useNavigate()

  return (
    <div 
    className="w-screen flex flex-col gap-16 h-screen relative"
    style={width > 768 ? desktopStyles(chosen) : mobileStyles(chosen)}
    >
    <GiBackwardTime onClick={()=>navigate("/")} className="w-14 h-14 text-white mx-auto hover:cursor-pointer z-50"/>
      <h1 className="z-50 text-aqua-50 pt-10">{chosen?.original_title}</h1>
      <p className="text-white px-10 z-50 text-3xl text-left">{chosen?.overview}</p>
      <div className="md:hidden absolute w-screen h-screen top-0">
          {
            <div className="md:hidden absolute h-screen sm:h-96 w-screen bg-gradient-to-b from-transparent z-30 to-brown-50 bottom-18 sm:-bottom-8 "></div>
          }
          <div className="md:hidden absolute h-96 w-screen bg-gradient-to-b from-transparent z-30 to-brown-50 bottom-8 sm:-bottom-10 "></div>
          {/* <img
              className="w-screen absolute z-20 h-fit sm:h-fit object-cover sm:object-fill right-1 bg-gradient-to-b from-transparent to-brown-50"
              src={featured && getImg(featured.poster_path)}
              alt=""
            /> */}
        </div>
    </div>
  );
};

export default DinamicPage;
