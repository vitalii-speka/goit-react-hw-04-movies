import Axios from "axios";

const KEY = "66851c2d78ce86a1843cb2ac55e2da92";
const BASE_URL = "https://api.themoviedb.org/3/";

export const showTrending = () =>
  Axios.get(`${BASE_URL}trending/movie/day?api_key=${KEY}`);

export const showMovieQuery = (query) =>
  Axios.get(
    `${BASE_URL}search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );

export const showMovieId = (movieId) =>
  Axios.get(`${BASE_URL}movie/${movieId}?api_key=${KEY}&language=en-US`);

export const showCast = (movieId) =>
  Axios.get(
    `${BASE_URL}movie/${movieId}/credits?api_key=${KEY}&language=en-US`
  );

export const showreviews = (movieId) =>
  Axios.get(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`
  );
