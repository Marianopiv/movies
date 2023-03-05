import React from 'react'

const Button = ({action,text,icon,customClass,disabled}) => {
  return (
    <div className={`bg-brown-50 rounded-sm w-60 h-14 text-lg custom-text flex items-center hover:cursor-pointer justify-center gap-2 ${customClass}`} onClick={action} disabled={disabled?true:false}><img className='w-3 h-3 z-40' src={icon} alt="" srcset="" />
    <p>{text}</p></div>
  )
}

export default Button