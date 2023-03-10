import React from 'react'

const Loading = () => {
  return (<div className="w-screen h-screen flex flex-col gap-4 justify-center items-center">
    <p className='custom-text text-aqua-50 text-2xl bg-brown-50'>Loading</p>
    <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Loading