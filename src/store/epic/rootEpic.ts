import { combineEpics } from "redux-observable";
import { getSpotifyAuthEpic } from "./auth.spotify";


export const rootEpic = combineEpics(getSpotifyAuthEpic);
