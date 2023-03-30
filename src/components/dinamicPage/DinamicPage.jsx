import React, { useContext} from "react";
import { LayoutContext } from "../../context/LayoutProvider";
import { MoviesContext } from "../../context/MoviesProvider";
import Loading from "../../UI/Loading";
import "animate.css";
import useDinamic from "../../hook/useDinamic";
import { HiOutlineArrowSmLeft } from "react-icons/hi";

const dinamicStyles = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "110%",
  content: "''",
  zIndex: "5",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
}

const DinamicPage = () => {
  const { list, added, featured } = useContext(MoviesContext);
  const { width, desktopStyles, mobileStyles, tabletStyles } = useContext(LayoutContext);
  const {
    chosen,
    chosenFeatured,
    video,
    loading,
    autoPlay,
    reset,
    chosenAdded,
  } = useDinamic(list, added, featured);

  return (
    <div
      className={`w-screen flex flex-col gap-16 md:gap-8 relative overflow-hidden animate__animated animate__fadeIn dark:bg-brown-50 ${chosenAdded? "h-fit flex sm:h-screen md:h-fit":""}`}
      style={
        width > 768
          ? desktopStyles(chosenAdded||chosen || chosenFeatured)
          : width < 768 && width > 480
          ? tabletStyles(chosenAdded||chosen || chosenFeatured)
          : mobileStyles(chosenAdded||chosen || chosenFeatured)
      }
    >
      <div
        className="dark:bg-brown-50"
        style={dinamicStyles}
      />
      <HiOutlineArrowSmLeft
        onClick={reset}
        className="w-14 pl-4 h-24 text-white hover:cursor-pointer z-50 "
      />
      <h1 className="z-50 text-aqua-50 pt-8">
        {chosenAdded?.name||chosen?.title || chosen?.original_name || chosenFeatured?.title}
      </h1>
      <p className="text-white  text-lg z-50 text-left custom-description px-4 md:px-24">
        {(!chosenAdded)&&(chosen?.overview || chosenFeatured?.overview)}
      </p>

      {loading ? (
        <div className="flex h-screen justify-center dark:bg-brown-50">
          <Loading dinamic={true}/>
        </div>
      ) : video ? (
        <div className="flex justify-center dark:bg-transparent">
          <iframe
            className="z-50 w-96 h-60 md:h-screen md:pb-48 md:w-screen md:px-10   dark:bg-brown-50 animate__animated animate__backInUp"
            width="560"
            src={`https://www.youtube-nocookie.com/embed/${video.key}?autoplay=${autoPlay}`}
            title={video}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <div className=" bg-gradient-to-b from-transparent to-brown-50 z-20 h-fit">
        <div className="text-center z-50 text-2xl flex justify-center px-auto rounded-sm  custom-text text-white h-60 sm:h-96 md:pt-20 md">
          Video de youtube no disponible
        </div></div>
      )}
    </div>
  );
};

export default DinamicPage;
