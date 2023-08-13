const config = require("../../package.json");

const IMDB_BASE_URL = "https://api.themoviedb.org/3";
const IMDB_IMAGES_URL = "https://image.tmdb.org/t/p";

const YOUTUBE_BASE_URL = "https://www.youtube.com/watch";

const IMDB_API_KEY = config.projectConfig.apiKey;

const ENDPOINTS = {
  NOW_PLAYING_MOVIES: "/movie/now_playing",
  UPCOMING_MOVIES: "/movie/upcoming",
  GENRES: "/genre/movie/list",
  MOVIE: "/movie",
};

const APPEND_TO_RESPONSE = {
  VIDEOS: "videos",
  CREDITS: "credits",
  RECOMMENDATIONS: "recommendations",
  SIMILAR: "similar",
};

export {
    IMDB_BASE_URL,
    IMDB_API_KEY,
    IMDB_IMAGES_URL,
    ENDPOINTS,
    APPEND_TO_RESPONSE,
    YOUTUBE_BASE_URL,
  };