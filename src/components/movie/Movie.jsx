import React, { useState } from 'react'
import groupPlay from "../../assets/group-play.png"
import "../../home/home.css"
import star from "../../assets/star.png"
import playLittle from "../../assets/playLittle.png"
const Movie = ({title,poster,vote,date}) => {
  const [reveal, setReveal] = useState(false)
  return (
    !reveal?(<div className='flex flex-col items-center relative hover:cursor-pointer' onClick={date&&(()=>setReveal(!reveal))}><div className="absolute w-80 h-48 md:w-48  md:h-32 bg-gradient-to-b from-transparent to-gray-900 rounded-md"></div> <img className='absolute bottom-20 md:bottom-14 z-50 border-white border rounded-full ' src={groupPlay} alt="" /> <p className='absolute text-white bottom-10 text-sm custom-text custom-movie md:bottom-8'>{title}</p>
    <img className='w-80 h-48  rounded-md md:w-48 md:h-32
    ' src={poster} alt="" /></div>):
    (<div className='flex flex-col items-center relative hover:cursor-pointer' onClick={()=>setReveal(!reveal)}><img className='absolute left-8 bottom-4 z-50 w-5 h-5 mb-2 md:left-6' src={star}/><p className='absolute text-white z-50 left-16 bottom-4 mb-1 md:left-14'>{vote}</p> <div className="absolute w-80 h-48 md:w-48  md:h-32 bg-gradient-to-b from-gray-900 to-gray-900 opacity-60 rounded-md"></div> <img className='absolute bottom-16 mb-2 left-8 md:bottom-10 z-50 border-white border rounded-full w-8 md:w-6 md:left-20 md:top-2 md:ml-1 ' src={playLittle} alt="" /> <p className='absolute text-white bottom-20 text-sm custom-text custom-movie md:top-10 md:left-3'>{title}</p>
    <img className='w-80 h-48  rounded-md md:w-48 md:h-32
    ' src={poster} alt="" /><p className='absolute text-white z-50 bottom-4 mb-1 right-8'>{date.slice(0,4)}</p></div>)
  )
}

export default Movie