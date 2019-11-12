import { MOVIE_BASE_URL, API_KEY } from './constants.js'

export const getPopularMovies = (page) => {
  console.log('getPopularMovies');
  return fetch(
    `${MOVIE_BASE_URL}popular?api_key=${API_KEY}&page=${page}`
  ).then(res => res.json());
};

export const getTopRatedMovies = (page) => {
  console.log('getTopRatedMovies');
  return fetch(
    `${MOVIE_BASE_URL}top_rated?api_key=${API_KEY}&page=${page}`
  ).then(res => res.json());
};

export const getMovieById = (id) => {
  return fetch(
    `${MOVIE_BASE_URL}${id}?api_key=${API_KEY}&append_to_response=videos`
  ).then(res => res.json());
};
