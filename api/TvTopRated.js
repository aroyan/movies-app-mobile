import ApiManager from "./ApiManager";

export const TvTopRated = async (data) => {
    try {
        const result = await ApiManager("tv/top_rated?language=en-US", {
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
