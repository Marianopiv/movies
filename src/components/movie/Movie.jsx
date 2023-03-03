import React from 'react'
import groupPlay from "../../assets/group-play.png"
const Movie = ({title,poster}) => {
  return (
    <div className='flex flex-col items-center relative '><div className="absolute w-80 h-48  bg-gradient-to-b from-transparent to-gray-900"></div> <img className='absolute bottom-20 ' src={groupPlay} alt="" /> <p className='absolute text-white opacity-70 bottom-10 text-sm custom-text'>{title}</p>
    <img className='w-80 h-48 rounded-md
    ' src={poster} alt="" /></div>
  )
}

export default Movie