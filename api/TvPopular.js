import ApiManager from "./ApiManager";

export const TvPopular = async (data) => {
    try {
        const result = await ApiManager("tv/popular?language=en-US", {
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
