import { catchError, from, map, mergeMap, of } from "rxjs";
import { ofType } from "redux-observable";
import { getAuthRequestAction, getSpotifyAuthFailedAction, getSpotifyAuthSuccessAction } from "../reducers/slices/auth.spotify";
import UserAuthService from "../../services/spotify/auth.spotify";

export const getSpotifyAuthEpic = (action$: any) => {
    return action$.pipe(
        ofType(getAuthRequestAction),
        mergeMap(() =>
            from(UserAuthService.getauth()).pipe(
                map((response: any) => {
                    if (response.data) {
                        return getSpotifyAuthSuccessAction(response.data);
                    } else {
                        throw response;
                    }
                }),
                catchError(() => {
                    let result = {
                        message: "Invalid Tokens",
                    };
                    return of(getSpotifyAuthFailedAction(result));
                })
            )
        )
    );
};
