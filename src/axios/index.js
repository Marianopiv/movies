import axios from "axios";
export const API_URL = "https://api.themoviedb.org/3/";


const axiosClient = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie"
})

export const get = async (path) => {
    try {
        const resultado = await axiosClient.get(`${path}`)
        return resultado.data
    } catch (error) {
        console.log(error)
    }
}


