import axios from 'axios';

const KEY = "a0d3d78947a19dedcb27f194d7d7e916";
const URL = "https://api.themoviedb.org/3";


export async function getMovies() {
   const url = `${URL}/trending/movie/day?api_key=${KEY}`
    const response = await axios.get(url);
    return response.data;
}

export async function getMovieDetails(movieId) {
    const url = `${URL}/movie/${movieId}?api_key=${KEY}`
    const response = await axios.get(url);
    return response.data;
};

export async function getCredits(movieId) { 
    const url = `${URL}/movie/${movieId}/credits?api_key=${KEY}`
    const response = await axios.get(url);
    return response.data;
};

export async function getReviews(movieId) { 
    const url = `${URL}/movie/${movieId}/reviews?api_key=${KEY}`
    const response = await axios.get(url);
    return response.data;
};

export async function getSearchMovies(query) { 
    const url = `${URL}/search/movie?api_key=${KEY}&query=${query}`
    const response = await axios.get(url);
    return response.data;
};
export function getErrore() {
    console.log('Щось пішло не так! Перезавантажте сторінку');
};