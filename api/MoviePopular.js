import ApiManager from "./ApiManager";

export const MoviePopular = async (data) => {
    try {
        const result = await ApiManager("movie/popular?language=en-US", {
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
