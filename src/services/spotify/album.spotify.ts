import { API } from "../api.client";
import { ApiConstants } from "../../utils/API.Contasts";


export default class SpotifyAlbumService {
    static get = (id: any, token: string) => {
        const headers = {
            Authorization: `Bearer ${token}`,
        }
        return API.get(`${ApiConstants.SPOTIFY.ALBUMS}/${id}`, { headers });
    };
    static track = (id: any, token: string) => {
        const headers = {
            Authorization: `Bearer ${token}`,
        }
        return API.get(`${ApiConstants.SPOTIFY.TRACK}/${id}`, { headers });
    }
}
