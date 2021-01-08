// Movie API

const API_KEY_ONLY = 'b8996e057d12ef493274fb32a9fcb535';
export const API_KEY = `?api_key=${API_KEY_ONLY}`;

export const API_URL_REQUEST_MOVIE = `https://api.themoviedb.org/3/movie/`;
export const LANGUAGE = '&language=en-US&page=1&region=US';
export const DEFAULT_SORT_BY = 'popular';

export const API_URL_REQUEST_GENRE =  `https://api.themoviedb.org/3/genre/movie/list${API_KEY}&language=en-US`;
export const API_URL_REQUEST_IMG = 'https://image.tmdb.org/t/p/w500/';

export const API_URL_REQUEST_SEARCH = `https://api.themoviedb.org/3/search/movie/${API_KEY}`;

export const STORAGE_FAVORITE_MOVIES = 'your-fav-movies';