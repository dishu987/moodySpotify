import { getSpotifyAuthExpiredTokenAction } from "../../store/reducers/slices/auth.spotify";
import UserAuthService from "../spotify/auth.spotify";

export const handleTokenExpiration = async (dispatch: any, refresh: any) => {
  try {
    const res = await UserAuthService.getauth();
    if (res.data) {
      dispatch(getSpotifyAuthExpiredTokenAction(res.data.access));
    }
  } catch (err) {
    console.log(err);
  }
};
