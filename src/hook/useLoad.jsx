import React, { useState } from "react";

const useLoad = () => {
  const [loading, setLoading] = useState(false);
  
  return { loading, setLoading };

};

export default useLoad;
