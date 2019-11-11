const API_KEY = "e1e333657772f7a7401e80c7f25feef0";

export const getPopularMovies = (page) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}`
  ).then(res => res.json());
};

export const getTopRatedMovies = (page) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=${page}`
  ).then(res => res.json());
};
