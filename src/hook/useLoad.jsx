import React, { useState } from "react";

const useLoad = () => {
  const [loading, setLoading] = useState(false);
  const [toogleSearch, setToogleSearch] = useState(false)
  return { loading, setLoading,toogleSearch,setToogleSearch };

};

export default useLoad;
