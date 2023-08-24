export interface AUTH_SPOTIFY_INTERFACE {
    data: {
        token: string;
        msg?: string | null;
    };
    isLoading: false;
    isSuccessful: false;
    isExpired: false;
    error: {};
}