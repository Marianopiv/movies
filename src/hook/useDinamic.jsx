import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_VIDEO } from "../config/config";
import useLoad from "./useLoad";

const useDinamic = (list, added, featured) => {
  const [chosen, setChosen] = useState(null);
  const [chosenFeatured, setChosenFeatured] = useState(null);
  const [chosenAdded, setChosenAdded] = useState(null);
  const [video, setVideo] = useState(null);
  const { id } = useParams();
  const [autoPlay, setAutoPlay] = useState(false);
  const { setLoading, loading } = useLoad();
  const navigate = useNavigate();
  const reset = () => {
    setChosen(null);
    setChosenFeatured(null);
    setAutoPlay(false);
    navigate(-1);
  };

  const fetchVideo = async () => {
    setLoading(true);
    if (list) {
      try {
        const result = await axios.get(API_VIDEO(id));
        setVideo(result.data.results.find((item) => item));
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    } else {
        setLoading(false)
    }
  };

  useEffect(() => {
    if (added.length > 0) {
      const resultado = added.find((item) => item.id === id);
      setChosenAdded(resultado);
    }
    if (list) {
      fetchVideo();
      setChosen(list.find((item) => Number(item.id) === Number(id)));
    }
    if (featured) {
      fetchVideo();
      setAutoPlay(true);
      setChosenFeatured(featured);
    }
  }, [list.id, chosen]);

  return {
    chosen,
    chosenFeatured,
    video,
    loading,
    autoPlay,
    chosenAdded,
    reset,
  };
};

export default useDinamic;
