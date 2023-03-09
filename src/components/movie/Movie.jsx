import React from 'react'
import groupPlay from "../../assets/group-play.png"
import "../../home/home.css"
const Movie = ({title,poster}) => {
  return (
    <div className='flex flex-col items-center relative'><div className="absolute w-80 h-48 md:w-48  md:h-32 bg-gradient-to-b from-transparent to-gray-900 rounded-md"></div> <img className='absolute bottom-20 md:bottom-12 z-50 border-white border rounded-full ' src={groupPlay} alt="" /> <p className='absolute text-white bottom-10 text-sm custom-text custom-movie'>{title}</p>
    <img className='w-80 h-48  rounded-md md:w-48 md:h-32
    ' src={poster} alt="" /></div>
  )
}

export default Movie