export const getImg = (img) => `https://image.tmdb.org/t/p/w500${img}`

export const chooseMovie = (arr) => arr.slice(0,20)[Math.floor(Math.random() * 20)]