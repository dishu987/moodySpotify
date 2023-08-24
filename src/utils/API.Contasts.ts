const SPOTIFY_AUTH = import.meta.env.VITE_SPOTIFY_ENDPOINT;
const SPOTIFY_API = import.meta.env.VITE_SPOTIFY_API;

export const ApiConstants = {
    SPOTIFY: {
        AUTHENTICATE: SPOTIFY_AUTH + "/api/token",
        SEARCH: SPOTIFY_API + "/v1/search",
        ALBUMS: SPOTIFY_API + "/v1/albums",
        TRACK: SPOTIFY_API + "/v1/tracks"
    }
};
