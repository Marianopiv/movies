import React from 'react'
import Button from '../../UI/Button'

const SearchMenu = ({handleInput,handleSearch,clear,toogleSearch,searched}) => {
    
  return (
    <div className={`flex flex-col justify-center gap-4 md:flex-row items-center flex-wrap pb-8 animate__animated ${toogleSearch?"animate__fadeInDown":""}`}>
          <p className="text-center px-auto rounded-sm w-64 h-14 text-lg custom-text flex items-center justify-center text-white">
          Busca tu pelicula
        </p>
        <input id='buscador'
          className="text-center rounded-sm w-64 h-14 text-lg custom-text flex items-center justify-center"
          onChange={handleInput}
          type="text"
        />
        <Button
          disabled={!searched||searched===""||searched===undefined}
          action={handleSearch}
          text={"Buscar"}
          customClass={"border text-cream-50 hover:text-aqua-50"}
        />
        <Button
          action={clear}
          text={"Resetea buscador"}
          customClass={"border text-cream-50 hover:text-aqua-50"}
        /></div>
  )
}

export default SearchMenu