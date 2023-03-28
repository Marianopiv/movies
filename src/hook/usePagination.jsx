import React, { useContext, useState } from "react";
import { MoviesContext } from "../context/MoviesProvider";

const usePagination = () => {
    const {fetchData} =
    useContext(MoviesContext);
  const [page, setPage] = useState(1);
  const pagination = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [totalPages, setTotalPages] = useState(1);

  const handlePageChange = (pageNumber) => {
    fetchData(pageNumber);
  };

  return { handlePageChange, page, setPage, pagination,totalPages,setTotalPages };
};

export default usePagination;
