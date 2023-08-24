import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { AUTH_SPOTIFY_INTERFACE } from "../../../interface/auth.spotify";

const initialState: AUTH_SPOTIFY_INTERFACE = {
  data: {
    token: "",
  },
  isLoading: false,
  isSuccessful: false,
  isExpired: false,
  error: {},
};

export const SpotifyAuthSlice = createSlice({
  name: "SpotifyAuth",
  initialState,
  reducers: {
    getAuthRequestAction: (state: any) => {
      state.isLoading = true;
    },
    getSpotifyTokenExpiredAction: (state: any) => {
      state.isExpired = true;
      state.isLoading = true;
    },
    getSpotifyAuthExpiredTokenAction: (state: any, action: PayloadAction<[]>) => {
      state.data.token.access = action.payload;
      state.isLoading = false;
      state.result = {};
      state.isSuccessful = true;
      state.isExpired = false;
    },
    getSpotifyAuthSuccessAction: (state: any, action: PayloadAction<[]>) => {
      state.data = action.payload;
      state.isLoading = false;
      state.result = {};
      state.isSuccessful = true;
      state.isExpired = false;
    },
    getSpotifyAuthFailedAction: (state: any, action: PayloadAction<{}>) => {
      state.isSuccessful = false;
      state.isLoading = false;
      state.result = action.payload;
      state.isExpired = false;
      state.data = initialState.data;
    }
  },
});

export const {
  getSpotifyTokenExpiredAction,
  getAuthRequestAction,
  getSpotifyAuthExpiredTokenAction,
  getSpotifyAuthFailedAction,
  getSpotifyAuthSuccessAction
} = SpotifyAuthSlice.actions;

export default SpotifyAuthSlice;
