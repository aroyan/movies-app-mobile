import ApiManager from "./ApiManager";

export const TvOnTheAir = async (data) => {
    try {
        const result = await ApiManager("tv/on_the_air?language=en-US", {
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
