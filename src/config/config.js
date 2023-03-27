export const API_URL = "https://api.themoviedb.org/3/";
export const LANGUAGE = "es";

export const API_TRENDING = `${API_URL}trending/all/day${import.meta.env.VITE_API_KEY}&language=${LANGUAGE}`;
export const API_POPULAR_MOVIES = `${API_URL}movie/popular${import.meta.env.VITE_API_KEY}&language=${LANGUAGE}`;
export const API_POPULAR_TV_SHOW = `${API_URL}tv/popular${import.meta.env.VITE_API_KEY}&language=${LANGUAGE}`;

export const API_MOVIES_GENRE = `${API_URL}genre/movie/list${import.meta.env.VITE_API_KEY}&language=${LANGUAGE}`;
export const API_TV_GENRE = `${API_URL}genre/tv/list${import.meta.env.VITE_API_KEY}&language=${LANGUAGE}`;

export const API_MOVIES_RECOMMENDATIONS = `${API_URL}movie/335787/recommendations${import.meta.env.VITE_API_KEY}&language=en-US&page=1`;

export  const API_SEARCH = `${API_URL}search/multi${import.meta.env.VITE_API_KEY}&language=${LANGUAGE}&page=1&include_adult=false&query=`;
export const API_DISCOVER_MOVIE = `${API_URL}discover/movie${import.meta.env.VITE_API_KEY}&language=${LANGUAGE}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;
export const API_DISCOVER_TV = `${API_URL}discover/tv${import.meta.env.VITE_API_KEY}&language=${LANGUAGE}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;

export const API_IMG_PREFIX = "https://image.tmdb.org/t/p/w185";
export const API_IMG_PREFIX__HD = "https://image.tmdb.org/t/p/w780";

export const API_VIDEO = (id) => `https://api.themoviedb.org/3/movie/${id}/videos${import.meta.env.VITE_API_KEY}&language=${LANGUAGE}`