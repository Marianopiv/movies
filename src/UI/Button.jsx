import React from 'react'

const Button = ({action,text,icon,customClass}) => {
  return (
    <div className={`bg-brown-50 rounded-sm w-60 h-14 text-lg custom-text text-cream-50 flex items-center justify-center gap-2 ${customClass}`} onClick={action}><img className='w-3 h-3' src={icon} alt="" srcset="" />
    <p></p>{text}</div>
  )
}

export default Button