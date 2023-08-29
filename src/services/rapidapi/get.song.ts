import { API } from "../api.client";
import { ApiConstants } from "../../utils/API.Contasts";


export default class RapidAPISearchService {
    static song = (query: string) => {
        const headers = {
            'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
            'X-RapidAPI-Host': import.meta.env.VITE_RAPIDAPI_URL
        }
        const params = {
            q: query
        }
        return API.get(ApiConstants.RAPIDAPI.SEARCH, { headers, params });
    };
}
