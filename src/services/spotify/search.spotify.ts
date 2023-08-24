import { API } from "../api.client";
import { ApiConstants } from "../../utils/API.Contasts";


// ["album", "artist", "playlist", "track", "show", "episode", "audiobook"];
const itemTypes = ["album", "artist", "playlist", "track"];

export default class SpotifySearchService {
    static search = (query: string, token: string) => {
        const headers = {
            Authorization: `Bearer ${token}`,
        }
        const params = {
            q: query,
            type: itemTypes.join(','),
            limit: 10,
            offset: 0
        }
        return API.get(ApiConstants.SPOTIFY.SEARCH, { headers, params });
    };
}
