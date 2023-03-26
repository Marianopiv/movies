import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LayoutContext } from "../../context/LayoutProvider";
import { MoviesContext } from "../../context/MoviesProvider";
import { GiBackwardTime } from "react-icons/gi";
import { API_VIDEO } from "../../config/config";
import axios from "axios";
import Loading from "../../UI/Loading";
import useLoad from "../../hook/useLoad";
import "animate.css";

const DinamicPage = () => {
  const { list, added, featured } = useContext(MoviesContext);
  const { width, desktopStyles, mobileStyles, tabletStyles } =
    useContext(LayoutContext);
  const { loading, setLoading } = useLoad();
  const [chosen, setChosen] = useState(null);
  const [video, setVideo] = useState(null);
  const { id } = useParams();

  const fetchVideo = async () => {
    setLoading(true);
    try {
      const result = await axios.get(API_VIDEO(id));
      console.log(result.data.results.find((item) => item));
      setVideo(result.data.results.find((item) => item));
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (added.length > 0) {
      setChosen(added.find((item) => console.log(item.id) && item.id === id));
    }
    if (list) {
      fetchVideo();
      setChosen(list.find((item) => Number(item.id) === Number(id)));
    }
    /* if (featured) {
      fetchVideo();
      setChosen(featured);
    } */
  }, [list.id, chosen]);
  console.log(id);
  console.log(chosen);

  const navigate = useNavigate();
  const reset = () => {
    setChosen(null);
    navigate("/");
  };

  return (
    <div
      className="w-screen flex flex-col gap-16 md:gap-8 relative overflow-scroll animate__animated animate__fadeIn"
      style={
        width > 768
          ? desktopStyles(chosen)
          : width < 768 && width > 480
          ? tabletStyles(chosen)
          : mobileStyles(chosen)
      }
    >
      <div className="dgiark:bg-brown-50"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "110%",
          content: "''",
          zIndex: "5",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
        }}
      />
      <GiBackwardTime
        onClick={reset}
        className="w-14 h-24 text-white mx-auto hover:cursor-pointer z-50 "
      />
      <h1 className="z-50 text-aqua-50 pt-8">{chosen?.original_title}</h1>
      <p className="text-white  text-lg z-50 text-left custom-description px-4 md:px-24">
        {chosen?.overview}
      </p>

      {loading ? (
        <div className="flex h-96 justify-center dark:bg-brown-50">
          <Loading />
        </div>
      ) : video ? (
        <div className="flex justify-center dark:bg-brown-50">
          <iframe
            className="z-50 w-96 h-96 md:h-screen md:pb-48 md:w-screen md:px-10  md:overflow-visible dark:bg-brown-50"
            width="560"
            src={`https://www.youtube-nocookie.com/embed/${video.key}`}
            title={video}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <div className="h-96 z-50 text-2xl flex justify-center text-white">
          Movie Not found
        </div>
      )}
    </div>
  );
};

export default DinamicPage;
