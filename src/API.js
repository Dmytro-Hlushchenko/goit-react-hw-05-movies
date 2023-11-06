import axios from 'axios';
// import { Notify } from "notiflix";

const KEY = "a0d3d78947a19dedcb27f194d7d7e916";
const URL = "https://api.themoviedb.org/3";


export async function getMovies(endPoint) {
   const url = `${URL}${endPoint}?api_key=${KEY}`
    const response = await axios.get(url);
    return response.data;
}

export async function getMovieDetails(endPoint, movieId) {
    const url = `${URL}${endPoint}/${movieId}?api_key=${KEY}`
    const response = await axios.get(url);
    return response.data;
};

export function getErrore() {
    console.log('Щось пішло не так! Перезавантажте сторінку');
};