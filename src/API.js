// import axios from 'axios'

// const BASE_URL = 'https://pixabay.com/api/';
// const API_KEY = '32473548-3011831d563d5a9dc36fe58a5';

// export const getPictures = async (search, page) => {
//     const option = {
//       headers: {
//         'Content-type': 'application/json',
//       },
//       params: {
//         key: API_KEY,
//         q: `${search}`,
//         image_type: 'photo',
//         photo: 'horizontal',
//         safesearch: 'true',
//         page: `${page}`,
//         per_page: 12,
//       },
//     };
//     const { data } = await axios(BASE_URL, option);
//     return data;
// };
  
import axios from 'axios';

export const getMovies = async () => {
    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/trending/movie/day',
        params: { language: 'en-US' },
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjY5OTc1YmFmZjNkMTkwYTU2YTJmMzg0ZTIxMTIxYiIsInN1YiI6IjY0NTRhNDA2ZDQ4Y2VlMDEzNmQ5Zjg0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qbZ9GhLKw8jY0FCRnEzOitheKbZx2tmFnIy63CQwFM4'
        }
    };

    await axios
        .request(options)
        .then(function (response) {
           return(response.data);
        })
        .catch(function (error) {
            console.error(error);
        });
};

