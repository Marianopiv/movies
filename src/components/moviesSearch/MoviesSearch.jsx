import React, { useContext, useState } from 'react'
import { GiBackwardTime } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import { MoviesContext } from '../../context/MoviesProvider'
import { getImg, slicePages } from '../../helper';
import Movie from '../movie/Movie';

const MoviesSearch = () => {
    const {list,fetchData} = useContext(MoviesContext)
    const [page, setPage] = useState(1);
    const pagination = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const handlePageChange = (pageNumber) => {
        fetchData(pageNumber);
      };
    const navigate = useNavigate()
  return (
    <div className=''>
        <GiBackwardTime
        onClick={()=>navigate(-1)}
        className="w-14 h-24 text-white mx-auto hover:cursor-pointer z-50 "
      />
        <h3 className='text-white py-10'>Busca tu pelicula</h3>
        <input type="text" />
    <div className='flex flex-wrap gap-8 justify-center'>{list?.map(
        ({
          id,
          title,
          backdrop_path,
          vote_average,
          release_date,
          video,
        }) => (
          <Movie
            id={id}
            key={id}
            title={title}
            poster={getImg(backdrop_path)}
            vote={vote_average}
            date={release_date}
            video={video}
          />
        )
      )}</div>
      <div className="flex justify-center gap-2 flex-wrap mx-2 pt-4">
            <button
              className={`border-2 rounded-md p-1 ${
                page === 1 ? "bg-gray-500" : ""
              }`}
              onClick={() => setPage(page - 4)}
              disabled={page === 1}
            >
              Back
            </button>
            {slicePages(pagination, page, page + 4).map((item) => (
              <button
                className="border-2 rounded-md p-1"
                onClick={() => handlePageChange(item)}
              >
                {item}
              </button>
            ))}
            <button
              disabled={page === 5}
              className={`border-2 rounded-md p-1 ${
                page === 5 ? "bg-gray-500" : ""
              }`}
              onClick={() => setPage(page + 4)}
            >
              next
            </button>
          </div>
      </div>
  )
}

export default MoviesSearch