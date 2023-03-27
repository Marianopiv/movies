import { API_IMG_PREFIX__HD } from "../config/config"

export const getImg = (img) => `${API_IMG_PREFIX__HD}${img}`

export const chooseMovie = (arr) => arr[Math.floor(Math.random() * 10)]

export const slicePages = (arr, num1, num2) => {
    return arr.slice(num1, num2);
  };