import React from 'react'
import "./ui.css"
const Button = ({action,text,icon,customClass,disabled}) => {
  return (
    <div className={`bg-brown-50 rounded-sm w-64 h-14 text-lg custom-text flex items-center hover:cursor-pointer justify-center gap-2 ${customClass}`} onClick={action} disabled={disabled?true:false}>{icon?<img className='w-3 h-3 z-40' src={icon} alt=""/>:""}
    <p className={`btnStyle ${text==="Subir Película"&&"w-auto"}`}>{text}</p></div>
  )
}

export default Button