
export function convertDuration(duration_ms: number) {
    const seconds = Math.floor(duration_ms / 10);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes % 60}` : minutes % 60;

    return `${formattedHours}:${formattedMinutes}`;
}