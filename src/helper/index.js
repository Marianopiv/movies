import { API_IMG_PREFIX__HD } from "../config/config"

export const getImg = (img) => `${API_IMG_PREFIX__HD}${img}`

export const chooseMovie = (arr) => arr[Math.floor(Math.random() * 20)]