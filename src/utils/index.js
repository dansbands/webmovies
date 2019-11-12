import { API_KEY } from './constants.js'

export const getPopularMovies = (page) => {
  console.log('getPopularMovies');
  return fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}`
  ).then(res => res.json());
};

export const getTopRatedMovies = (page) => {
  console.log('getTopRatedMovies');
  return fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=${page}`
  ).then(res => res.json());
};

export const getMovieById = (id) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`
  ).then(res => res.json());
};
