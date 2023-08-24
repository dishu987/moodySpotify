
import { combineReducers } from "redux";
import SpotifyAuthSlice from "./slices/auth.spotify";

const rootReducer = combineReducers({
    getspotifyauth: SpotifyAuthSlice.reducer,
});

export default rootReducer;
