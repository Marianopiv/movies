import React, { useContext, useEffect } from "react";
import { MoviesContext } from "../../context/MoviesProvider";
import { slicePages } from "../../helper";

const Paginacion = ({ handlePageChange, page, setPage, pagination,setTotalPages }) => {

  const { list, added, fetchData } = useContext(MoviesContext);

  const ITEMS_PER_PAGE = 4;

  useEffect(() => {
    list && setTotalPages(Math.ceil(list.length / ITEMS_PER_PAGE));
  }, [list, page]);
  return (
    <>
      <button
        className={`border-2 rounded-md p-1 ${page === 1 ? "bg-gray-500" : ""}`}
        onClick={() => setPage(page - 4)}
        disabled={page === 1}
      >
        Back
      </button>
      
      {slicePages(pagination, page, page + 4).map((item,index) => (
        <button
        key={index}
          className="border-2 rounded-md p-1"
          onClick={() => handlePageChange(item)}
        >
          {item}
        </button>
      ))}
      <button
        disabled={page === 5}
        className={`border-2 rounded-md p-1 ${page === 5 ? "bg-gray-500" : ""}`}
        onClick={() => setPage(page + 4)}
      >
        next
      </button>
    </>
  );
};

export default Paginacion;
