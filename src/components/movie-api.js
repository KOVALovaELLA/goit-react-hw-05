import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDkxNzllNWIxMjRjNWEwNGVhYmUwZjY5ZWNlMTJlNSIsInN1YiI6IjY1ZmI0NDMzOTBmY2EzMDE3ZGFiMjAwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fxPg_RQdYWtFjaPHvUDcG8JMMaMkXJtRjX9A2LPoQas",
    accept: "application/json",
  },
});

export const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

async function fetchData(url = "") {
  const response = await axiosInstance.get(url);
  return response.data;
}

export function fetchTrendingMovies() {
  return fetchData(`/trending/movie/day?language=en-US`).then(
    (data) => data.results
  );
}

export function fetchMovieSearch(query) {
  return fetchData(
    `/search/movie?query=${query}&include_adult=false&language=en-US&page=1`
  ).then((data) => data.results);
}

export function fetchMoviesId(movieId) {
  return fetchData(`/movie/${movieId}?language=en-US`);
}

export function fetchMovieCast(movieId) {
  return fetchData(`/movie/${movieId}/credits?language=en-US`).then(
    (data) => data.cast
  );
}

export function fetchMovieReviews(movieId) {
  return fetchData(`/movie/${movieId}/reviews?language=en-US&page=1`).then(
    (data) => data.results
  );
}
