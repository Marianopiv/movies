import axios from "axios";

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


