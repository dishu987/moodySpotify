import { API } from "../api.client";
import { ApiConstants } from "../../utils/API.Contasts";
import qs from "qs";

export default class UserAuthService {
    static getauth = () => {
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
        return API.post(ApiConstants.SPOTIFY.AUTHENTICATE, qs.stringify({
            grant_type: 'client_credentials',
            client_id: import.meta.env.VITE_SPOTIFY_CLIENT_ID,
            client_secret: import.meta.env.VITE_SPOTIFY_CLIENT_SECRET,
        }), { headers, });
    };
}
