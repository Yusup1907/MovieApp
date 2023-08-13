const axios = require("axios").default;
import {
  IMDB_BASE_URL,
  IMDB_API_KEY,
  IMDB_IMAGE_BASE_URL,
  ENDPOINTS,
  YOUTUBE_BASE_URL,
} from "../constants/Urls";
import LANGUAGES from "../constants/Languages";

const IMDB_HTTP_REQUEST = axios.create({
  baseURL: IMDB_BASE_URL,
  params: {
    api_key: IMDB_API_KEY,
  },
});

const getNowPlayingMovies = () =>
  IMDB_HTTP_REQUEST.get(ENDPOINTS.NOW_PLAYING_MOVIES);

const getUpcomingMovies = () =>
  IMDB_HTTP_REQUEST.get(ENDPOINTS.UPCOMING_MOVIES);

const getMovieById = (movieId, append_to_response = "") =>
  IMDB_HTTP_REQUEST.get(
    `${ENDPOINTS.MOVIE}/${movieId}`,
    append_to_response ? { params: { append_to_response } } : null
  );

const getAllGenres = () => IMDB_HTTP_REQUEST.get(ENDPOINTS.GENRES);

const getPoster = (path) => `${IMDB_IMAGE_BASE_URL}/original${path}`;

const getVideo = (key) => `${YOUTUBE_BASE_URL}?v=${key}`;

const getLanguage = (language_iso) =>
  LANGUAGES.find((language) => language.iso_639_1 === language_iso);

export {
  getNowPlayingMovies,
  getUpcomingMovies,
  getAllGenres,
  getMovieById,
  getPoster,
  getLanguage,
  getVideo,
};
