import ApiManager from "./ApiManager";

export const MovieNowPlaying = async (data) => {
    try {
        const result = await ApiManager("movie/now_playing?language=en-US", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        });
        return result;
    } catch (error) {
        return error;
    }
};
